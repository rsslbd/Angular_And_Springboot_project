package com.jwt.secqurity.product.Service;

import com.jwt.secqurity.product.Entity.Product;
import com.jwt.secqurity.product.Repository.ProductDAO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;


@Service
public class ProductService {
    @Autowired
    ProductDAO productDAO;
    public List<Product> findAll() {
        return productDAO.findAll();

    }
    public void save(Product product) {
        if (product.getProduct_id()!= null){
            productDAO.findById(product.getProduct_id())
                    .map(old -> {
                        old.setCatagory(product.getCatagory());
                        old.setSub_catagory(product.getSub_catagory());
                        old.setProduct_name(product.getProduct_name());
                        old.setBrand_name(product.getBrand_name());
                        old.setSku(product.getSku());
                        old.setSupplier_name(product.getSupplier_name());

                        old.setStatus(product.getStatus());
                        old.setQty(product.getQty());
                        old.setUnit(product.getUnit());
                        old.setPurchase_price(product.getPurchase_price());
                        old.setTotal(product.getTotal());
                        old.setPaid(product.getPaid());

                        old.setPayment_status(product.getPayment_status());
                        old.setDate(product.getDate());


                        return productDAO.save(old);
                    })
                    .orElseGet(() -> {
                        return productDAO.save(product);
                    });
        }else {
            productDAO.save(product);
        }
    }
    public  Product getById(Long product_id) {
        return productDAO.findById(product_id).orElse(new Product());
    }
    public void delete(Long product_id) {
        productDAO.deleteById(product_id);
    }
}
