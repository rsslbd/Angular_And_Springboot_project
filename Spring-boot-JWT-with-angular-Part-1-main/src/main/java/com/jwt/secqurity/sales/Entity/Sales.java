package com.jwt.secqurity.sales.Entity;

import com.jwt.secqurity.purchase.entity.PurchaseBase;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

import javax.persistence.Entity;

@Entity
@Getter
@Setter
@ToString
public class Sales extends SalesBaseModel{
    private String  customer_name;
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
