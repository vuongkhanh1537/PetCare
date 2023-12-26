package com.project.petcare.service;

import java.time.YearMonth;

public interface DashboardService {
    double calculateMonthlyRevenue();

    public double calculateRevenueForMonth(YearMonth yearMonth);

    public int calculateTotalOrdersForMonth(YearMonth yearMonth);

    public int calculateTotalEmployeeForMonth(YearMonth yearMonth);

    public double calculateRevenueForYear(int year);

    double calculateRevenue();

    int calculateTotalProductAvailability();

    public double calculateRevenuePercentageChange(YearMonth targetYearMonth);

    public double calculateOrderPercentageChange(YearMonth targetYearMonth);

    public String findEffectivemployeeName(YearMonth yearMonth);

    public int findEffectivemployeeNum(YearMonth yearMonth);

    public int calculateAmountOfDogsInOrdersForMonth(YearMonth yearMonth);

    public int calculateAmountOfCatsInOrdersForMonth(YearMonth yearMonth);
    // Add other methods for dashboard functionalities
}