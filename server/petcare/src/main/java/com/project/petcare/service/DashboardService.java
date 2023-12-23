package com.project.petcare.service;

import java.time.YearMonth;

public interface DashboardService {
    double calculateMonthlyRevenue();
    public double calculateRevenueForMonth(YearMonth yearMonth);
    public int calculateTotalOrdersForMonth(YearMonth yearMonth);
    double calculateRevenue();
    int calculateTotalProductAvailability();
    public double calculateRevenuePercentageChange(YearMonth targetYearMonth);
    public double calculateOrderPercentageChange(YearMonth targetYearMonth);
    // Add other methods for dashboard functionalities
}
