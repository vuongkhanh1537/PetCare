// DashboardController.java
package com.project.petcare.controller;

import com.project.petcare.service.DashboardService;

import java.time.YearMonth;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin
@RequestMapping("/api/dashboard")
public class DashboardController {

    private final DashboardService dashboardService;

    @Autowired
    public DashboardController(DashboardService dashboardService) {
        this.dashboardService = dashboardService;
    }

    @GetMapping("/revenue")
    public ResponseEntity<?> calculateRevenue() {
        try {
            double revenue = dashboardService.calculateRevenue();
            return ResponseEntity.ok(revenue);
        } catch (IllegalArgumentException e) {
            return ResponseEntity.badRequest().body("Invalid argument: " + e.getMessage());
        } catch (RuntimeException e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                    .body("Internal Server Error: " + e.getMessage());
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Unexpected error occurred");
        }
    }

    @GetMapping("/monthly-revenue")
    public ResponseEntity<?> calculateRevenueForMonth(@RequestParam int year, @RequestParam int month) {
        try {
            YearMonth targetYearMonth = YearMonth.of(year, month);
            double revenue = dashboardService.calculateRevenueForMonth(targetYearMonth);
            return ResponseEntity.ok(revenue);
        } catch (IllegalArgumentException e) {
            return ResponseEntity.badRequest().body("Invalid argument: " + e.getMessage());
        } catch (RuntimeException e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                    .body("Internal Server Error: " + e.getMessage());
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Unexpected error occurred");
        }
    }

    @GetMapping("/yearly-revenue")
    public ResponseEntity<?> calculateRevenueForYear(@RequestParam int year) {
        try {
            double revenue = dashboardService.calculateRevenueForYear(year);
            return ResponseEntity.ok(revenue);
        } catch (IllegalArgumentException e) {
            return ResponseEntity.badRequest().body("Invalid argument: " + e.getMessage());
        } catch (RuntimeException e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                    .body("Internal Server Error: " + e.getMessage());
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Unexpected error occurred");
        }
    }

    @GetMapping("/total-orders")
    public ResponseEntity<?> calculateTotalOrdersForMonth(@RequestParam int year, @RequestParam int month) {
        try {
            YearMonth targetYearMonth = YearMonth.of(year, month);
            int totalOrders = dashboardService.calculateTotalOrdersForMonth(targetYearMonth);
            return ResponseEntity.ok(totalOrders);
        } catch (IllegalArgumentException e) {
            return ResponseEntity.badRequest().body("Invalid argument: " + e.getMessage());
        } catch (RuntimeException e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                    .body("Internal Server Error: " + e.getMessage());
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Unexpected error occurred");
        }
    }

    @GetMapping("/product-availability")
    public ResponseEntity<Integer> getProductAvailability() {
        try {
            int productAvailability = dashboardService.calculateTotalProductAvailability();
            return ResponseEntity.ok(productAvailability);
        } catch (Exception e) {
            // Log the error or handle it appropriately
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(-1);
        }
    }

    @GetMapping("/revenue-percentage-change")
    public ResponseEntity<Double> getRevenuePercentageChange(@RequestParam int year, @RequestParam int month) {
        try {
            YearMonth targetYearMonth = YearMonth.of(year, month);
            double percentageChange = dashboardService.calculateRevenuePercentageChange(targetYearMonth);
            return ResponseEntity.ok(percentageChange);
        } catch (Exception e) {
            // Log the error or handle it appropriately
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(-1.0);
        }
    }

    @GetMapping("/order-percentage-change")
    public ResponseEntity<Double> getOrderPercentageChange(@RequestParam int year, @RequestParam int month) {
        try {
            YearMonth targetYearMonth = YearMonth.of(year, month);
            double percentageChange = dashboardService.calculateOrderPercentageChange(targetYearMonth);
            return ResponseEntity.ok(percentageChange);
        } catch (Exception e) {
            // Log the error or handle it appropriately
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(-1.0);
        }
    }

    @GetMapping("/num-employee")
    public ResponseEntity<?> numOfEmp(@RequestParam int year, @RequestParam int month) {
        try {
            YearMonth targetYearMonth = YearMonth.of(year, month);
            int empNum = dashboardService.calculateTotalEmployeeForMonth(targetYearMonth);
            return ResponseEntity.ok(empNum);
        } catch (IllegalArgumentException e) {
            return ResponseEntity.badRequest().body("Invalid argument: " + e.getMessage());
        } catch (RuntimeException e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                    .body("Internal Server Error: " + e.getMessage());
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Unexpected error occurred");
        }
    }

    @GetMapping("/eff-employee")
    public ResponseEntity<?> findEmployeeNameWithHighestOrders(@RequestParam int year, @RequestParam int month) {
        try {
            YearMonth targetYearMonth = YearMonth.of(year, month);
            String empNum = dashboardService.findEffectivemployeeName(targetYearMonth);
            return ResponseEntity.ok(empNum);
        } catch (IllegalArgumentException e) {
            return ResponseEntity.badRequest().body("Invalid argument: " + e.getMessage());
        } catch (RuntimeException e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                    .body("Internal Server Error: " + e.getMessage());
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Unexpected error occurred");
        }
    }

    @GetMapping("/eff-employee-num")
    public ResponseEntity<?> findEffectivemployeeNum(@RequestParam int year, @RequestParam int month) {
        try {
            YearMonth targetYearMonth = YearMonth.of(year, month);
            int empNum = dashboardService.findEffectivemployeeNum(targetYearMonth);
            return ResponseEntity.ok(empNum);
        } catch (IllegalArgumentException e) {
            return ResponseEntity.badRequest().body("Invalid argument: " + e.getMessage());
        } catch (RuntimeException e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                    .body("Internal Server Error: " + e.getMessage());
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Unexpected error occurred");
        }
    }

    @GetMapping("/amount-of-dogs-in-month")
    public ResponseEntity<?> getAmountOfDogsInOrdersForMonth(
            @RequestParam int year,
            @RequestParam int month) {
        try {
            YearMonth yearMonth = YearMonth.of(year, month);
            int amount = dashboardService.calculateAmountOfDogsInOrdersForMonth(yearMonth);
            return ResponseEntity.ok(amount);
        } catch (IllegalArgumentException e) {
            return ResponseEntity.badRequest().body("Invalid argument: " + e.getMessage());
        } catch (RuntimeException e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(-1);
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(-1);
        }
    }

    @GetMapping("/amount-of-cats-in-month")
    public ResponseEntity<?> getAmountOfCatsInOrdersForMonth(
            @RequestParam int year,
            @RequestParam int month) {
        try {
            YearMonth yearMonth = YearMonth.of(year, month);
            int amount = dashboardService.calculateAmountOfCatsInOrdersForMonth(yearMonth);
            return ResponseEntity.ok(amount);
        } catch (IllegalArgumentException e) {
            return ResponseEntity.badRequest().body("Invalid argument: " + e.getMessage());
        } catch (RuntimeException e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(-1);
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(-1);
        }
    }

}