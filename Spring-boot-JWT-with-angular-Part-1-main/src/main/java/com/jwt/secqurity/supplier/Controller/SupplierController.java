package com.jwt.secqurity.supplier.Controller;

import com.jwt.secqurity.customer.DTO.CustomerDTO;
import com.jwt.secqurity.customer.Entity.Customer;
import com.jwt.secqurity.customer.service.CustomerService;
import com.jwt.secqurity.supplier.DTO.SupplierDTO;
import com.jwt.secqurity.supplier.Entity.Supplier;
import com.jwt.secqurity.supplier.Service.SupplierService;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "http://localhost:4200", allowCredentials = "true")
public class SupplierController {
    @Autowired
    SupplierService supplierService;
    @PostMapping("/supplier")
    public void save(@RequestBody SupplierDTO supplierDTO){
        if (supplierDTO != null) {
            Supplier supplier = new Supplier();
            BeanUtils.copyProperties(supplierDTO ,supplier);
            supplierService.save(supplier);
        }
//        return "OK!";
    }
    @PutMapping("/supplier")
    public void update( @RequestBody SupplierDTO supplierDTO){
        if (supplierDTO != null) {
            Supplier supplier = new Supplier();
            BeanUtils.copyProperties(supplierDTO ,supplier);
            supplierService.save(supplier);        }
    }
    @DeleteMapping("/supplier/{supplier_id}")
    public void delete(@PathVariable("supplier_id") Long id){

        supplierService.delete(id);
    }
    @GetMapping("/supplier/{supplier_id}")
    public SupplierDTO getByIdDTO(@PathVariable("supplier_id") Long id){
        Supplier supplier;
        supplier= supplierService.getById(id);
        if (supplier.getSupplier_id() !=null ){
            SupplierDTO supplierDTO = new SupplierDTO();
            BeanUtils.copyProperties(supplier, supplierDTO);
            return supplierDTO;
        }
        return null;
    }
    @GetMapping("/supplier")
    List<SupplierDTO> all()
    {
        List<Supplier>  suppliers =supplierService.findAll();
        List<SupplierDTO >  supplierDTOS =  new ArrayList<>();
        for (Supplier sup:suppliers){
            SupplierDTO supDTO = new SupplierDTO();
            BeanUtils.copyProperties(sup, supDTO);
            supplierDTOS.add(supDTO);
        }
        return supplierDTOS;
    }

}
