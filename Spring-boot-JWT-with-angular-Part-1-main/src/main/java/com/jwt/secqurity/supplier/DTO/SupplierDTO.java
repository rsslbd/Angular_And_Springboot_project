package com.jwt.secqurity.supplier.DTO;

import lombok.Data;

@Data
public class SupplierDTO {
    private Long supplier_id;
    private String  supplier_name;
    private String email;
    private String phone;
    private String country;
    private String city;
    private String address;
}
