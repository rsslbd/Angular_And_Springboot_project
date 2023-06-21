package com.jwt.secqurity.product.DTO;

import lombok.Data;

@Data
public class ProductDTO {
    private Long product_id;

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
