Giới thiệu chung

PetCare là phần mềm quản lý nhân viên, đơn hàng và sản phẩm của dịch vụ chăm sóc thú cưng.

Hướng dẫn chạy file phía client

1. Mở terminal
 
2. Nếu terminal đang là "~\PetCare>" thì gõ lệnh "cd client"

3. Gõ "npm i" để tải các module cần thiết

4. Gõ "npm start"

Công nghệ sử dụng phía front-end

1. ReactJS
2. Bootstrap
3. Axios
4. Toastify
5. Material UI

Hướng dẫn config bên BE:
1. Mở file applcation.properties trong server/petcare/src/main/resources

2. Thay đổi dòng spring.datasource.url= theo địa chỉ url của hệ cơ sở dữ liệu

3. Thay đổi tương tự với dòng spring.datasource.username và spring.datasource.password

4. gõ mvn clean install

5. gõ mvn spring-boot:run

6. nếu đã tải extension của springboot thì chỉ cần tìm đến file PetCareApplication.java và bấm run

Một số lỗi có thể gặp khi sử dụng:

1. phiên bản MySQL không tương thích: mọi người vào xem phiên bản của MySQL sử dụng sau đó vào applcation.properties điều chỉnh dòng : spring.jpa.properties.hibernate.dialect=org.hibernate.dialect.MySQL(số phiên bản của phần mềm)Dialect

2. phiên bản java không tương thích: mọi người vào file pom.xml tìm
``` xml
<properties>
	<java.version>21</java.version>
</properties>
```
Sau đó điều chỉnh theo phiên bản của mình (hiện nay mới thử nghiệm phiên bản 19 và 21 không có gặp lỗi gì)


Phần mềm sử dụng bên BE:
1. java spring boot, jpa...

2. MySQL

3. postman (test)

