

export const OrderStatus = {
    Preparation : "preparation", 
    Ontheway : "ontheway", 
    Delivered : "delivered", 
    Pending : "pending", 
    Cancelled : "cancelled"
}as const
export type OrderStatusType = typeof OrderStatus[keyof typeof OrderStatus];

export const PaymentMethod = {
    Khalti : "khalti", 
    Esewa : "onthesewaeway", 
    COD : "cod"
}as const
export type PaymentMethodType = typeof PaymentMethod[keyof typeof PaymentMethod];

export const PaymentStatus = {
    Paid : "paid", 
    Unpaid :"unpaid"
}as const
export type PaymentStatusType = typeof PaymentStatus[keyof typeof PaymentStatus];

export interface IOrderDetail {
    id: string,
    quantity: number,
    createdAt: string,
    
    orderId: string,
    productId: string,
    Order: {
        orderStatus: OrderStatusType ,
        AddressLine: string,
        City: string,
        State: string,
        totalAmount: number,
        phoneNumber: string,
        firstName : string, 
        lastName : string, 
        Payment: {
            paymentMethod: PaymentMethodType,
            paymentStatus: PaymentStatusType
        }
    },
    Product: {
        productImageUrl: string,
        productName: string,
        productPrice: number,
        Category: {
       
            categoryName: string,
      
        }
    }
}