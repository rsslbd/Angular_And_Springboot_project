package com.jwt.secqurity.product.Controller;

import com.jwt.secqurity.product.DTO.ProductDTO;
import com.jwt.secqurity.product.Entity.Product;
import com.jwt.secqurity.product.Service.ProductService;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "http://localhost:4200", allowCredentials = "true")
public class ProductController {
    @Autowired
    ProductService productService;
    @PostMapping("/product")
    public void save(@RequestBody ProductDTO productDTO){

        if (productDTO != null) {
            Product product = new Product();
            BeanUtils.copyProperties(productDTO ,product);
            productService.save(product);
        }

    }
    @PutMapping("/product")
    public void update( @RequestBody ProductDTO productDTO){
        if (productDTO != null) {
            Product product = new Product();
            BeanUtils.copyProperties(productDTO ,product);
            productService.save(product);        }
    }
    @DeleteMapping("/product/{product_id}")
    public void delete(@PathVariable("product_id") Long id){

        productService.delete(id);
    }
    @GetMapping("/product/{product_id}")
    public ProductDTO getByIdDTO(@PathVariable("product_id") Long id){
        Product product;
        product= productService.getById(id);
        if (product.getProduct_id() !=null ){
            ProductDTO productDTO = new ProductDTO();
            BeanUtils.copyProperties(product, productDTO);
            return productDTO;
        }
        return null;
    }
    @GetMapping("/product")
    List<ProductDTO> all()
    {
        List<Product >  product =productService.findAll();
        List<ProductDTO >  productDTO =  new ArrayList<>();
        for (Product pro:product
        ) {
            ProductDTO proDTO = new ProductDTO();
            BeanUtils.copyProperties(pro, proDTO);
            productDTO.add(proDTO);
        }
        return productDTO ;
    }

}
