package com.project.petcare.service;

import com.project.petcare.entity.Order;
import com.project.petcare.entity.ProdInOrder;
import com.project.petcare.entity.Product;
import com.project.petcare.repository.OrderRepository;
import com.project.petcare.repository.ProdInOrderRepository;
import com.project.petcare.repository.ProductRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.time.YearMonth;
import java.util.List;

@Service
public class DashboardServiceImpl implements DashboardService {

    private final OrderRepository orderRepository;
    private final ProdInOrderRepository prodInOrderRepository;
    private final ProductRepository productRepository;

    @Autowired
    public DashboardServiceImpl(OrderRepository orderRepository, ProdInOrderRepository prodInOrderRepository, ProductRepository productRepository) {
        this.orderRepository = orderRepository;
        this.prodInOrderRepository = prodInOrderRepository;
        this.productRepository = productRepository;
    }

    @Override
    public double calculateMonthlyRevenue() {
        LocalDate oneMonthAgo = LocalDate.now().minusMonths(1);

        List<Order> paidOrders = orderRepository.findPaidOrdersAfterDate(oneMonthAgo);
        return calculateRevenueFromOrders(paidOrders);
    }

    @Override
    public double calculateRevenueForMonth(YearMonth yearMonth) {
        LocalDate startDate = LocalDate.of(yearMonth.getYear(), yearMonth.getMonth(), 1);
        LocalDate endDate = startDate.plusMonths(1).minusDays(1);

        List<Order> paidOrders = orderRepository.findPaidOrdersBetweenDates(startDate, endDate);
        return calculateRevenueFromOrders(paidOrders);
    }


    @Override
    public double calculateRevenue() {
        try {
            List<Order> paidOrders = orderRepository.findPaidOrdersAfterDate(LocalDate.now().minusYears(100)); 
            return calculateRevenueFromOrders(paidOrders);
        } catch (Exception e) {
            // Log the error or handle it appropriately
            e.printStackTrace();
            throw new RuntimeException("Error calculating revenue");
        }
    }

    @Override
    public int calculateTotalProductAvailability() {
        try {
            List<Product> allProducts = productRepository.findAll();
            return calculateProductAvailability(allProducts);
        } catch (Exception e) {
            // Log the error or handle it appropriately
            e.printStackTrace();
            throw new RuntimeException("Error calculating total product availability");
        }
    }

    @Override
    public int calculateTotalOrdersForMonth(YearMonth yearMonth) {
        try {
            LocalDate startDate = LocalDate.of(yearMonth.getYear(), yearMonth.getMonth(), 1);
            LocalDate endDate = startDate.plusMonths(1).minusDays(1);

            List<Order> orders = orderRepository.findOrdersBetweenDates(startDate, endDate);
            return orders.size();
        } catch (Exception e) {
            // Log the error or handle it appropriately
            e.printStackTrace();
            throw new RuntimeException("Error calculating total orders for the month");
        }
    }

    @Override
    public double calculateRevenuePercentageChange(YearMonth targetYearMonth) {
        try {
            double thisMonthRevenue = calculateRevenueForMonth(targetYearMonth);
            double lastMonthRevenue = calculateRevenueForMonth(targetYearMonth.minusMonths(1));

            // Calculate percentage change
            return calculateRevenuePercentageChange(thisMonthRevenue, lastMonthRevenue);
        } catch (Exception e) {
            // Log the error or handle it appropriately
            e.printStackTrace();
            throw new RuntimeException("Error calculating percentage change for the month");
        }
    }
    

    private double calculateRevenueFromOrders(List<Order> orders) {
        double totalRevenue = 0.0;

        for (Order order : orders) {
            List<ProdInOrder> productsInOrder = prodInOrderRepository.findInfoOfOrder(order.getId());

            for (ProdInOrder productInOrder : productsInOrder) {
                totalRevenue += productInOrder.getTotalPrice();
            }
        }

        return totalRevenue;
    }

    private int calculateProductAvailability(List<Product> products) {
        int totalAvailability = 0;
        for (Product product : products) {
            totalAvailability += product.getQuantity();
        }
        return totalAvailability;
    }
    
    private double calculateRevenuePercentageChange(double thisMonthRevenue, double lastMonthRevenue) {
        if (lastMonthRevenue == 0) {
            return 100.0; // To handle cases where last month revenue is zero
        }
        return ((thisMonthRevenue - lastMonthRevenue) / lastMonthRevenue) * 100.0;
    }

    private double calculateRevenueFromPastMonths(int months) {
        LocalDate startDate = LocalDate.now().minusMonths(months);
        List<Order> paidOrders = orderRepository.findPaidOrdersAfterDate(startDate);
        return calculateRevenueFromOrders(paidOrders);
    }
    // Implement other methods for dashboard functionalities
}
