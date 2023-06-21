//package com.jwt.secqurity.relationExample.dto;
//
//import lombok.Data;
//
//import java.time.LocalDate;
//import java.util.ArrayList;
//import java.util.Arrays;
//import java.util.Collections;
//import java.util.List;
//
//public class Test {
//
//    /**
//     * This class shows how to sort ArrayList in java
//     * @param args
//     */
//    public static void main(String[] args) {
////        List<String> strList = new ArrayList<String>();
////        strList.add("A");
////        strList.add("F");
////        strList.add("C");
////        strList.add("B");
////        strList.add("Z");
////        strList.add("E");
////
////        System.out.println("Original List:");
////        for(String str: strList) {System.out.print(" "+str);}
////        System.out.println();
////        //using Collections.sort() to sort ArrayList
////        System.out.println("Naturally Sorted List:");
////        Collections.sort(strList);
////        for(String str: strList) {System.out.print(" "+str);}
////        System.out.println();
////        System.out.println("Reverse Sorted List:");
//////        strList.sort(Collections.reverseOrder());   //Sorts in reverse order
////        strList.sort(Collections.reverseOrder());
////
////        for(String str: strList) {System.out.print(" "+str);}
////
////        System.out.println();
////
////
////
////
////        List<Employee> dl = new ArrayList<>();
////        dl.add(new Employee(2L, "Rasel", "rasel@gmail.com", LocalDate.now()));
////        dl.add(new Employee(3L, "Sami", "Sami@gmail.com", LocalDate.now()));
////        dl.add(new Employee(4L, "Mehedi", "Mehedi@gmail.com", LocalDate.now()));
////        System.out.println("Original List::");
////        printEmployee(dl);
////        Collections.sort(dl);
////        System.out.println("Naturally Sorted List::");
////        printEmployee(dl);
////
////        Collections.sort(dl, Collections.reverseOrder());
////        System.out.println("Reverse Sorted List::");
////        printEmployee(dl);
//
//
//
//
//
//        int[] arr = {3, 22, 27, 47, 57, 67, 89, 91, 95, 99};
//
//        int elementToSearch = 67;
//
//        int index = Arrays.binarySearch(arr, elementToSearch);
//
//        for (int i = 0; i < arr.length; i++) {
//            if (arr[i]==elementToSearch){
//                System.out.println(arr[i]);
//            }
//        }
//        System.out.println("index 1 --" + index);
//
//
////        -----------------------------------------
//
//
//        java.util.List<Integer> listInt = new java.util.ArrayList<>();
//        listInt.add(3);
//        listInt.add(22);
//        listInt.add(27);
//        listInt.add(47);
//        listInt.add(57);
//        listInt.add(67);
//        listInt.add(89);
//        listInt.add(91);
//        listInt.add(95);
//        listInt.add(99);
//
//        int elementToSearch2 = 67;
//
//        int index2 = listInt.indexOf(elementToSearch);
//        System.out.println("index 2 --" + index);
//
//
//
//
//        List<Customer> customers = new ArrayList<>();
//        customers.add(new Customer(1, "Jack"));
//        customers.add(new Customer(2, "James"));
//        customers.add(new Customer(3, "Kelly"));
//
//        System.out.println("Normal  2 --" + index);
//
//        for (Customer c:customers
//             ) {
//            if (c.getName().equals("James")){
//                System.out.println("Object For---"+c);
//            }
//            else {
//                System.out.println("Nooooooooooo---");
//            }
//        }
//
//        Customer james = new Customer(3, "Kelly");
//        Customer my = new Customer(5, "22");
//        if (customers.contains(my)) {
//            System.out.println("Yes james is exist");
//            System.out.println(james);
//
//            System.out.println(customers.indexOf(james));
//        }
//
//        if(customers.indexOf(james) != -1) {
//            System.out.println(true);
//        }
//
//        //Java 8 Stream API
//
//        Customer jamesSt = customers.stream().filter(c -> {
////                  return "Kelly".equals(c.getName());
//                    return (c.getId() == 3 && c.getName().equals("Kelly"));
//                })
//                .findAny()
//                .orElse(null);
//
//        System.out.println("Object:"+jamesSt);
//
////        Integer[] arr = { 1000, 5, -2, 23, 7, 87, -42, 509 };
////        System.out.println("The original array is: ");
////        Integer lageNumber = arr[0];
////        for (int num : arr) {
////            if (lageNumber<num){
////                lageNumber = num;
////            }
////            System.out.print(num + " ");
////        }
////        System.out.println();
////        System.out.println("Large Number 1- " + lageNumber);
////
////        Arrays.sort(arr);
////        Integer lageNumber2 = arr[arr.length-1];
////        System.out.println("Large Number 2 - " + lageNumber2);
//
//
//
////        Integer[] arr = { 1000, 5, -2, 23, 7, 87, -42, 509 };
////        System.out.println("The original array is: ");
////        Integer smallNumber = arr[0];
//
////        for (int i = 0; i < arr.length; i++) {
////            if (smallNumber>arr[i]){
////                smallNumber = arr[i] ;
////            }
////            System.out.print(arr[i] + " ");
////        }
//
//
//
////        Integer[] arr5 = { 1000, 5, -2, 23, 7, 87, -42, 509 };
////
////        int a = 50;
////        boolean is = false;
////
////        for (int num : arr5) {
////            if (a==num){
////                is = true ;
////            }
////        }
////        System.out.print(is ?a+" Number is present":a+" Number is not present");
//
//
////
////        for (int num : arr) {
////            if (smallNumber>num){
////                smallNumber = num ;
////            }
////            System.out.print(num + " ");
////        }
////        System.out.println();
////        System.out.println( smallNumber +10 +" small Number 1- ");
////
////        Arrays.sort(arr);
////        Integer smallNumber2 = arr[0];
////        System.out.println( smallNumber2 +10 + " small Number 2 - ");
////        System.out.println(  " small Number 2 - " + smallNumber2 +10 );
////
////        System.out.println( " small Number 2 - " + (smallNumber2 +10));
////
////
////
////
//
//
//
//
//
//
//
//
////
////
////
////        System.out.println("\nThe sorted array is: ");
////        for (int num : arr) {
////            System.out.print(num + " ");
////        }
////
////        Arrays.sort(arr, Collections.reverseOrder());
////
////        System.out.println("\nThe sorted array in reverse Order is: ");
////        for (int num : arr) {
////            System.out.print(num + " ");
////        }
////
////        System.out.println();
////
////
////        // Custom input array
////        // It contains 8 elements as follows
////        int[] arr2 = { 13, 7, 6, 45, 21, 9, 2, 100 };
////
////        // Sort subarray from index 1 to 4, i.e.,
////        // only sort subarray {7, 6, 45, 21} and
////        // keep other elements as it is.
////        Arrays.sort(arr2, 0, 6);
////
////        // Printing the updated array which is
////        // sorted after 2 index inclusive till 5th index
////        System.out.println("Modified arr[] : "
////                + Arrays.toString(arr2));
////
////
////
////
////
////
////
////        // Custom input string
////        String arr3[] = { "abc", "xyz1", "mn" };
////
////        // Sorts arr[] in ascending order
////        Arrays.sort(arr3);
////
////        System.out.println();
////        System.out.println("Modified arr[] 1 : "
////                + Arrays.toString(arr3));
////
////        // Sorts arr[] in descending order
////        Arrays.sort(arr3, Collections.reverseOrder());
////
////        // Lastly printing the above array
////        System.out.println("Modified arr[] :"
////                + Arrays.toString(arr3));
//
//    }
//    public Customer findUsingEnhancedForLoop(
//            String name, List<Customer> customers) {
//
//        for (Customer customer : customers) {
//            if (customer.getName().equals(name)) {
//                return customer;
//            }
//        }
//        return null;
//    }
//    static void printEmployee(List<Employee> empList){
//        for (Employee e:empList
//             ) {
//            System.out.println(e.toString());
//        }
//    }
//}
//@Data
//class Customer {
//
//    private int id;
//    private String name;
//
//    public Customer(int id, String name) {
//        this.id = id;
//        this.name = name;
//    }
//// getters/setters, custom hashcode/equals
//}
//
//class Employee implements Comparable<Employee> {
//
//    private Long id;
//    private String name;
//    private String email;
//    private LocalDate dateOfBirth;
//
//    public Employee(Long i) {
//        this.id = i;
//    }
//
//    public Employee(Long id, String name, String email, LocalDate dateOfBirth) {
//        this.id = id;
//        this.name = name;
//        this.email = email;
//        this.dateOfBirth = dateOfBirth;
//    }
//
//    public Employee() {
//    }
//
//    //    @Override
////    public int compareTo(Employee d) {
////        return (int) (this.id - d.getId());
////    }
//    @Override
//    public int compareTo(Employee e) {
//        return this.getName().compareTo(e.getName());
//    }
//
//
//    public void setId(Long id) {
//        this.id = id;
//    }
//
//    public String getName() {
//        return name;
//    }
//
//    public void setName(String name) {
//        this.name = name;
//    }
//
//    public String getEmail() {
//        return email;
//    }
//
//    public void setEmail(String email) {
//        this.email = email;
//    }
//
//    public LocalDate getDateOfBirth() {
//        return dateOfBirth;
//    }
//
//    public void setDateOfBirth(LocalDate dateOfBirth) {
//        this.dateOfBirth = dateOfBirth;
//    }
//
//    public Long getId() {
//        return id;
//    }
//
//    @Override
//    public String toString() {
//        return "Employee{" +
//                "id=" + id +
//                ", name='" + name + '\'' +
//                ", email='" + email + '\'' +
//                ", dateOfBirth=" + dateOfBirth +
//                '}';
//    }
//}