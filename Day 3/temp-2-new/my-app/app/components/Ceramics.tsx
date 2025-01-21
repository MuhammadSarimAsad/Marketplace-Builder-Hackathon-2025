// import { sanityFetch } from '@/sanity/lib/fetch';
// import { fourproducts } from '@/sanity/lib/queries';
// import React from 'react'
// import Link from 'next/link';
// import Image from 'next/image';


// const Ceramics = async ({ params }: { params: { id: string } }) => {
//     const { id } = params;

//     // Query for the main product details based on the slug
//     const productQuery = `*[_type == "product" && slug.current == $slug][0] {
//     _id,
//     name,
//     description,
//     price,
//     quantity,
//     "imageUrl": image.asset->url,
//     dimensions,
//     features,
//     tags
//   }`;

//     const product = await sanityFetch({ query: productQuery, params: { slug: id } });

//     // Fetching 4 products to display in two rows below the main product
//     const products = await sanityFetch({
//         query: fourproducts,
//     });
//     return (
//         <>
//             <section>
//                 <div className="px-4 md:px-8  text-[#2A254B] mt-12">
//                     {/* Title */}
//                     <h1 className="text-2xl font-semibold ">New Ceramics</h1>

//                 </div>
//                 <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-8">
//                     {products?.map((product: any) => (
//                         <Link key={product._id} href={`/products/${product.slug.current}`}>
//                             <div className="cursor-pointer">
//                                 <Image
//                                     src={product.imageUrl}
//                                     alt={product.name}
//                                     width={300}
//                                     height={300}
//                                     className="w-full h-[250px] object-cover mb-4 rounded-lg transform transition-all duration-300 hover:scale-105"
//                                 />
//                                 <p className="font-semibold text-lg">{product.name}</p>
//                                 <p className="text-sm text-gray-500">${product.price}</p>
//                             </div>
//                         </Link>
//                     ))}
//                 </div>
//             </section>
//         </>
//     )
// }

// export default Ceramics;

"use client"; // Ensure it works as a client component

import { useEffect, useState } from 'react';
import { sanityFetch } from "@/sanity/lib/fetch";
import { Onefourproducts } from "@/sanity/lib/queries"; // Importing the query for 4 products
import Image from 'next/image';
import Link from 'next/link';

const Ceramics = () => {
  const [products, setProducts] = useState<any[]>([]);

  // Fetching the products in a useEffect hook to fetch them after the component mounts
  useEffect(() => {
    const fetchProducts = async () => {
      const data = await sanityFetch({ query: Onefourproducts });
      setProducts(data);
    };
    fetchProducts();
  }, []);

  return (
    <div className="px-4 md:px-8 text-[#2A254B] mt-12">
      <h1 className="text-2xl font-semibold">New Ceramics</h1>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-8">
        {products?.map((product: any) => (
          <Link key={product._id} href={`/products/${product.slug.current}`}>
            <div className="cursor-pointer">
              <Image
                src={product.imageUrl}
                alt={product.name}
                width={300}
                height={300}
                className="w-full h-[250px] object-cover mb-4 rounded-lg transform transition-all duration-300 hover:scale-105"
              />
              <p className="font-semibold text-lg">{product.name}</p>
              <p className="text-sm text-gray-500">${product.price}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Ceramics;
