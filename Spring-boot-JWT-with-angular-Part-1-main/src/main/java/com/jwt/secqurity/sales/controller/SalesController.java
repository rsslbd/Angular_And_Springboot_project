package com.jwt.secqurity.sales.controller;
import com.jwt.secqurity.purchase.entity.Purchase;
import com.jwt.secqurity.sales.Entity.Sales;
import com.jwt.secqurity.sales.Service.SalesService;
import com.jwt.secqurity.sales.dto.SalesDTO;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "http://localhost:4200", allowCredentials = "true")
public class SalesController {

    @Autowired
    SalesService salesService;
    @PostMapping("/sales")
    public Sales save(@RequestBody SalesDTO salesDTO){
        if (salesDTO != null) {
            Sales sales = new Sales();
            BeanUtils.copyProperties(salesDTO ,sales);
           return salesService.save(sales);
        }
        return null;
    }
    @PutMapping("/sales")
    public void update( @RequestBody SalesDTO salesDTO){
        if (salesDTO != null) {
            Sales sales = new Sales();
            BeanUtils.copyProperties(salesDTO ,sales);
            salesService.save(sales);        }
    }
    @DeleteMapping("/sales/{sales_id}")
    public void delete(@PathVariable("sales_id") Long id){

        salesService.delete(id);
    }
    @GetMapping("/sales/{sales_id}")
    public SalesDTO getByIdDTO(@PathVariable("sales_id") Long sales_id){
        Sales sales;
        sales= salesService.getById(sales_id);
        if (sales.getSales_id() !=null ){
            SalesDTO salesDTO = new SalesDTO();
            BeanUtils.copyProperties(sales, salesDTO);
            return salesDTO;
        }
        return null;
    }
    @GetMapping("/sales")
    List<SalesDTO> all()
    {
        List<Sales >  sales =salesService.findAll();
        List<SalesDTO >  salesDTO =  new ArrayList<>();
        for (Sales s:sales) {
            SalesDTO sDTO = new SalesDTO();
            BeanUtils.copyProperties(s, sDTO);
            salesDTO.add(sDTO);
        }
        return salesDTO ;
    }

}

