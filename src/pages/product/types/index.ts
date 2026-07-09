import { type StatusType } from "../../../globals/types/type";

interface ICategory{
    id : string, 
    categoryName : string
}

export interface IProduct{
    _id: string;
    id : string, 
    productName : string, 
    productDescription : string, 
    productPrice : number, 
    productTotalStock : number, 
    discount : number, 
    productImageUrl : string, 
    createdAt : string, 
    updatedAt : string, 
    categoryId : string, 
    Category : ICategory,
    colors? : string[],
    variantName? : string
}

export interface IProducts{
    products : IProduct[], 
    status : StatusType,
    product : IProduct | null
}