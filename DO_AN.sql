CREATE SCHEMA DO_AN_HTTT;
USE DO_AN_HTTT;
-- Create user table
CREATE TABLE nhan_vien (
    NVid VARCHAR(10) PRIMARY KEY,
    ChucVu VARCHAR(30) NOT NULL,
    MaCCCD VARCHAR(30) NOT NULL,
    NoiCap VARCHAR(30) NOT NULL,
    NgayCap DATE NOT NULL,
    GioiTinh VARCHAR(6) NOT NULL,
    SDT VARCHAR(10) NOT NULL,
    HoVaTenDem VARCHAR(30) NOT NULL,
    TenDau VARCHAR(20) NOT NULL,
    TenDangNhap VARCHAR(30) NOT NULL,
    MatKhau VARCHAR(30) NOT NULL
);

-- Create customer table
CREATE TABLE khach_hang (
    KHid VARCHAR(10) PRIMARY KEY,
    SDT VARCHAR(10) NOT NULL,
    HoVaTenDem VARCHAR(30) NOT NULL,
    TenDau VARCHAR(20) NOT NULL,
    UserType VARCHAR(3) NOT NULL,
    TenDangNhap VARCHAR(30) NOT NULL,
    MatKhau VARCHAR(30) NOT NULL
);

CREATE TABLE don_hang (
    MaDon VARCHAR(10) PRIMARY KEY,
    NgayDat DATE NOT NULL,
    TrangThai VARCHAR(30) NOT NULL,
    Loai VARCHAR(20) NOT NULL,
    KHid VARCHAR(10) NOT NULL,
    FOREIGN KEY(KHid) REFERENCES khach_hang(KHid)
);

-- Create sales employee and customer care employee tables
CREATE TABLE nhan_vien_ban_hang (
    NVBHid VARCHAR(10) UNIQUE,
    LoaiNV VARCHAR(20),
    FOREIGN KEY(NVBHid) REFERENCES nhan_vien(NVid)
);

CREATE TABLE nhan_vien_cham_soc (
    NVCSid VARCHAR(10) UNIQUE,
    LoaiNV VARCHAR(20),
    FOREIGN KEY(NVCSid) REFERENCES nhan_vien(NVid)
);

-- Create and manage pet records
CREATE TABLE thu_cung (
    PetID VARCHAR(10) PRIMARY KEY,
    Ten VARCHAR(30) NOT NULL,
    Loai VARCHAR(20) NOT NULL,
    Chung VARCHAR(20) NOT NULL,
    GioiTinh VARCHAR(6) NOT NULL,
    Tuoi INT NOT NULL,
    CanNang FLOAT NOT NULL,
    MaKhachHang VARCHAR(10) NOT NULL,
    FOREIGN KEY(MaKhachHang) REFERENCES khach_hang(KHid)
);

CREATE TABLE benh_an (
    petID VARCHAR(10),
    STT INT NOT NULL,
    Loai VARCHAR(20) NOT NULL,
    NgayKham DATE NOT NULL,
    FOREIGN KEY(petID) REFERENCES thu_cung(PetID)
);

CREATE TABLE quan_ly_benh_an (
    petID VARCHAR(10),
    STTBenhAn INT NOT NULL,
    NVCSid VARCHAR(10),
    FOREIGN KEY(petID) REFERENCES thu_cung(PetID),
    FOREIGN KEY(NVCSid) REFERENCES nhan_vien_cham_soc(NVCSid)
);

-- Intermediate product tables
CREATE TABLE gio_hang (
    GioHangID VARCHAR(10) PRIMARY KEY,
    KHid VARCHAR(10) NOT NULL,
    FOREIGN KEY(KHid) REFERENCES khach_hang(KHid)
);

CREATE TABLE san_pham (
    SanPhamID VARCHAR(10) PRIMARY KEY,
    NhaCungCap VARCHAR(30) NOT NULL,
    SoLuong INT NOT NULL,
    TenSanPham VARCHAR(30) NOT NULL,
    MoTa VARCHAR(60) NOT NULL,
    PhanLoaiSanPham VARCHAR(30) NOT NULL,
    Loai VARCHAR(10) NOT NULL,
    PhamLoai VARCHAR(30) NOT NULL,
    GiaThanh INT NOT NULL
);

