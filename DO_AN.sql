CREATE SCHEMA DA_DB;
USE DA_DB;
-- Create user table
CREATE TABLE employee (
    ID int PRIMARY KEY,
    employeeRole VARCHAR(30) NOT NULL,
    CCCD VARCHAR(30) NOT NULL,
    Place VARCHAR(30) NOT NULL,
    CCCDdate DATE NOT NULL,
    gender VARCHAR(6) NOT NULL,
    phone_num VARCHAR(10) NOT NULL,
    fname VARCHAR(40) NOT NULL,
    lname VARCHAR(20) NOT NULL,
    Bdate DATE NOT NULL,
    Email VARCHAR(50) NOT NULL,
    Address VARCHAR(50) NOT  NULL,
    username VARCHAR(30) NOT NULL,
    userpassword VARCHAR(30) NOT NULL
);
INSERT INTO `da_db`.`employee` (`ID`, `employeeRole`, `CCCD`, `Place`, `CCCDdate`, `gender`, `phone_num`, `fname`, `lname`, `Bdate`, `Email`, `Address`, `username`, `userpassword`) VALUES ('1', 'Nhân viên bán hàng', '123456789012', 'An Giang', '2020-12-12', 'female', '0492849582', 'Nguyễn Thị', 'Định', '1999-12-12', 'dinh@gmail.com', 'Q1, TPHCM', 'admin01', 'admin01');
INSERT INTO `da_db`.`employee` (`ID`, `employeeRole`, `CCCD`, `Place`, `CCCDdate`, `gender`, `phone_num`, `fname`, `lname`, `Bdate`, `Email`, `Address`, `username`, `userpassword`) VALUES ('2', 'Nhân viên bán hàng', '194860375823', 'TPHCM', '2021-12-20', 'female', '0094287582', 'Kiều Thị', 'Hòa', '2001-10-12', 'hoa@gmail.com', 'Q1, TPHCM', 'admin02', 'admin02');
INSERT INTO `da_db`.`employee` (`ID`, `employeeRole`, `CCCD`, `Place`, `CCCDdate`, `gender`, `phone_num`, `fname`, `lname`, `Bdate`, `Email`, `Address`, `username`, `userpassword`) VALUES ('3', 'Nhân viên bán hàng', '345657364623', 'TPHCM', '2018-12-13', 'female', '0961247472', 'Đỗ Lan', 'Anh', '2000-01-01', 'anh@gmail.com', 'Q1, TPHCM', 'admin03', 'admin03');
INSERT INTO `da_db`.`employee` (`ID`, `employeeRole`, `CCCD`, `Place`, `CCCDdate`, `gender`, `phone_num`, `fname`, `lname`, `Bdate`, `Email`, `Address`, `username`, `userpassword`) VALUES ('4', 'Nhân viên bán hàng', '234634577345', 'TPHCM', '2020-02-20', 'female', '0948572423', 'Lê Văn Diệu', 'Thi', '1999-01-12', 'thi@gmail.com', 'Thủ Đức, TPHCM', 'admin04', 'admin04');
INSERT INTO `da_db`.`employee` (`ID`, `employeeRole`, `CCCD`, `Place`, `CCCDdate`, `gender`, `phone_num`, `fname`, `lname`, `Bdate`, `Email`, `Address`, `username`, `userpassword`) VALUES ('5', 'Nhân viên bán hàng', '345465476767', 'TPHCM', '2019-02-23', 'male', '0945684582', 'Trần Đức', 'Đạt', '2000-03-04', 'dat@gmail.com', 'Q Gò Vấp, TPHCM', 'admin05', 'admin05');
INSERT INTO `da_db`.`employee` (`ID`, `employeeRole`, `CCCD`, `Place`, `CCCDdate`, `gender`, `phone_num`, `fname`, `lname`, `Bdate`, `Email`, `Address`, `username`, `userpassword`) VALUES ('6', 'Nhân viên bán hàng', '353453456732', 'TPHCM', '2021-09-08', 'male', '0345854334', 'Vũ Thanh', 'Tài', '2000-04-05', 'tai@gmail.com', 'Q1, TPHCM', 'admin06', 'admin06');
INSERT INTO `da_db`.`employee` (`ID`, `employeeRole`, `CCCD`, `Place`, `CCCDdate`, `gender`, `phone_num`, `fname`, `lname`, `Bdate`, `Email`, `Address`, `username`, `userpassword`) VALUES ('7', 'Nhân viên bán hàng', '676979656445', 'Long An', '2022-04-22', 'male', '0728672436', 'Tạ Quang', 'Khánh', '2000-06-09', 'khanh@gmail.com', 'Q1, TPHCM', 'admin07', 'admin07');
INSERT INTO `da_db`.`employee` (`ID`, `employeeRole`, `CCCD`, `Place`, `CCCDdate`, `gender`, `phone_num`, `fname`, `lname`, `Bdate`, `Email`, `Address`, `username`, `userpassword`) VALUES ('8', 'Nhân viên bán hàng', '345662223395', 'Long An', '2020-10-10', 'female', '0123456789', 'Trần Kim', 'Hồng', '1999-11-23', 'hong@gmail.com', 'Q Gò Vấp, TPHCM', 'admin08', 'admin08');


