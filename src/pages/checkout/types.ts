import { type StatusType } from "../../globals/types/type";
import type { IOrderDetail } from "../my-orders-details/types";

interface IProduct{
    productId : string, 
    productQty : number, 
    orderStatus? : string, 
    totalAmount?:number, 
    Payment? : {
        paymentMethod : PaymentMethodType, 
        
    }
}
export interface IOrderItems extends IProduct{
    id : string, 
    orderId : string
}

export interface IOrder{
    status : StatusType, 
    items : IOrderItems[], 
    khaltiUrl : string | null, 
    orderDetails : IOrderDetail[]

}

export const PaymentMethod = {
    Esewa : "esewa", 
    Khalti : "khalti", 
    Cod : "cod"
} as const
export type PaymentMethodType = typeof PaymentMethod[keyof typeof PaymentMethod];

export interface IData{
    firstName : string, 
    lastName : string, 
    phoneNumber : string, 
    email : string, 
    city : string, 
    zipCode : string, 
    state : string, 
    addressLine : string, 
    totalAmount : number, 
    paymentMethod : PaymentMethodType, 
    products : IProduct[]
}

