"use client"

;
// import { CartProvider } from "@/context/CartContext";

import { useCart } from "@/context/CartContext";
import { PProduct } from "@/types/products";



interface CartItem {
    id: string;
    name: string;
    price: number;
    quantity: number;
    image: string;
  }

const AddToCart = ({product}:{product:PProduct}) =>{
    const{addToCart,cart}=useCart()
    console.log(cart)
   
        
    
    const productItem :CartItem = {
        id: product._id,
        name: product.name,
        price: product.price,
        quantity: product.quantity,
        image: product?.image?.asset?._ref || '',
    }

  
    return(<div className="flex flex-wrap justify-between items-center mt-8">                       
                        <button  onClick={()=>addToCart(productItem)}
                            className="w-[146px] h-[56px] bg-[#2A254B] hover:bg-[#2A114C] text-white mt-4 md:mt-0">
                                Add to cart
                            </button>                      
                    </div>
                    )}
 

export default AddToCart