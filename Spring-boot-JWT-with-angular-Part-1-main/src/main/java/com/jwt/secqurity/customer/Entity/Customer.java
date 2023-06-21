package com.jwt.secqurity.customer.Entity;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

import javax.persistence.Entity;

@Entity
@Getter
@Setter
@ToString
public class Customer extends CustomerBaseModel{

    private String  customer_name;
    private String email;
    private String phone;
    private String country;
    private String city;
    private String address;
}