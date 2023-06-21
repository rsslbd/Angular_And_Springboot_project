package com.jwt.secqurity.customer.Controller;

import com.jwt.secqurity.customer.service.CustomerService;
import com.jwt.secqurity.customer.DTO.CustomerDTO;
import com.jwt.secqurity.customer.Entity.Customer;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "http://localhost:4200", allowCredentials = "true")
public class CustomerController {
    @Autowired
    CustomerService customerService;
    @PostMapping("/customer")
    public void saveData(@RequestBody CustomerDTO customerDTO){
        if (customerDTO != null) {
            Customer customer = new Customer();
            BeanUtils.copyProperties(customerDTO ,customer);

            customer.setCustomer_name(customerDTO.getCustomer_name());

            customerService.save(customer);
        }

    }

//    @PostMapping("/cs")
//    public String saveData2(){
//
//        return "OK!";
//    }
    @PutMapping("/customer")
    public void update( @RequestBody CustomerDTO customerDTO){
        if (customerDTO != null) {
            Customer customer = new Customer();
            BeanUtils.copyProperties(customerDTO ,customer);
            customerService.save(customer);        }
    }
    @DeleteMapping("/customer/{customer_id}")
    public void delete(@PathVariable("customer_id") Long id){

        customerService.delete(id);
    }
    @GetMapping("/customer/{customer_id}")
    public CustomerDTO getByIdDTO(@PathVariable("customer_id") Long id){
        Customer customer;
        customer= customerService.getById(id);
        if (customer.getCustomer_id() !=null ){
            CustomerDTO customerDTO = new CustomerDTO();
            BeanUtils.copyProperties(customer, customerDTO);
            return customerDTO;
        }
        return null;
    }
    @GetMapping("/customer")
    List<CustomerDTO> all()
    {
        List<Customer >  customer =customerService.findAll();
        List<CustomerDTO >  customerDTO =  new ArrayList<>();
        for (Customer cus:customer){
            CustomerDTO cusDTO = new CustomerDTO();
            BeanUtils.copyProperties(cus, cusDTO);
            customerDTO.add(cusDTO);
        }
        return customerDTO ;
    }

}
