package com.jwt.secqurity.subCatagory.Service;

import com.jwt.secqurity.catagory.Entity.Catagory;
import com.jwt.secqurity.catagory.Repository.CatagoryRepo;
import com.jwt.secqurity.subCatagory.Entity.SubCatagory;
import com.jwt.secqurity.subCatagory.Repository.SubCatagoryRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;


@Service
public class SubCatagoryService {
    @Autowired
    SubCatagoryRepo subCatagoryRepo;
    public List<SubCatagory> findAll() {
        return subCatagoryRepo.findAll();

    }
    public void save(SubCatagory subCatagory) {
        if (subCatagory.getSub_catagory_id()!= null){
            subCatagoryRepo.findById(subCatagory.getSub_catagory_id())
                    .map(old -> {
                        old.setCatagory_name(subCatagory.getCatagory_name());
                        old.setSub_catagory_name(subCatagory.getSub_catagory_name());

                        old.setDescription(subCatagory.getDescription());




                        return subCatagoryRepo.save(old);
                    })
                    .orElseGet(() -> {
                        return subCatagoryRepo.save(subCatagory);
                    });
        }else {
            subCatagoryRepo.save(subCatagory);
        }
    }
    public  SubCatagory getById(Long sub_catagory_id) {
        return subCatagoryRepo.findById(sub_catagory_id).orElse(new SubCatagory());
    }
    public void delete(Long sub_catagory_id) {
        subCatagoryRepo.deleteById(sub_catagory_id);
    }
}