CREATE TABLE dich_vu (
    DichVuID VARCHAR(10) PRIMARY KEY,
    TenDichVu VARCHAR(30) NOT NULL,
    ThoiGianHoanThanh TIME NOT NULL,
    GiaThanh INT NOT NULL,
    Loai varchar(20) NOT NULL,
    MoTa varchar(60) NOT NULL
);

-- Create product order tables
CREATE TABLE gio_hang_va_san_pham (
    GioHangID VARCHAR(10) NOT NULL,
    SanPhamID VARCHAR(10) NOT NULL,
    SoLuong INT NOT NULL,
    FOREIGN KEY(GioHangID) REFERENCES gio_hang(GioHangID),
    FOREIGN KEY(SanPhamID) REFERENCES san_pham(SanPhamID)
);

CREATE TABLE don_san_pham (
    DonSanPhamID VARCHAR(10) PRIMARY KEY,
    NVBHid VARCHAR(10) NOT NULL,
    FOREIGN KEY(NVBHid) REFERENCES nhan_vien_ban_hang(NVBHid)
);

CREATE TABLE san_pham_va_don_hang_san_pham (
    SanPhamID VARCHAR(10) NOT NULL,
    DonSanPhamID VARCHAR(10) NOT NULL,
    FOREIGN KEY(SanPhamID) REFERENCES san_pham(SanPhamID),
    FOREIGN KEY(DonSanPhamID) REFERENCES don_san_pham(DonSanPhamID)
);

-- Create service order tables
CREATE TABLE don_dich_vu (
    DonDichVuID VARCHAR(10) PRIMARY KEY,
    NgayDat DATE NOT NULL,
    NgayTraPet DATE NOT NULL,
    PetID VARCHAR(10) NOT NULL,
    FOREIGN KEY(PetID) REFERENCES thu_cung(PetID)
);

CREATE TABLE dich_vu_va_don_hang_dich_vu (
    DichVuID VARCHAR(10) NOT NULL,
    DonDichVuID VARCHAR(10) NOT NULL,
    FOREIGN KEY(DichVuID) REFERENCES dich_vu(DichVuID),
    FOREIGN KEY(DonDichVuID) REFERENCES don_dich_vu(DonDichVuID)
);

CREATE TABLE gio_hang_va_dich_vu (
    GioHangID VARCHAR(10) NOT NULL,
    DichVuID VARCHAR(10) NOT NULL,
    FOREIGN KEY(GioHangID) REFERENCES gio_hang(GioHangID),
    FOREIGN KEY(DichVuID) REFERENCES dich_vu(DichVuID)
);

CREATE TABLE NVCS_don_hang_dich_vu (
    NVCSid VARCHAR(10) NOT NULL,
    DonDichVuID VARCHAR(10) NOT NULL,
    FOREIGN KEY(NVCSid) REFERENCES nhan_vien_cham_soc(NVCSid),
    FOREIGN KEY(DonDichVuID) REFERENCES don_dich_vu(DonDichVuID)
);




