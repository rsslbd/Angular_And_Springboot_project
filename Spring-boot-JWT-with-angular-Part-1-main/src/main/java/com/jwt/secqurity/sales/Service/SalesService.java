package com.jwt.secqurity.sales.Service;
import com.jwt.secqurity.product.Entity.Product;
import com.jwt.secqurity.product.Repository.ProductDAO;
import com.jwt.secqurity.sales.Entity.Sales;
import com.jwt.secqurity.sales.Repository.SalesRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class SalesService {
    @Autowired
    ProductDAO productDAO;

    @Autowired
    SalesRepo salesRepo;
    public List<Sales> findAll() {
        return salesRepo.findAll();

    }
    public Sales save(Sales sales) {
        Product product = new Product();
        product=productDAO.findByProduct_name(sales.getProduct_name());
       Long qty=product.getQty()-sales.getQty();
       product.setQty(qty);

        if (sales.getSales_id()!= null){
          return  salesRepo.findById(sales.getSales_id())
                    .map(old -> {
                        old.setCustomer_name(sales.getCustomer_name());
                        old.setCatagory(sales.getSub_catagory());
                        old.setSub_catagory(sales.getSub_catagory());
                        old.setProduct_name(sales.getProduct_name());
                        old.setBrand_name(sales.getBrand_name());
                        old.setSku(sales.getSku());
                        old.setSupplier_name(sales.getSupplier_name());
                        old.setStatus(sales.getStatus());
                        old.setQty(sales.getQty());
                        old.setUnit(sales.getUnit());
                        old.setSelling_price(sales.getSelling_price());
                        old.setDiscount_percentage(sales.getDiscount_percentage());
                        old.setTax_percentage(sales.getTax_percentage());
                        old.setTotal(sales.getTotal());
                        old.setPaid(sales.getPaid());
                        old.setDue(sales.getDue());
                        old.setPayment_status(sales.getPayment_status());
                        old.setDate(sales.getDate());



                        return salesRepo.save(old);
                    })
                    .orElseGet(() -> {
                        return salesRepo.save(sales);
                    });
        }else {
         return   salesRepo.save(sales);
        }
    }
    public Sales getById(Long sales_id) {
        return salesRepo.findById(sales_id).orElse(new Sales());
    }
    public void delete(Long sales_id) {
        salesRepo.deleteById(sales_id);
    }
}
