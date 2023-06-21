package com.jwt.secqurity.sales.dto;

import lombok.Data;

@Data
public class SalesDTO {
    private Long sales_id;
    private String customer_name;
    private String catagory;
    private String sub_catagory;
    private String product_name;
    private String brand_name;
    private String sku;
    private String supplier_name;
    private String status;
    private Long qty;
    private String unit;
    private Long selling_price;
    private Long discount_percentage;
    private Long tax_percentage;
    private Long total;
    private Long paid;
    private Long due;
    private String payment_status;
    private String date;
}