INSERT INTO `do_an_httt`.`nhan_vien` (`NVid`, `ChucVu`, `MaCCCD`, `NoiCap`, `NgayCap`, `GioiTinh`, `SDT`, `HoVaTenDem`, `TenDau`, `TenDangNhap`, `MatKhau`) VALUES ('NVCS000001', 'Chăm sóc', '0123456789123', 'TPHCM', '1998-01-02', 'female', '3372847832', 'Phạm Hồng ', 'Thắm', 'adminNo00', 'adminNo00');
INSERT INTO `do_an_httt`.`nhan_vien` (`NVid`, `ChucVu`, `MaCCCD`, `NoiCap`, `NgayCap`, `GioiTinh`, `SDT`, `HoVaTenDem`, `TenDau`, `TenDangNhap`, `MatKhau`) VALUES ('NVCS000002', 'Chăm sóc', '1233431244252', 'TPHCM', '2003-12-21', 'male', '2846759837', 'Nguyễn Văn ', 'Danh', 'adminNo01', 'adminNo01');
INSERT INTO `do_an_httt`.`nhan_vien` (`NVid`, `ChucVu`, `MaCCCD`, `NoiCap`, `NgayCap`, `GioiTinh`, `SDT`, `HoVaTenDem`, `TenDau`, `TenDangNhap`, `MatKhau`) VALUES ('NVCS000003', 'Chăm sóc', '4857693493733', 'TPHCM', '2003-01-02', 'male', '0983657195', 'Trần Đức', 'Hiếu', 'adminNo02', 'adminNo02');
INSERT INTO `do_an_httt`.`nhan_vien` (`NVid`, `ChucVu`, `MaCCCD`, `NoiCap`, `NgayCap`, `GioiTinh`, `SDT`, `HoVaTenDem`, `TenDau`, `TenDangNhap`, `MatKhau`) VALUES ('NVCS000004', 'Thú y', '2383476586435', 'Long An', '2000-01-23', 'female', '0987395476', 'Lê Minh', 'Thu', 'adminNo03', 'adminNo03');
INSERT INTO `do_an_httt`.`nhan_vien` (`NVid`, `ChucVu`, `MaCCCD`, `NoiCap`, `NgayCap`, `GioiTinh`, `SDT`, `HoVaTenDem`, `TenDau`, `TenDangNhap`, `MatKhau`) VALUES ('NVBH000001', 'Bán hàng', '1343857348575', 'An Giang', '1999-12-12', 'male', '0384613944', 'Đặng Văn ', 'Bi', 'adminNo04', 'adminNo04');
INSERT INTO `do_an_httt`.`nhan_vien` (`NVid`, `ChucVu`, `MaCCCD`, `NoiCap`, `NgayCap`, `GioiTinh`, `SDT`, `HoVaTenDem`, `TenDau`, `TenDangNhap`, `MatKhau`) VALUES ('NVBH000002', 'Bán hàng', '5668494696666', 'TPHCM', '2001-04-05', 'female', '0283484758', 'Lê Văn Diệu', 'Thi', 'adminNo05', 'adminNo05');
INSERT INTO `do_an_httt`.`nhan_vien` (`NVid`, `ChucVu`, `MaCCCD`, `NoiCap`, `NgayCap`, `GioiTinh`, `SDT`, `HoVaTenDem`, `TenDau`, `TenDangNhap`, `MatKhau`) VALUES ('NVBH000003', 'Bán hàng', '3476769567799', 'TPHCM', '1998-11-17', 'female', '0586948334', 'Nguyễn Bảo', 'Châu', 'adminNo06', 'adminNo06');
INSERT INTO `do_an_httt`.`nhan_vien` (`NVid`, `ChucVu`, `MaCCCD`, `NoiCap`, `NgayCap`, `GioiTinh`, `SDT`, `HoVaTenDem`, `TenDau`, `TenDangNhap`, `MatKhau`) VALUES ('NVBH000004', 'Bán hàng', '8849475682395', 'Long An', '2000-12-12', 'female', '0347584757', 'Đỗ Thị', 'Lan', 'adminNo07', 'adminNo07');




-- Select query
SELECT NVid, HoVaTenDem, TenDau, UserType FROM nhan_vien;

SELECT * FROM don_hang;

SELECT * FROM san_pham;






-- Login check functions
DELIMITER //

CREATE FUNCTION account_exist1(value1 varchar(30), value2 varchar(30)) RETURNS BOOLEAN
BEGIN
    DECLARE count_rows INT;

    SELECT COUNT(*) INTO count_rows
    FROM khach_hang
    WHERE TenDangNhap = value1 AND MatKhau = value2;

    IF count_rows = 2 THEN
        RETURN TRUE;
    ELSE
        RETURN FALSE;
    END IF;
END //

DELIMITER ;


DELIMITER //
CREATE FUNCTION CheckAccountExistence2(
    AccountCheck2 VARCHAR(30),
    PasswordCheck2 VARCHAR(30)
)
RETURNS BOOLEAN
BEGIN
    DECLARE Result2 BOOLEAN;

    IF EXISTS (SELECT 1 FROM nhan_vien WHERE TenDangNhap = AccountCheck2 AND MatKhau = PasswordCheck2) THEN
        SET Result2 = TRUE;
    ELSE
        SET Result2 = FALSE;
    END IF;

    RETURN Result2;
END;
//

DELIMITER ;
-- Example of using the login check function


-- drop schema DO_AN_HTTT;
