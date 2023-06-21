package com.jwt.secqurity.product.Repository;

import com.jwt.secqurity.product.Entity.Product;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

public interface ProductDAO extends JpaRepository<Product, Long> {

    @Query(value = " select * from product where product_name = :proName limit 1", nativeQuery = true)
    Product findByProduct_name(@Param(value = "proName") String productName);
}
