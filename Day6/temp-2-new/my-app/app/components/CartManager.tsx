
// "use client"
// // import { CartItem, useCart } from '@/context/CartContext'
// // import { PProduct } from '@/types/products'
// // import { useState } from 'react'




// // const CartManager = ({cartItems,removeFromCart}:{cartItems:CartItem[],removeFromCart:any}) => {
// //     // const {cart , removeFromCart}= useCart()
//     console.log(cartItems)

//     // const [cart, setCart] = useState<PProduct[]>([])

//     // const handleAddToCart = (product: PProduct) => {
//     //     setCart((prevProduct) => [...prevProduct, product])
//     // }

//     // const handleRemoveFromCart = (product_id: string) => {
//     //     const newData = cart.filter((item) => {
//     //         return item._id! = product_id
//     //     })
//     //     setCart(newData)
//     // }

//     return (
//         <>
            
//             <div className="container mx-auto my-8 px-4 sm:px-6 lg:px-8">
//                 <div className="overflow-x-auto">
//                     <table className="min-w-full bg-white shadow-md rounded-lg">
//                         <thead className="bg-gray-100 border-b">
//                             <tr>
//                                 <th className="text-left text-gray-600 font-semibold py-3 px-4">Name</th>
//                                 <th className="text-left text-gray-600 font-semibold py-3 px-4">Description</th>
//                                 <th className="text-right text-gray-600 font-semibold py-3 px-4">Price</th>
//                                 <th className="text-center text-gray-600 font-semibold py-3 px-4">Quantity</th>
//                                 <th className="text-center text-gray-600 font-semibold py-3 px-4">Action</th>
//                             </tr>
//                         </thead>
//                         <tbody>
//                             {cartItems.map((item) => {
//                                 return (
//                                     <tr className="border-b hover:bg-gray-50 transition" key={item.id}>
//                                         <td className="py-4 px-4 font-medium text-gray-800 truncate">{item.name}</td>
//                                         {/* <td className="py-4 px-4 text-gray-600">
//                                             {item. description.length > 100 ? item.description.substring(0, 100) + '...' : item.description}
//                                         </td> */}
//                                         <td className="py-4 px-4 text-right text-gray-800">{item.price}</td>
//                                         <td className="py-4 px-4 text-center">
//                                             <input
//                                                 type="number"
//                                                 className="w-16 text-center border-gray-300 rounded-md"
//                                                 min="1"
//                                                 value="1"
//                                                 readOnly
//                                             />
//                                         </td>
//                                         <td className="py-4 px-4 text-center">
//                                             <button
//                                                 onClick={() => removeFromCart(item.id)}
//                                                 className="bg-red-500 text-white px-4 py-2 rounded-md"
//                                             >
//                                                 Remove
//                                             </button>
//                                         </td>
//                                     </tr>
//                                 );
//                             })}
//                         </tbody>
//                     </table>
//                 </div>
//                 <button
//                     className="w-full mt-4 py-2 bg-yellow-600 text-white text-sm font-medium rounded-lg hover:bg-blue-700 transition"
//                 >
//                     Checkout
//                 </button>
//                 <div className="mt-8 bg-gray-100 p-6 rounded-lg shadow-md">
//                     <h2 className="text-lg font-semibold mb-4">Customer Information</h2>
//                     <div className="mb-4">
//                         <label className="block text-sm font-medium text-gray-700">Name</label>
//                         <input
//                             type="text"
//                             className="w-full px-3 py-2 border border-gray-300 rounded-md"
//                         />
//                     </div>
//                 </div>
//             </div>
//         </>
//     );


// }

// export default CartManager






"use client"; // Add this to make the component a Client Component

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

const CartManagerPage = () => {
    const [cart, setCart] = useState<any[]>([]);

    useEffect(() => {
        const storedCart = JSON.parse(localStorage.getItem("cart") || "[]");
        setCart(storedCart);
    }, []);

    const removeFromCart = (productId: string) => {
        const updatedCart = cart.filter(item => item._id !== productId);
        setCart(updatedCart);
        localStorage.setItem("cart", JSON.stringify(updatedCart));
    };

    return (
        <div className="px-4 md:px-8 lg:px-12 py-8 md:py-12">
            <h1 className="text-xl md:text-2xl font-semibold text-[#2A254B]">Your Cart</h1>
            <div className="mt-8 space-y-8">
                {cart.length > 0 ? (
                    cart.map(product => (
                        <div key={product._id} className="flex gap-8 items-center">
                            <Image
                                src={product.imageUrl}
                                alt={product.name}
                                width={100}
                                height={100}
                                className="object-cover"
                            />
                            <div className="flex-grow">
                                <p className="font-semibold">{product.name}</p>
                                <p>${product.price}</p>
                            </div>
                            <button
                                onClick={() => removeFromCart(product._id)}
                                className="bg-red-500 text-white px-4 py-2 rounded"
                            >
                                Remove
                            </button>
                        </div>
                    ))
                ) : (
                    <p>Your cart is empty</p>
                )}
            </div>
            {cart.length > 0 && (
                <div className="mt-8 flex justify-end">
                    <Link href="/checkout">
                        <button className="bg-[#2A254B] text-white py-2 px-6 rounded">
                            Proceed to Checkout
                        </button>
                    </Link>
                </div>
            )}
        </div>
    );
};

export default CartManagerPage
