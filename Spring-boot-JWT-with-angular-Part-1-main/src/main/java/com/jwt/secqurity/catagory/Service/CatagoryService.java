package com.jwt.secqurity.catagory.Service;

import com.jwt.secqurity.catagory.Entity.Catagory;
import com.jwt.secqurity.catagory.Repository.CatagoryRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;


@Service
public class CatagoryService {
    @Autowired
    CatagoryRepo catagoryRepo;
    public List<Catagory> findAll() {
        return catagoryRepo.findAll();

    }
    public void save(Catagory catagory) {
        if (catagory.getCatagory_id()!= null){
            catagoryRepo.findById(catagory.getCatagory_id())
                    .map(old -> {
                        old.setCatagory_name(catagory.getCatagory_name());

                        old.setDescription(catagory.getDescription());




                        return catagoryRepo.save(old);
                    })
                    .orElseGet(() -> {
                        return catagoryRepo.save(catagory);
                    });
        }else {
            catagoryRepo.save(catagory);
        }
    }
    public  Catagory getById(Long catagory_id) {
        return catagoryRepo.findById(catagory_id).orElse(new Catagory());
    }
    public void delete(Long catagory_id) {
        catagoryRepo.deleteById(catagory_id);
    }
}
