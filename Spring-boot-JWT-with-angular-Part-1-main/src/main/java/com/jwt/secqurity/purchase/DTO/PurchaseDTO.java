package com.jwt.secqurity.purchase.DTO;

import lombok.Data;

@Data
public class PurchaseDTO {
    private Long purchase_id;
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

