
I. Product
    1. Get All Products
    URL: http://localhost:8080/api/products

    Method: GET

    Description: Retrieve a list of all products.

    2. Get Product by ID
    URL: http://localhost:8080/api/products/{productId}

    Method: GET

    Description: Retrieve a specific product by its ID.

    3. Add Product
    URL: http://localhost:8080/api/products

    Method: POST

    Description: Add a new product to the system.

    Body:

    json

    {
        "supplier": "SupplierName",
        "quantity": 10,
        "productName": "ProductX",
        "description": "Description of ProductX",
        "petType": "Dog",
        "category": "CategoryX",
        "subCategory": "SubCategoryX",
        "cost": 50
    }
    4. Update Product
    URL: http://localhost:8080/api/products/{productId}

    Method: PUT

    Description: Update an existing product.

    Body:

    json

    {
        "supplier": "UpdatedSupplier",
        "quantity": 15,
        "productName": "UpdatedProductX",
        "description": "UpdatedDescription",
        "petType": "Cat",
        "category": "UpdatedCategory",
        "subCategory": "UpdatedSubCategory",
        "cost": 60
    }
    5. Delete Product
    URL: http://localhost:8080/api/products/{productId}

    Method: DELETE

    Description: Delete a product by its ID.

    6. Search Product by Name
    URL: http://localhost:8080/api/services/search

    Method: GET

    Description: Search for products by name.

    Query Parameter:

    Key: productName
    Value: ProductName

II. Service
    1. Get All Services
URL: http://localhost:8080/api/services

Method: GET

Description: Retrieve a list of all services.

2. Get Service by ID
URL: http://localhost:8080/api/services/{serviceId}

Method: GET

Description: Retrieve a specific service by its ID.

3. Add Service
URL: http://localhost:8080/api/services

Method: POST

Description: Add a new service to the system.

Body:

json
{
    "tenDichVu": "Grooming",
    "thoiGianHoanThanh": "02:30:00",
    "giaThanh": 50
}
4. Update Service
URL: http://localhost:8080/api/services/{serviceId}

Method: PUT

Description: Update an existing service.

Body:

json
{
    "tenDichVu": "UpdatedGrooming",
    "thoiGianHoanThanh": "03:00:00",
    "giaThanh": 60
}
5. Delete Service
URL: http://localhost:8080/api/services/{serviceId}

Method: DELETE

Description: Delete a service by its ID.

6. Search Services by Name
URL: http://localhost:8080/api/services/search

Method: GET

Description: Search for services by name.

Query Parameter:

Key: name
Value: ServiceName