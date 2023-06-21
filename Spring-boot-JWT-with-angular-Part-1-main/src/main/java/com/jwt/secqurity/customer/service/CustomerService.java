package com.jwt.secqurity.customer.service;

import com.jwt.secqurity.customer.Entity.Customer;
import com.jwt.secqurity.customer.Repository.CustomerRepo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;


@Service
public class CustomerService {
    @Autowired
    CustomerRepo customerRepo;
    public List<Customer> findAll() {
        return customerRepo.findAll();

    }
    public void save(Customer customer) {
        if (customer.getCustomer_id()!= null){
            customerRepo.findById(customer.getCustomer_id())
                    .map(old -> {
                        old.setCustomer_name(customer.getCustomer_name());
                        old.setEmail(customer.getEmail());
                        old.setPhone(customer.getPhone());
                        old.setCountry(customer.getCountry());
                        old.setCity(customer.getCity());
                        old.setAddress(customer.getAddress());




                        return customerRepo.save(old);
                    })
                    .orElseGet(() -> {
                        return customerRepo.save(customer);
                    });
        }else {
            customerRepo.save(customer);
        }
    }
    public  Customer getById(Long customer_id) {
        return customerRepo.findById(customer_id).orElse(new Customer());
    }
    public void delete(Long customer_id) {
        customerRepo.deleteById(customer_id);
    }
}
