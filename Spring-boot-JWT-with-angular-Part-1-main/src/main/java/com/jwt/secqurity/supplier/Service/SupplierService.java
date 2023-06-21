package com.jwt.secqurity.supplier.Service;

import com.jwt.secqurity.supplier.Entity.Supplier;
import com.jwt.secqurity.supplier.Repository.SupplierRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;


@Service
public class SupplierService {
    @Autowired
    SupplierRepo supplierRepo;
    public List<Supplier> findAll() {
        return supplierRepo.findAll();

    }
    public void save(Supplier supplier) {
        if (supplier.getSupplier_id()!= null){
            supplierRepo.findById(supplier.getSupplier_id())
                    .map(old -> {
                        old.setSupplier_name(supplier.getSupplier_name());
                        old.setEmail(supplier.getEmail());
                        old.setPhone(supplier.getPhone());
                        old.setCountry(supplier.getCountry());
                        old.setCity(supplier.getCity());
                        old.setAddress(supplier.getAddress());




                        return supplierRepo.save(old);
                    })
                    .orElseGet(() -> {
                        return supplierRepo.save(supplier);
                    });
        }else {
            supplierRepo.save(supplier);
        }
    }
    public  Supplier getById(Long supplier_id) {
        return supplierRepo.findById(supplier_id).orElse(new Supplier());
    }
    public void delete(Long supplier_id) {
        supplierRepo.deleteById(supplier_id);
    }
}
