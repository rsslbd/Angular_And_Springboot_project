package com.jwt.secqurity.catagory.controller;
import com.jwt.secqurity.catagory.DTO.CatagoryDTO;
import com.jwt.secqurity.catagory.Entity.Catagory;
import com.jwt.secqurity.catagory.Service.CatagoryService;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "http://localhost:4200", allowCredentials = "true")
public class CatagoryController {
    @Autowired
    CatagoryService catagoryService;
    @PostMapping("/catagory")
    public void saveData(@RequestBody CatagoryDTO catagoryDTO){
        if (catagoryDTO != null) {
            Catagory catagory = new Catagory();
            BeanUtils.copyProperties(catagoryDTO ,catagory);

            catagory.setCatagory_name(catagoryDTO.getCatagory_name());

            catagoryService.save(catagory);
        }

    }
    @PutMapping("/catagory")
    public void update( @RequestBody CatagoryDTO catagoryDTO){
        if (catagoryDTO != null) {
            Catagory catagory = new Catagory();
            BeanUtils.copyProperties(catagoryDTO ,catagory);
            catagoryService.save(catagory);        }
    }
    @DeleteMapping("/catagory/{catagory_id}")
    public void delete(@PathVariable("catagory_id") Long id){

        catagoryService.delete(id);
    }
    @GetMapping("/catagory/{catagory_id}")
    public CatagoryDTO getByIdDTO(@PathVariable("catagory_id") Long id){
        Catagory catagory;
        catagory= catagoryService.getById(id);
        if (catagory.getCatagory_id() !=null ){
            CatagoryDTO catagoryDTO = new CatagoryDTO();
            BeanUtils.copyProperties(catagory, catagoryDTO);
            return catagoryDTO;
        }
        return null;
    }
    @GetMapping("/catagory")
    List<CatagoryDTO> all()
    {
        List<Catagory >  catagory =catagoryService.findAll();
        List<CatagoryDTO >  catagoryDTO =  new ArrayList<>();
        for (Catagory cat:catagory){
            CatagoryDTO catDTO = new CatagoryDTO();
            BeanUtils.copyProperties(cat, catDTO);
            catagoryDTO.add(catDTO);
        }
        return catagoryDTO ;
    }

}
