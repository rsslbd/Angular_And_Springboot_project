package com.jwt.secqurity.supplier.Entity;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

import javax.persistence.Entity;

@Entity
@Getter
@Setter
@ToString
public class Supplier extends SupplierBaseModel{

    private String  supplier_name;
    private String email;
    private String phone;
    private String country;
    private String city;
    private String address;
}