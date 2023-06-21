package com.jwt.secqurity.customer.Repository;
import com.jwt.secqurity.customer.Entity.Customer;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CustomerRepo extends JpaRepository<Customer, Long> {
}
