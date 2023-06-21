package com.jwt.secqurity.subCatagory.Repository;
import com.jwt.secqurity.catagory.Entity.Catagory;
import com.jwt.secqurity.subCatagory.Entity.SubCatagory;
import org.springframework.data.jpa.repository.JpaRepository;

public interface SubCatagoryRepo extends JpaRepository<SubCatagory, Long> {
}
