// ProductController.java
package com.project.petcare.controller;

import com.project.petcare.entity.Product;
import com.project.petcare.service.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@CrossOrigin
@RequestMapping("/api/products")
public class ProductController {
    @Autowired
    private final ProductService productService;

    
    public ProductController(ProductService productService) {
        this.productService = productService;
    }

    @GetMapping
    public ResponseEntity<List<Product>> getAllProducts() {
        List<Product> products = productService.getAllProducts();
        return new ResponseEntity<>(products, HttpStatus.OK);
    }

    @GetMapping("/{productId}")
    public ResponseEntity<Product> getProductById(@PathVariable Integer productId) {
        Optional<Product> product = productService.getProductById(productId);
        return product.map(value -> new ResponseEntity<>(value, HttpStatus.OK))
                .orElseGet(() -> new ResponseEntity<>(HttpStatus.NOT_FOUND));
    }

    @PostMapping
    public ResponseEntity<Product> addProduct(@RequestBody Product newProduct) {
        // Save the product
        Product savedProduct = productService.addOrUpdateProduct(newProduct);
        return new ResponseEntity<>(savedProduct, HttpStatus.CREATED);
    }


    @PutMapping("/{productId}")
    public ResponseEntity<Product> updateProduct(@PathVariable Integer productId, @RequestBody Product updatedProduct) {
        Optional<Product> existingProduct = productService.getProductById(productId);
        if (existingProduct.isPresent()) {
            updatedProduct.setProductId(productId);
            Product savedProduct = productService.addOrUpdateProduct(updatedProduct);
            return new ResponseEntity<>(savedProduct, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @DeleteMapping("/{productId}")
    public ResponseEntity<Void> deleteProduct(@PathVariable Integer productId) {
        productService.deleteProductById(productId);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
    
    @GetMapping("/search")  
    public ResponseEntity<List<Product>> getProductsByName(@RequestParam String productName) {
        List<Product> services = productService.getProductsByName(productName);
        return new ResponseEntity<>(services, HttpStatus.OK);
    }

    @GetMapping("/providers")
    public ResponseEntity<List<String>> getAllproviders() {
        List<String> providers = productService.getAllProviders();
        return new ResponseEntity<>(providers, HttpStatus.OK);
    }

    @GetMapping("/pet-type")
    public ResponseEntity<List<String>> getAllPetType(){
        return ResponseEntity.ok(productService.getAllPetType());
    }

    @GetMapping("/category")
    public ResponseEntity<List<String>> getAllCategory(){
        return ResponseEntity.ok(productService.getAllCategory());
    }

}
