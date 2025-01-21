// "use client"
// import { createClient } from "next-sanity";
// import CartManager from "../components/CartManager";
// import { useCart } from "@/context/CartContext";



// const client = createClient({
//     projectId : "0ta3sb2t",
//     dataset : "production",
//     useCdn : true ,
//     apiVersion : "2023-10-10"
// })

// // const getproducts = async ()=>{
// //   const products = await client.fetch(
// //       `
// //       *[_type == "product"]{
// //           _id,
// //           category,
// //           name,
// //           slug,
// //           price,
// //           quantity,
// //           tags,
// //           description,
// //           features,
// //           dimensions,
// //           "imageUrl" : image.asset->url
// //           }
// //           `
// //   )
// //   return products
// // }

// export default  function Cart(){
//     const {cart,removeFromCart}= useCart()
// //   const products = await getproducts()
//   return(
//       <CartManager cartItems={cart} removeFromCart={removeFromCart}/> 
//   )
// }


// "use client"; // Add this to make the component a Client Component

// import { useState, useEffect } from "react";
// import Link from "next/link";
// import Image from "next/image";

// const CartPage = () => {
//   const [cart, setCart] = useState<any[]>([]);

//   useEffect(() => {
//     const storedCart = JSON.parse(localStorage.getItem("cart") || "[]");
//     setCart(storedCart);
//   }, []);

//   const removeFromCart = (productId: string) => {
//     const updatedCart = cart.filter(item => item._id !== productId);
//     setCart(updatedCart);
//     localStorage.setItem("cart", JSON.stringify(updatedCart));
//   };

//   return (
//     <div className="px-4 md:px-8 lg:px-12 py-8 md:py-12">
//       <h1 className="text-xl md:text-2xl font-semibold text-[#2A254B]">Your Cart</h1>
//       <div className="mt-8 space-y-8">
//         {cart.length > 0 ? (
//           cart.map(product => (
//             <div key={product._id} className="flex gap-8 items-center">
//               <Image
//                 src={product.imageUrl}
//                 alt={product.name}
//                 width={100}
//                 height={100}
//                 className="object-cover"
//               />
//               <div className="flex-grow">
//                 <p className="font-semibold">{product.name}</p>
//                 <p>${product.price}</p>
//               </div>
//               <button
//                 onClick={() => removeFromCart(product._id)}
//                 className="bg-red-500 text-white px-4 py-2 rounded"
//               >
//                 Remove
//               </button>
//             </div>
//           ))
//         ) : (
//           <p>Your cart is empty</p>
//         )}
//       </div>
//       {cart.length > 0 && (
//         <div className="mt-8 flex justify-end">
//           <Link href="/checkout">
//             <button className="bg-[#2A254B] text-white py-2 px-6 rounded">
//               Proceed to Checkout
//             </button>
//           </Link>
//         </div>
//       )}
//     </div>
//   );
// };

// export default CartPage;

"use client"; // Add this to make the component a Client Component

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import Navbar from "../components/Navbar";
import AboutMobileNavbar from "../components/AboutMobileNavbar";

const CartPage = () => {
  const [cart, setCart] = useState<any[]>([]);

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart") || "[]");
    setCart(storedCart);
  }, []);

  const removeFromCart = (productId: string) => {
    const updatedCart = cart.filter((item) => item._id !== productId);
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  return (

    <div>

      <Navbar/>
      <AboutMobileNavbar/>


    <div className="container mx-auto px-4 md:px-8 py-8 md:py-12 text-[#2A254B]">
      {/* Title */}
      <h1 className="text-3xl font-extrabold mb-6">Shopping Cart</h1>

      {/* Cart Items */}
      <div className="space-y-6">
        {cart.length > 0 ? (
          cart.map((product) => (
            <div
              key={product._id}
              className="flex items-center bg-gray-100 rounded-lg p-4 gap-4 shadow-sm"
            >
              <Image
                src={product.imageUrl}
                alt={product.name}
                width={100}
                height={100}
                className="rounded-lg object-cover"
              />
              <div className="flex-grow">
                <p className="text-lg font-semibold">{product.name}</p>
                <p className="text-gray-600">${product.price}</p>
              </div>
              <button
                onClick={() => removeFromCart(product._id)}
                className="bg-red-500 text-white text-sm px-4 py-2 rounded-lg shadow-md hover:bg-red-600 transition"
              >
                Remove
              </button>
            </div>
          ))
        ) : (
          <div className="text-center py-16">
            <p className="text-lg text-gray-500">Your cart is empty.</p>
          </div>
        )}
      </div>

      {/* Checkout Button */}
      {cart.length > 0 && (
        <div className="mt-8 flex justify-end">
          <Link href="/checkout">
            <button className="bg-[#2A254B] text-white py-3 px-8 rounded-lg text-lg font-medium shadow-md hover:bg-[#201c4a] transition">
              Proceed to Checkout
            </button>
          </Link>
        </div>
      )}
    </div>
    </div>
  );
};

export default CartPage;





