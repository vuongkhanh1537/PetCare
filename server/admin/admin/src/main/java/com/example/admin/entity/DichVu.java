// Service.java
package com.example.admin.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "dich_vu")
public class DichVu {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "DichVuID")
    private Long dichVuId;

    @Column(name = "TenDichVu")
    private String tenDichVu;

    @Column(name = "ThoiGianHoanThanh")
    private String thoiGianHoanThanh;

    @Column(name = "GiaThanh")
    private int giaThanh;

    @Column(name = "Loai")
    private String loai;

    @Column(name = "MoTa")
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