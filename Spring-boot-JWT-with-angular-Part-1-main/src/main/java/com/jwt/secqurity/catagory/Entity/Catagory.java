package com.jwt.secqurity.catagory.Entity;

import com.jwt.secqurity.customer.Entity.CustomerBaseModel;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

import javax.persistence.Entity;

@Entity
@Getter
@Setter
@ToString
public class Catagory extends CatagoryBaseModel {

    private String  catagory_name;
    private String description;
}