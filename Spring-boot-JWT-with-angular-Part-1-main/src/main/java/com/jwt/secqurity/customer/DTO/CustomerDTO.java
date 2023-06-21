package com.jwt.secqurity.customer.DTO;

import lombok.Data;

@Data
public class CustomerDTO {
    private Long customer_id;
    private String  customer_name;
    private String email;
    private String phone;
    private String country;
    private String city;
    private String address;

}
