package com.cloudthat.productsapp.service;

import com.cloudthat.productsapp.entity.Product;
import com.cloudthat.productsapp.repository.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Objects;

@Service
public class ProductServiceImpl implements ProductService{

    @Autowired
    private ProductRepository productRepository;

    @Override
    public Product saveProduct(Product product) {
        return productRepository.save(product);
    }

    @Override
    public List<Product> getProducts() {
        return productRepository.findAll();
    }

    @Override
    public Product getProduct(Long productId) {
        return productRepository.findById(productId).get();
    }

    @Override
    public Product updateProduct(Long productId, Product product) {
        Product productDB = productRepository.findById(productId).get();

        if (Objects.nonNull(product.getProductName()) && !("".equalsIgnoreCase(product.getProductName()))) {
            productDB.setProductName(product.getProductName());
        }

        if (Objects.nonNull(product.getProductDescription()) && !("".equalsIgnoreCase(product.getProductDescription()))) {
            productDB.setProductDescription (product.getProductDescription());
        }

//        if (product.getPrice()){
//        productDB.setPrice(product.getPrice());
//    }
        return productRepository.save(productDB);
    }

    @Override
    public String deleteProduct(Long productId) {
        productRepository.deleteById(productId);
        return null;
    }
}
