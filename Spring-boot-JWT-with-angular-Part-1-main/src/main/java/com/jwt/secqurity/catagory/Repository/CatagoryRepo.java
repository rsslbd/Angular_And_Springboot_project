package com.jwt.secqurity.catagory.Repository;
import com.jwt.secqurity.catagory.Entity.Catagory;
import com.jwt.secqurity.supplier.Entity.Supplier;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CatagoryRepo extends JpaRepository<Catagory, Long> {
}
