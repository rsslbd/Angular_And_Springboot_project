package com.jwt.secqurity.subCatagory.Entity;

import com.jwt.secqurity.catagory.Entity.CatagoryBaseModel;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

import javax.persistence.Entity;

@Entity
@Getter
@Setter
@ToString
public class SubCatagory extends SubCatagoryBaseModel {

    private String  catagory_name;
    private String  sub_catagory_name;
    private String description;
}