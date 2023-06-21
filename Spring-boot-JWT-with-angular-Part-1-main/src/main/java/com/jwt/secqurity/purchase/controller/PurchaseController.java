package com.jwt.secqurity.purchase.controller;
import com.jwt.secqurity.purchase.DTO.PurchaseDTO;
import com.jwt.secqurity.purchase.Service.PurchaseService;
import com.jwt.secqurity.purchase.entity.Purchase;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "http://localhost:4200", allowCredentials = "true")
public class PurchaseController {
    @Autowired
    PurchaseService purchaseService;
    @PostMapping("/purchase")
    public void save(@RequestBody PurchaseDTO purchaseDTO){
        if (purchaseDTO != null) {
            Purchase purchase = new Purchase();
            BeanUtils.copyProperties(purchaseDTO ,purchase);
            purchaseService.save(purchase);
        }
    }
    @PutMapping("/purchase")
    public void update( @RequestBody PurchaseDTO purchaseDTO){
        if (purchaseDTO != null) {
            Purchase purchase = new Purchase();
            BeanUtils.copyProperties(purchaseDTO ,purchase);
            purchaseService.save(purchase);        }
    }
    @DeleteMapping("/purchase/{purchase_id}")
    public void delete(@PathVariable("purchase_id") Long id){

        purchaseService.delete(id);
    }
    @GetMapping("/purchase/{purchase_id}")
    public PurchaseDTO getByIdDTO(@PathVariable("purchase_id") Long id){
        Purchase purchase;
        purchase= purchaseService.getById(id);
        if (purchase.getPurchase_id() !=null ){
            PurchaseDTO purchaseDTO = new PurchaseDTO();
            BeanUtils.copyProperties(purchase, purchaseDTO);
            return purchaseDTO;
        }
        return null;
    }
    @GetMapping("/purchase")
    List<PurchaseDTO> all()
    {
        List<Purchase >  purchase =purchaseService.findAll();
        List<PurchaseDTO >  purchaseDTO =  new ArrayList<>();
        for (Purchase pro:purchase
        ) {
            PurchaseDTO proDTO = new PurchaseDTO();
            BeanUtils.copyProperties(pro, proDTO);
            purchaseDTO.add(proDTO);
        }
        return purchaseDTO ;
    }

}

