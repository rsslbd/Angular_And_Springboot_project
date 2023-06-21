export interface Sales{
   
    sales_id: number;
    customer_name:string;
    catagory:string;
    sub_catagory:string;
    product_name: string;
    brand_name: string;
    sku:string;
    supplier_name: string;
    status: string;
    qty: number;
    unit: string;
    selling_price: number;
    tax_percentage:number;
    discount_percentage:number;
    total: number;
    paid: number;
    due:number;
    payment_status:string;
    date:Date;
    }