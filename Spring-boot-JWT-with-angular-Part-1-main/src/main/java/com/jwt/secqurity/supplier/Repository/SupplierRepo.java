package com.jwt.secqurity.supplier.Repository;
import com.jwt.secqurity.supplier.Entity.Supplier;
import org.springframework.data.jpa.repository.JpaRepository;

public interface SupplierRepo extends JpaRepository<Supplier, Long> {
}