CREATE TABLE orders (
    ID INT PRIMARY KEY,
    ordersStatus VARCHAR(30) NOT NULL

);
INSERT INTO `da_db`.`orders` (`ID`,  `ordersStatus`) VALUES ('1',  'Đang gửi' );
INSERT INTO `da_db`.`orders` (`ID`,  `ordersStatus`) VALUES ('2',  'Đang gửi');
INSERT INTO `da_db`.`orders` (`ID`,  `ordersStatus`) VALUES ('3',  'Đang gửi');
INSERT INTO `da_db`.`orders` (`ID`,  `ordersStatus`) VALUES ('4',  'Đã gửi');
INSERT INTO `da_db`.`orders` (`ID`,  `ordersStatus`) VALUES ('5',  'Chưa gửi');
INSERT INTO `da_db`.`orders` (`ID`,  `ordersStatus`) VALUES ('6',  'Chưa gửi');


CREATE TABLE product (
    ID INT PRIMARY KEY,
    provider VARCHAR(50) NOT NULL,
    numberOf INT NOT NULL,
    productname VARCHAR(200) NOT NULL,
    descriptions VARCHAR(500) NOT NULL,
    type1 VARCHAR(30) NOT NULL,
    type2 VARCHAR(30) NOT NULL,
    cost INT NOT NULL,
    allowance boolean
);
INSERT INTO `da_db`.`product` (`ID`, `provider`, `numberOf`, `productname`, `descriptions`, `type1`, `type2`, `cost`, `allowance`) VALUES ('1', 'A company', '58', 'THỨC ĂN HẠT KHÔ CHO CHÓ MỌI LỨA TUỔI VỊ GÀ TÂY NUTRIENCE SUBZERO FRASER VALLEY BAO 2.27 KG', 'Nutrience Subzero Fraser Valley cho Chó có hạt thịt tươi thơm ngon, sử dụng các nguồn nguyên liệu tự nhiên tươi sống của Canada như thịt gà Canada thả vườn, gà tây, cá hồi, cá trích, cá tuyết, gan gà, tim gà, gan gà tây, tim gà tây, gan cá tuyết và hạt thịt gà tươi sấy lạnh để cho ra hương vị tuyệt hảo có thể khiến cho những chú chó cưng khó tính nhất cũng phải thèm ăn.', 'Chó', 'Thức ăn', '648000','1');
INSERT INTO `da_db`.`product` (`ID`, `provider`, `numberOf`, `productname`, `descriptions`, `type1`, `type2`, `cost`, `allowance`) VALUES ('2', 'A company', '54', 'THỨC ĂN HẠT CHO GIỐNG CHÓ NHỎ TỪ 10 THÁNG ĐẾN 8 TUỔI 3KG VỊ GÀ REFLEX PLUS MINI & SMALL BREED ADULT', 'Thức ăn cho chó con REFLEX PLUS MINI & SMALL BREED JUNIOR Chicken là thức ăn với hỗn hợp hoàn chỉnh cao cấp cho giống chó con & chó cỡ nhỏ với hương vị thịt gà.', 'Chó', 'Thức ăn', '250000','1');
INSERT INTO `da_db`.`product` (`ID`, `provider`, `numberOf`, `productname`, `descriptions`, `type1`, `type2`, `cost`, `allowance`) VALUES ('3', 'A company', '45', 'THỨC ĂN HẠT CHO CON GIỐNG CHÓ NHỎ TỪ 2 -10 THÁNG TUỔI VỊ THỊT GÀ 3KG REFLEX PLUS MINI & SMALL BREED JUNIOR RPD391', 'Thức ăn cho chó con REFLEX PLUS MINI & SMALL BREED JUNIOR Chicken là thức ăn với hỗn hợp hoàn chỉnh cao cấp cho giống chó con & chó cỡ nhỏ với hương vị thịt gà.', 'Chó', 'Thức ăn', '270000','1');
INSERT INTO `da_db`.`product` (`ID`, `provider`, `numberOf`, `productname`, `descriptions`, `type1`, `type2`, `cost`, `allowance`) VALUES ('4', 'A company', '56', 'SNACK PHÔ MAI VIÊN SMARTHEART CHEDDAR CUBE 50G', 'Hỗ trợ tiêu hóa. Nguyên liệu từ phô mai thật. Snack phô mai viên cho chó gói 50g - Smartheart Cheddar Cube. Làm từ phô mai thật bổ sung các hương vị thơm ngon, hấp dẫn khiến chó cưng khó cưỡng lại. Làm từ phô mai Cheddar thật. Dạng viên nhỏ dễ ăn. Phù hợp với mọi giống chó với 2 hương vị thơm ngon', 'Chó', 'Thức ăn', '35000','1');
INSERT INTO `da_db`.`product` (`ID`, `provider`, `numberOf`, `productname`, `descriptions`, `type1`, `type2`, `cost`, `allowance`) VALUES ('5', 'B company', '67', 'THỨC ĂN HẠT MỀM CHO CHÓ CON GRAIN FREE ZENITH PUPPY', 'Thức ăn hạt mềm Zenith Grain Free cho chó con chất lượng tốt túi 1,2kg. Thức ăn Zenith dành cho chó mèo là sản phẩm chất lượng tốt, được sản xuất bởi Bow Wow Korea. Những công thức chế biến thức ăn đặc biệt được chuyên gia dày công nghiên cứu. Từ đó, tạo nên những sản phẩm với nhiều ưu điểm vượt trội đạt chuẩn quốc tế.', 'Chó', 'Thức ăn', '79000','1');
INSERT INTO `da_db`.`product` (`ID`, `provider`, `numberOf`, `productname`, `descriptions`, `type1`, `type2`, `cost`, `allowance`) VALUES ('6', 'A company', '45', 'THỨC ĂN HẠT MỀM CHO CHÓ TRƯỞNG THÀNH GRAIN FREE ZENITH', 'Thức ăn hạt mềm Zenith Grain Free cho chó trưởng thành chất lượng tốt túi 1,2kg. Thức ăn Zenith dành cho chó mèo là sản phẩm chất lượng tốt, được sản xuất bởi Bow Wow Korea. Những công thức chế biến thức ăn đặc biệt được chuyên gia dày công nghiên cứu. Từ đó, tạo nên những sản phẩm với nhiều ưu điểm vượt trội đạt chuẩn quốc tế.', 'Chó', 'Thức ăn', '79000','1');
INSERT INTO `da_db`.`product` (`ID`, `provider`, `numberOf`, `productname`, `descriptions`, `type1`, `type2`, `cost`, `allowance`) VALUES ('7', 'C company', '50', 'SÚP THƯỞNG SMARTHEART CHO CHÓ 15GX4', 'strawberry flavor - hương dâu. chicken & pumpkin - vị thịt gà và bí ngô. chicken & Carrot - vị thịt gà và cà rốt. chicken & spinach - vị thịt gà và cải bó xôi', 'Chó', 'Thức ăn', '36000','1');
INSERT INTO `da_db`.`product` (`ID`, `provider`, `numberOf`, `productname`, `descriptions`, `type1`, `type2`, `cost`, `allowance`) VALUES ('8', 'A company', '70', 'THỨC ĂN HẠT TASTE OF THE WILD CHO CHÓ VỊ BÒ RỪNG VÀ NAI NƯỚNG HIGH PRAIRIE-8885003134820', 'Công thức Thức ăn hạt TASTE OF THE WILD HIGH PRAIRIE PUPPY cung cấp năng lượng và dễ dàng tiêu hóa cho những chú cún đang trong giai đoạn phát triển của bạn. Sự kết hợp độc đáo từ thịt nướng, rau củ, các loại đậu và trái cây được tổng hợp trong 8mm giúp cún con dễ dàng thưởng thức và hấp thu đầy đủ dinh dưỡng cần thiết cho cơ thể. ', 'Chó', 'Thức ăn', '125000','1');
INSERT INTO `da_db`.`product` (`ID`, `provider`, `numberOf`, `productname`, `descriptions`, `type1`, `type2`, `cost`, `allowance`) VALUES ('9', 'C company', '36', 'LỒNG VẬN CHUYỂN CHO THÚ CƯNG HKX-002 JCB', 'Chất liệu nhựa cao cấp, độ bền cao. Phần chốt rất chắc đảm bảo thú cưng không thể tự chạy ra. Có thể tháo rời giúp vệ sinh dễ dàng. Phần cửa được làm từ vật liệu không gỉ. Chất liệu đạt tiêu chuẩn an toàn, bảo đảm về quy định vận chuyển vật nuôi của hãng hàng không. Thương hiệu: JCB', 'Chó', 'Lồng', '488000','1');
INSERT INTO `da_db`.`product` (`ID`, `provider`, `numberOf`, `productname`, `descriptions`, `type1`, `type2`, `cost`, `allowance`) VALUES ('10', 'A company', '40', 'LỒNG VẬN CHUYỂN CHO THÚ CƯNG HKX-003 JCB', 'Chất liệu nhựa cao cấp, độ bền cao. Phần chốt rất chắc đảm bảo thú cưng không thể tự chạy ra. Có thể tháo rời giúp vệ sinh dễ dàng. Phần cửa được làm từ vật liệu không gỉ. Chất liệu đạt tiêu chuẩn an toàn, bảo đảm về quy định vận chuyển vật nuôi của hãng hàng không. Thương hiệu: JCB', 'Chó', 'Lồng', '935000','1');
INSERT INTO `da_db`.`product` (`ID`, `provider`, `numberOf`, `productname`, `descriptions`, `type1`, `type2`, `cost`, `allowance`) VALUES ('11', 'A company', '40', 'LỒNG VẬN CHUYỂN CHO THÚ CƯNG HKX-004 | JCB', 'Chất liệu nhựa cao cấp, độ bền cao. Phần chốt rất chắc đảm bảo thú cưng không thể tự chạy ra. Có thể tháo rời giúp vệ sinh dễ dàng. Phần cửa được làm từ vật liệu không gỉ. Chất liệu đạt tiêu chuẩn an toàn, bảo đảm về quy định vận chuyển vật nuôi của hãng hàng không. Thương hiệu: JCB', 'Chó', 'Lồng', '1612000','1');
INSERT INTO `da_db`.`product` (`ID`, `provider`, `numberOf`, `productname`, `descriptions`, `type1`, `type2`, `cost`, `allowance`) VALUES ('12', 'A company', '50', 'LỒNG VẬN CHUYỂN CHO THÚ CƯNG HKX-005 | JCB', 'Chất liệu nhựa cao cấp, độ bền cao. Phần chốt rất chắc đảm bảo thú cưng không thể tự chạy ra. Có thể tháo rời giúp vệ sinh dễ dàng. Phần cửa được làm từ vật liệu không gỉ. Chất liệu đạt tiêu chuẩn an toàn, bảo đảm về quy định vận chuyển vật nuôi của hãng hàng không. Thương hiệu: JCB', 'Chó', 'Lồng', '2842000','1');
INSERT INTO `da_db`.`product` (`ID`, `provider`, `numberOf`, `productname`, `descriptions`, `type1`, `type2`, `cost`, `allowance`) VALUES ('13', 'A company', '50', 'RỌ MÕM CHÓ XS P814 | PIAN PIAN- 9X7.1X6.2', 'Rọ mõm cho chó mèo này sử dụng chất liệu nhựa PE cực kỳ mềm mại và an toàn. Thiết kế lưới thoáng khí và khả năng mở rộng tuyệt vời. Cụ thể hơn, kích thước có thể được điều chỉnh linh động để giúp thú cưng cảm thấy thoải mái khi đeo và bạn cũng có dễ đeo cho chúng hơn. Thương hiệu mới và chất lượng cao. Các tính năng chính: bền bỉ, dễ sử dụng, có thể tự do điều chỉnh', 'Chó', 'Rọ mõm', '44000','0');
INSERT INTO `da_db`.`product` (`ID`, `provider`, `numberOf`, `productname`, `descriptions`, `type1`, `type2`, `cost`, `allowance`) VALUES ('14', 'D company', '60', 'RỌ MÕM CHÓ S P813-1 | PIAN PIAN- 10.5X7.5X10.2', 'Rọ mõm cho chó mèo này sử dụng chất liệu nhựa PE cực kỳ mềm mại và an toàn. Thiết kế lưới thoáng khí và khả năng mở rộng tuyệt vời. Cụ thể hơn, kích thước có thể được điều chỉnh linh động để giúp thú cưng cảm thấy thoải mái khi đeo và bạn cũng có dễ đeo cho chúng hơn. Thương hiệu mới và chất lượng cao. Các tính năng chính: bền bỉ, dễ sử dụng, có thể tự do điều chỉnh', 'Chó', 'Rọ mõm', '50000','1');
INSERT INTO `da_db`.`product` (`ID`, `provider`, `numberOf`, `productname`, `descriptions`, `type1`, `type2`, `cost`, `allowance`) VALUES ('15', 'A company', '70', 'RỌ MÕM CHÓ M P813 | PIAN PIAN- 12X8.4X10', 'Rọ mõm cho chó mèo này sử dụng chất liệu nhựa PE cực kỳ mềm mại và an toàn. Thiết kế lưới thoáng khí và khả năng mở rộng tuyệt vời. Cụ thể hơn, kích thước có thể được điều chỉnh linh động để giúp thú cưng cảm thấy thoải mái khi đeo và bạn cũng có dễ đeo cho chúng hơn. Thương hiệu mới và chất lượng cao. Các tính năng chính: bền bỉ, dễ sử dụng, có thể tự do điều chỉnh', 'Chó', 'Rọ mõm', '56000','0');
INSERT INTO `da_db`.`product` (`ID`, `provider`, `numberOf`, `productname`, `descriptions`, `type1`, `type2`, `cost`, `allowance`) VALUES ('16', 'D company', '50', 'THỨC ĂN CHO MÈO TRƯỞNG THÀNH VỊ THỊT GÀ 1.5KG REFLEX PLUS RPC551', 'Thức ăn hạt Reflex Plus cho mèo trưởng thành kén ăn vị cá hồi túi 1,5kg Hạt Reflex Plus Adult Cat 1,5kg có công thức hoàn chỉnh, cung cấp dinh dưỡng tốt nhất cho mèo kén ăn, ăn ít.  ', 'Mèo', 'Thức ăn', '157000','1');
INSERT INTO `da_db`.`product` (`ID`, `provider`, `numberOf`, `productname`, `descriptions`, `type1`, `type2`, `cost`, `allowance`) VALUES ('17', 'D company', '30', 'SÚP THƯỞNG ME-O 15G CHO MÈO', 'Súp Thưởng Me-O Creamy có thành phần dinh dưỡng dồi dào như: prebiotics, omega 3 và 6, kẽm, trà xanh, taurine, chất xơ. Với các công dụng như: cải thiện hệ tiêu hoá, nuôi dưỡng bộ lông mượt mà, giảm mùi hôi phân, tăng đề kháng và thị giác.', 'Mèo', 'Thức ăn', '7000','1');
INSERT INTO `da_db`.`product` (`ID`, `provider`, `numberOf`, `productname`, `descriptions`, `type1`, `type2`, `cost`, `allowance`) VALUES ('18', 'A company', '33', 'THỨC ĂN HẠT CHO MÈO CAO CẤP ME-O GOLD 400G', 'Dòng sản phẩm Me-O Gold được nhập khẩu chính thức từ Thái Lan, với nguyên liệu chất lượng cao, đặc biệt được thiết kế chuyên biệt phù hợp cho từng giống mèo cưng và nhu cầu của chúng', 'Mèo', 'Thức ăn', '73000','1');
INSERT INTO `da_db`.`product` (`ID`, `provider`, `numberOf`, `productname`, `descriptions`, `type1`, `type2`, `cost`, `allowance`) VALUES ('19', 'A company', '56', 'SỐT DINH DƯỠNG CHO MÈO VỊ ỨC GÀ CIAO CHURU 14GX4GÓI', 'Ciao Churu dạng soup dễ tiêu hóa và hấp thụ, kích thích sự thèm ăn. Bổ sung thêm nước giúp hạn chế tối đa các bệnh về sỏi thận, tiết niệu... Bổ sung Vitamin E chống oxy hóa từ đỏ chuyển thành năng lượng nuôi dưỡng cơ thể. Giàu taurine và chất dinh dưỡng khác gúp mắt mèo sáng hơn, luôn bóng mượt hơn. Tinh chất trà xanh chống lão hóa, khử mùi hôi khi vệ sinh.', 'Mèo', 'Thức ăn', '32000','1');
INSERT INTO `da_db`.`product` (`ID`, `provider`, `numberOf`, `productname`, `descriptions`, `type1`, `type2`, `cost`, `allowance`) VALUES ('20', 'A company', '74', 'SỐT DINH DƯỠNG CHO MÈO VỊ CÁ NGỪ SC-231C CIAO CHURU 14GX4GÓI', 'Ciao Churu dạng soup dễ tiêu hóa và hấp thụ, kích thích sự thèm ăn. Bổ sung thêm nước giúp hạn chế tối đa các bệnh về sỏi thận, tiết niệu... Bổ sung Vitamin E chống oxy hóa từ đỏ chuyển thành năng lượng nuôi dưỡng cơ thể. Giàu taurine và chất dinh dưỡng khác gúp mắt mèo sáng hơn, luôn bóng mượt hơn. Tinh chất trà xanh chống lão hóa, khử mùi hôi khi vệ sinh.', 'Mèo', 'Thức ăn', '32000','1');
INSERT INTO `da_db`.`product` (`ID`, `provider`, `numberOf`, `productname`, `descriptions`, `type1`, `type2`, `cost`, `allowance`) VALUES ('21', 'B company', '50', 'TELLME® XỐT CHO MÈO', 'Xốt kem cá hồi và cá ngừ cho mèo TELLME được tạo ra từ nguồn nguyên liệu thịt cá hồi, cá ngừ chất lượng cao của người và bổ sung siêu thực phẩm từ tự nhiên là dầu dừa nguyên chất, kết hợp với công nghệ tiệt trùng độc đáo khóa trọn dinh dưỡng, không chất bảo quản, vô trùng 100%. Thịt cá hồi và cá ngừ thượng hạng (80%) là nguồn cung cấp Protein động vật hoàn hảo.', 'Mèo', 'Thức ăn', '13500','1');
INSERT INTO `da_db`.`product` (`ID`, `provider`, `numberOf`, `productname`, `descriptions`, `type1`, `type2`, `cost`, `allowance`) VALUES ('22', 'B company', '48', 'SNACK CHO MÈO PET 8 CAT SNACK - 50G', 'Snack được làm từ nguyên liệu là thịt gà và những thành phần có chất lượng cao nhất, đảm bảo vệ sinh an toàn. Snack cho mèo Pet 8 cực kỳ thơm ngon và dễ dàng tiêu hóa. Thích hợp làm bữa ăn nhẹ, bữa ăn bổ sung, hoặc làm phần thưởng', 'Mèo', 'Thức ăn', '33000','1');
INSERT INTO `da_db`.`product` (`ID`, `provider`, `numberOf`, `productname`, `descriptions`, `type1`, `type2`, `cost`, `allowance`) VALUES ('23', 'B company', '39', 'PATE PAWSOME 160GR', 'Sản phẩm được làm từ cá ngừ tươi vùng biển Việt Nam giàu dinh dưỡng, giúp cho sự phát triển của mèo được tối ưu hóa. Sản phẩm được chế biến theo công thức độc quyền từ công ty Petlad Hoa Kỳ. Sản phẩm có 3 loại cá ngừ tươi 100%, cá ngừ – gà, cá ngừ – cá cơm. Sản phẩm cung cấp đa dạng đạm từ gà và cá cơm, giúp cho sự phát triển hoàn chỉnh của mèo. Sản phẩm còn chứa nước giúp hạn chế sạn thận cho mèo cưng, đáp ứng nhu cầu uống nước của mèo ăn thức ăn khô và lười uống nước.', 'Mèo', 'Thức ăn', '25000 ','1');
INSERT INTO `da_db`.`product` (`ID`, `provider`, `numberOf`, `productname`, `descriptions`, `type1`, `type2`, `cost`, `allowance`) VALUES ('24', 'B company', '68', 'KHAY ĐỰNG CÁT VỆ SINH CHO MÈO MSP-B03 - JCB (KÈM XẺNG HỐT PHÂN)', 'Khay đựng cát vệ sinh cho mèo MSP-B03 | JCB chuyên dùng cho mèo con trên dưới 3 tháng tuổi. Hoặc các giống mèo cỡ nhỏ. Kích thước nhỏ giúp mèo đi vệ sinh đúng chỗ dễ dàng, không tốn sức. Lối ra khay vệ sinh có thiết kế dạng lưới giúp làm sạch cát ở chân mèo. Giữ cát không bị rơi ra ngoài làm bẩn sàn nhà. Khay vệ sinh nửa trong suốt, bên trong rộng rãi, đủ diện tích để mèo thoải mái đi vệ sinh. Phù hợp cho tất cả các loại cát mèo thông dụng.', 'Mèo', 'Khay đựng cát', '128000','1');
INSERT INTO `da_db`.`product` (`ID`, `provider`, `numberOf`, `productname`, `descriptions`, `type1`, `type2`, `cost`, `allowance`) VALUES ('25', 'B company', '50', 'KHAY ĐỰNG CÁT VỆ SINH CHO MÈO MSP-B02 - JCB (KÈM XẺNG)', 'Khay đựng cát vệ sinh cho mèo MSP-B03 | JCB chuyên dùng cho mèo con trên dưới 3 tháng tuổi. Hoặc các giống mèo cỡ nhỏ. Kích thước nhỏ giúp mèo đi vệ sinh đúng chỗ dễ dàng, không tốn sức. Lối ra khay vệ sinh có thiết kế dạng lưới giúp làm sạch cát ở chân mèo. Giữ cát không bị rơi ra ngoài làm bẩn sàn nhà. Khay vệ sinh nửa trong suốt, bên trong rộng rãi, đủ diện tích để mèo thoải mái đi vệ sinh. Phù hợp cho tất cả các loại cát mèo thông dụng.', 'Mèo', 'Khay đựng cát', '223000','0');
INSERT INTO `da_db`.`product` (`ID`, `provider`, `numberOf`, `productname`, `descriptions`, `type1`, `type2`, `cost`, `allowance`) VALUES ('26', 'C company', '46', 'NHÀ VỆ SINH CHO MÈO MSP-106 - JCB', 'Cửa mở 2 chiều. Thiết kế phần lưới nhựa giúp loại bỏ cát dư ở chân mèo. Quai nhựa giúp dễ dàng di chuyển. Chất liệu nhựa cao cấp, độ bền cao. Thiết kế thông minh dễ dàng tháo lắp, vệ sinh. Hỗ trợ huấn luyện thú cưng đi vệ sinh đúng chỗ. Thiết kế hình hộp và có cửa giúp chặn mùi hôi không bay ra ngoài. Sản phẩm của thương hiệu JCB.', 'Mèo', 'Khay đựng cát', '457000','1');
INSERT INTO `da_db`.`product` (`ID`, `provider`, `numberOf`, `productname`, `descriptions`, `type1`, `type2`, `cost`, `allowance`) VALUES ('27', 'B company', '52', 'BÀN CÀO MÓNG CHO MÈO MÀU XANH CHUỐI - ICLE', 'Cào là bản năng vốn có của loài mèo. Vì vậy, bạn không thể làm gì để ngăn chặn hay xóa bỏ đặc tính tự nhiên của chúng. Bàn cào mèo giúp mèo loại bỏ móng cũ ở vuốt và đánh dấu lãnh thổ của chúng bằng cách lưu lại mùi đặc trưng ở dưới đệm chân. Nếu không có môi trường thích hợp, mèo sẽ thỏa mãn bản năng của chúng bằng cách cào đồ nội thất như đi văng, thảm và những tài sản quý giá của bạn. Đó là lý do các dụng cụ móng chuyên dụng cho mèo ra đời.', 'Mèo', 'Đồ chơi', '237000','1');
INSERT INTO `da_db`.`product` (`ID`, `provider`, `numberOf`, `productname`, `descriptions`, `type1`, `type2`, `cost`, `allowance`) VALUES ('28', 'B company', '54', 'BÀN CÀO MÓNG CHO MÈO HÌNH LƯỢN SÓNG IC-0024-L - ICLE - 44X21.5X4.5CM', 'Thiết kế hình gợn sóng bản to rộng thoải mái cho mèo cào móng và làm bất cứ điều gì mà chúng thích ở trên đó. Bàn cào móng được làm bằng chất liệu carton chắc chắn và một số vật liệu thân thiện với môi trường, không độc hại. Chất liệu bền đẹp, có thể dùng được cả hai mặt. Bề mặt thô nhám, mèo có thể cào móng thoải mái mà không gây tổn thương đến bộ móng. Với kích thước to rộng, nên có thể dùng như một chiếc giường nằm cho mèo. Chất liệu: Bìa carton.', 'Mèo', 'Đồ chơi', '51000','0');
INSERT INTO `da_db`.`product` (`ID`, `provider`, `numberOf`, `productname`, `descriptions`, `type1`, `type2`, `cost`, `allowance`) VALUES ('29', 'B company', '57', 'TRỤ CÀO MÓNG HÌNH BẬC THANG CHO MÈO - ICLE', 'Hãy đầu tư một dụng cụ thích hợp để hướng cho chú mèo của bạn cào móng đúng chỗ. ', 'Mèo', 'Đồ chơi', '438000','1');
INSERT INTO `da_db`.`product` (`ID`, `provider`, `numberOf`, `productname`, `descriptions`, `type1`, `type2`, `cost`, `allowance`) VALUES ('30', 'B company', '57', 'GHẾ TRỤ CÀO MÓNG CHO MÈO - MÀU XÁM - ICLE', 'Hãy sắm ngay cho chú mèo nhà bạn Ghế trụ cào móng cho mèo thích hợp để hướng cho chú mèo cào móng đúng chỗ. Chọn một Ghế trụ cào móng cho mèo với bề mặt thô nhám để mèo của bạn có thể cào và xả stress. Một Ghế trụ cào móng cho mèo được làm từ sợi thừng là một lựa chọn rất hoàn hảo và hiệu quả cho mèo cào móng. Ghế trụ cào móng cho mèo giúp mèo vui chơi, giải trí, mài móng, giảm các vết cào trên ghế sofa, hay các vật dụng khác trong nhà.', 'Mèo', 'Đồ chơi', '540000','1');


