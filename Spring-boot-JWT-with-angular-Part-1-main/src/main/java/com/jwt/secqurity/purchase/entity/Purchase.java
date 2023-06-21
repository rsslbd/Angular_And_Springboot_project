package com.jwt.secqurity.purchase.entity;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

import javax.persistence.Entity;

@Entity
@Getter
@Setter
@ToString
public class Purchase extends PurchaseBase{
    private String catagory;
    private String sub_catagory;
    private String brand_name;
    private String product_name;
    private String sku;
    private String  supplier_name;
    private String status;
    private Long qty;
    private String unit;
    private Long purchase_price;
    private Long total;
    private Long paid;
    private String payment_status;
    private String date;

}


