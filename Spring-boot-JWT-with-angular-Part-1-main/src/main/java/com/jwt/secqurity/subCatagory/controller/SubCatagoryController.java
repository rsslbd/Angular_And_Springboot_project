package com.jwt.secqurity.subCatagory.controller;
import com.jwt.secqurity.catagory.DTO.CatagoryDTO;
import com.jwt.secqurity.catagory.Entity.Catagory;
import com.jwt.secqurity.catagory.Service.CatagoryService;
import com.jwt.secqurity.subCatagory.DTO.SubCatagoryDTO;
import com.jwt.secqurity.subCatagory.Entity.SubCatagory;
import com.jwt.secqurity.subCatagory.Service.SubCatagoryService;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "http://localhost:4200", allowCredentials = "true")
public class SubCatagoryController {
    @Autowired
    SubCatagoryService subCatagoryService;
    @PostMapping("/sub_catagory")
    public void saveData(@RequestBody SubCatagoryDTO subCatagoryDTO){
        if (subCatagoryDTO != null) {
            SubCatagory subCatagory = new SubCatagory();
            BeanUtils.copyProperties(subCatagoryDTO ,subCatagory);

            subCatagory.setCatagory_name(subCatagoryDTO.getCatagory_name());

            subCatagoryService.save(subCatagory);
        }

    }
    @PutMapping("/sub_catagory")
    public void update( @RequestBody SubCatagoryDTO subCatagoryDTO){
        if (subCatagoryDTO != null) {
            SubCatagory subCatagory = new SubCatagory();
            BeanUtils.copyProperties(subCatagoryDTO ,subCatagory);
            subCatagoryService.save(subCatagory);        }
    }
    @DeleteMapping("/sub_catagory/{sub_catagory_id}")
    public void delete(@PathVariable("sub_catagory_id") Long id){

        subCatagoryService.delete(id);
    }
    @GetMapping("/sub_catagory/{sub_catagory_id}")
    public SubCatagory getByIdDTO(@PathVariable("sub_catagory_id") Long id){
        SubCatagory subCatagory;
        subCatagory= subCatagoryService.getById(id);
        if (subCatagory.getSub_catagory_id() !=null ){
            SubCatagoryDTO subCatagoryDTO = new SubCatagoryDTO();
            BeanUtils.copyProperties(subCatagory, subCatagoryDTO);
            return subCatagory;
        }
        return null;
    }
    @GetMapping("/sub_catagory")
    List<SubCatagoryDTO> all()
    {
        List<SubCatagory >  subCatagory =subCatagoryService.findAll();
        List<SubCatagoryDTO >  subCatagoryDTO =  new ArrayList<>();
        for (SubCatagory subCat:subCatagory){
            SubCatagoryDTO subCatDTO = new SubCatagoryDTO();
            BeanUtils.copyProperties(subCat, subCatDTO);
            subCatagoryDTO.add(subCatDTO);
        }
        return subCatagoryDTO ;
    }

}