CREATE TABLE  employee_orders (
    ID INT PRIMARY KEY,
    sellerID INT NOT NULL,
    FOREIGN KEY(sellerID) REFERENCES employee(ID)
);
INSERT INTO `da_db`.`employee_orders` (`ID`, `sellerID`) VALUES ('1', '1');
INSERT INTO `da_db`.`employee_orders` (`ID`, `sellerID`) VALUES ('2', '1');
INSERT INTO `da_db`.`employee_orders` (`ID`, `sellerID`) VALUES ('3', '2');
INSERT INTO `da_db`.`employee_orders` (`ID`, `sellerID`) VALUES ('4', '2');
INSERT INTO `da_db`.`employee_orders` (`ID`, `sellerID`) VALUES ('5', '3');
INSERT INTO `da_db`.`employee_orders` (`ID`, `sellerID`) VALUES ('6', '3');
INSERT INTO `da_db`.`employee_orders` (`ID`, `sellerID`) VALUES ('7', '4');
INSERT INTO `da_db`.`employee_orders` (`ID`, `sellerID`) VALUES ('8', '4');


CREATE TABLE product_orders (
    productID INT NOT NULL,
    ordersID INT NOT NULL,
    numberof INT NOT NULL,
    orderdate DATE NOT NULL,
    FOREIGN KEY(productID) REFERENCES product(ID),
    FOREIGN KEY(ordersID) REFERENCES  employee_orders(ID)
);
INSERT INTO `da_db`.`product_orders`(`productID`,`ordersID`,`numberof`,`orderdate`) VALUES ('1', '1','12','2023-12-09');
INSERT INTO `da_db`.`product_orders`(`productID`,`ordersID`,`numberof`,`orderdate`) VALUES ('11', '1','11','2023-12-09');
INSERT INTO `da_db`.`product_orders`(`productID`,`ordersID`,`numberof`,`orderdate`) VALUES ('13', '2','1','2023-12-09');
INSERT INTO `da_db`.`product_orders`(`productID`,`ordersID`,`numberof`,`orderdate`) VALUES ('23', '2','5','2023-12-09');
INSERT INTO `da_db`.`product_orders`(`productID`,`ordersID`,`numberof`,`orderdate`) VALUES ('25', '3','6','2023-12-09');
INSERT INTO `da_db`.`product_orders`(`productID`,`ordersID`,`numberof`,`orderdate`) VALUES ('12', '4','10','2023-12-09');
INSERT INTO `da_db`.`product_orders`(`productID`,`ordersID`,`numberof`,`orderdate`) VALUES ('9', '5','9','2023-12-09');
INSERT INTO `da_db`.`product_orders`(`productID`,`ordersID`,`numberof`,`orderdate`) VALUES ('8', '6','8','2023-12-09');
INSERT INTO `da_db`.`product_orders`(`productID`,`ordersID`,`numberof`,`orderdate`) VALUES ('12', '7','3','2023-12-09');
INSERT INTO `da_db`.`product_orders`(`productID`,`ordersID`,`numberof`,`orderdate`) VALUES ('14', '7','3','2023-12-09');
INSERT INTO `da_db`.`product_orders`(`productID`,`ordersID`,`numberof`,`orderdate`) VALUES ('16', '8','3','2023-12-09');
INSERT INTO `da_db`.`product_orders`(`productID`,`ordersID`,`numberof`,`orderdate`) VALUES ('18', '8','3','2023-12-09');
INSERT INTO `da_db`.`product_orders`(`productID`,`ordersID`,`numberof`,`orderdate`) VALUES ('12', '8','3','2023-12-09');
INSERT INTO `da_db`.`product_orders`(`productID`,`ordersID`,`numberof`,`orderdate`) VALUES ('10', '8','3','2023-12-09');


DELIMITER //

CREATE PROCEDURE da_db.Get_Distinct_Provider()
BEGIN
    SELECT DISTINCT provider
    FROM product;
END //

DELIMITER ;

CALL Get_Distinct_Provider();



-- drop schema DA_DB;
