//package com.jwt.secqurity.relationExample.controller;
//
//
//
//import com.jwt.secqurity.relationExample.dto.ResponseMessage;
//import com.jwt.secqurity.relationExample.entity.Product;
//import com.jwt.secqurity.relationExample.repository.ProductRepo;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.http.HttpStatus;
//import org.springframework.http.ResponseEntity;
//import org.springframework.web.bind.annotation.*;
//
//import java.util.List;
//
//@RestController
//@RequestMapping("/api")
//public class ProductController {
//
//
//    @Autowired
//    ProductRepo productRepo;
//
//    @GetMapping("/product")
//    List<Product> all() {
//        return productRepo.findAll();
//    }
//
//    @GetMapping("/product/{id}")
//    Product allByStatus(@PathVariable Long id) {
//        return productRepo.findById(id).get();
//    }
//
//
//    // end::get-aggregate-root[]
//
//    @PostMapping("/product/save")
//    Product newPost(@RequestBody Product product) {
//        return productRepo.save(product);
//    }
//
//    @PutMapping("/product/save")
//    Product replaceEmployee(@RequestBody Product product) {
//
//        return productRepo.findById(product.getId())
//                .map(post -> {
////                    BeanUtils.copyProperties(postEntity,post);
//                    post.setName(product.getName());
//                    post.setPrice(product.getPrice());
//                    post.setEmail(product.getEmail());
//                    post.setQuantity(product.getQuantity());
//                    return productRepo.save(post);
//                })
//                .orElseGet(() -> {
//                    product.setId(product.getId());
//                    return productRepo.save(product);
//                });
//    }
//
////
////    @PutMapping("/product/save/{id}")
////    Product updateProduct(@PathVariable("id") Long id, @RequestBody Product product) {
////
////        return productRepo.findById(id)
////                .map(post -> {
//////                    BeanUtils.copyProperties(postEntity,post);
////                    post.setName(product.getName());
////                    post.setPrice(product.getPrice());
////                    post.setEmail(product.getEmail());
////                    post.setQuantity(product.getQuantity());
////                    return productRepo.save(post);
////                })
////                .orElseGet(() -> {
////                    product.setId(id);
////                    return productRepo.save(product);
////                });
////    }
//
//    @DeleteMapping("/product/delete/{id}")
//    ResponseEntity<ResponseMessage> deleteEmployee(@PathVariable Long id) {
//        productRepo.deleteById(id);
//        return ResponseEntity.status(HttpStatus.OK).body(new ResponseMessage("Success Delete"));
//    }
//}
