// Service.java
package com.project.petcare.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;

@Entity
@Table(name = "service")
public class DichVu {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "ID", updatable = false, nullable = false)
    private Long dichVuId;

    @Column(name = "serviceName", nullable = false)
    @NotBlank(message = "Service name cannot be blank")
    private String tenDichVu;

    @Column(name = "finishTime", nullable = false)
    @NotNull(message = "Completion time cannot be null")
    private String thoiGianHoanThanh;

    @Column(name = "cost", nullable = false)
    @Min(value = 0, message = "Cost must be greater than or equal to 0")
    private int giaThanh;

    @Column(name = "serviceType", nullable = false)
    @NotBlank(message = "Type cannot be blank")
    private String loai;

    @Column(name = "descriptions", nullable = false)
    @NotBlank(message = "Description cannot be blank")
    @Size(max = 60, message = "Description cannot exceed 60 characters")
    private String moTa;

    // Constructors
    public DichVu() {
    }

    public DichVu(String tenDichVu, String thoiGianHoanThanh, int giaThanh, String loai, String moTa) {
        this.tenDichVu = tenDichVu;
        this.thoiGianHoanThanh = thoiGianHoanThanh;
        this.giaThanh = giaThanh;
        this.loai = loai;
        this.moTa = moTa;
    }

    // Getters and Setters
    public Long getId() {
        return dichVuId;
    }

    public void setId(Long id) {
        this.dichVuId = id;
    }

    public String getTenDichVu() {
        return tenDichVu;
    }

    public void setTenDichVu(String tenDichVu) {
        this.tenDichVu = tenDichVu;
    }

    public String getThoiGianHoanThanh() {
        return thoiGianHoanThanh;
    }

    public void setThoiGianHoanThanh(String thoiGianHoanThanh) {
        this.thoiGianHoanThanh = thoiGianHoanThanh;
    }

    public int getGiaThanh() {
        return giaThanh;
    }

    public void setGiaThanh(int giaThanh) {
        this.giaThanh = giaThanh;
    }

    public String getLoai() {
        return loai;
    }

    public void setLoai(String loai) {
        this.loai = loai;
    }

    public String getMoTa() {
        return moTa;
    }

    public void setMoTa(String moTa) {
        this.moTa = moTa;
    }
    // toString method (optional, for debugging)
    @Override
    public String toString() {
        return "DichVu{" +
                "id=" + dichVuId +
                ", tenDichVu='" + tenDichVu + '\'' +
                ", thoiGianHoanThanh='" + thoiGianHoanThanh + '\'' +
                ", giaThanh=" + giaThanh +
                '}';
    }
}