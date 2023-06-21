package com.jwt.secqurity.purchase.Service;

import com.jwt.secqurity.product.Entity.Product;
import com.jwt.secqurity.product.Repository.ProductDAO;
import com.jwt.secqurity.purchase.Repository.PurchaseRepo;
import com.jwt.secqurity.purchase.entity.Purchase;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.concurrent.atomic.AtomicReference;

@Service
public class PurchaseService {
    @Autowired
    PurchaseRepo purchaseRepo;

    @Autowired
    ProductDAO productDAO;


    public List<Purchase> findAll() {
        return purchaseRepo.findAll();

    }
    public void save(Purchase purchase) {
        Product product = new Product();

        product = productDAO.findByProduct_name(purchase.getProduct_name());
        if (product!=null){
            Long qty = product.getQty()+purchase.getQty();
            product.setQty(qty);
        }else{
            product = new Product();
            product.setProduct_name(purchase.getProduct_name());
            product.setCatagory(purchase.getCatagory());
            product.setSub_catagory(purchase.getSub_catagory());

            product.setSupplier_name(purchase.getSupplier_name());
            product.setBrand_name(purchase.getBrand_name());
            product.setSku(purchase.getSku());
            product.setQty(purchase.getQty());
            product.setUnit(purchase.getUnit());
            product.setPurchase_price(purchase.getPurchase_price());
            product.setTotal(purchase.getTotal());
            product.setPaid(purchase.getPaid());
            product.setPayment_status(purchase.getPayment_status());

            product.setDate(purchase.getDate());
            product.setBrand_name(purchase.getBrand_name());



        }
        productDAO.save(product);

        if (purchase.getPurchase_id()!= null){
            purchaseRepo.findById(purchase.getPurchase_id())
                    .map(old -> {
                        old.setCatagory(purchase.getCatagory());
                        old.setSub_catagory(purchase.getSub_catagory());
                        old.setProduct_name(purchase.getProduct_name());
                        old.setBrand_name(purchase.getBrand_name());
                        old.setSku(purchase.getSku());
                        old.setSupplier_name(purchase.getSupplier_name());

                        old.setStatus(purchase.getStatus());
                        old.setQty(purchase.getQty());
                        old.setUnit(purchase.getUnit());
                        old.setPurchase_price(purchase.getPurchase_price());
                        old.setTotal(purchase.getTotal());
                        old.setPaid(purchase.getPaid());

                        old.setPayment_status(purchase.getPayment_status());
                        old.setDate(purchase.getDate());


                        return purchaseRepo.save(old);
                    })
                    .orElseGet(() -> {
                        return purchaseRepo.save(purchase);
                    });
        }else {
            purchaseRepo.save(purchase);
        }

    }
    public Purchase getById(Long id) {
        return purchaseRepo.findById(id).orElse(new Purchase());
    }
    public void delete(Long id) {
        purchaseRepo.deleteById(id);
    }
}
