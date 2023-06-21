package com.jwt.secqurity.sales.Repository;
import com.jwt.secqurity.sales.Entity.Sales;
import org.springframework.data.jpa.repository.JpaRepository;
public interface SalesRepo extends JpaRepository<Sales, Long> {
}
