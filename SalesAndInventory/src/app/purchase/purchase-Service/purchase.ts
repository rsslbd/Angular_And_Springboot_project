export interface Purchase{
   
    purchase_id: number;
    catagory:string;
    sub_catagory:string;
    product_name: string;
    brand_name: string;
   
    sku:string;
    supplier_name: string;
    status: string;
    qty: number;
    unit: string;
    purchase_price: number;
    total: number;
    paid: number;
    payment_status:string;
    date:Date;
    }