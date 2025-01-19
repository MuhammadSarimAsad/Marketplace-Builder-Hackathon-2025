// import { sanityFetch } from "@/sanity/lib/fetch";  // Importing your fetch function
// import { allproducts } from "@/sanity/lib/queries";  // Importing the query for all products
// import { useRouter } from "next/router";
// import Image from "next/image";
// import Link from "next/link";

// const ProductPage = async ({ params }: { params: { id: string } }) => {
//   const { id } = params; // This will be the product's slug or _id from URL
//   const productQuery = `*[_type == "product" && slug.current == $slug][0] {
//     _id,
//     name,
//     description,
//     price,
//     quantity,
//     "imageUrl": image.asset->url,
//     dimensions,
//     features
//   }`;
//   const product = await sanityFetch({ query: productQuery, params: { slug: id } });

//   if (!product) {
//     return <div>Product not found</div>;
//   }

//   return (
//     <div className="px-4 md:px-8 lg:px-12 py-8 md:py-12">
//       {/* Product Section */}
//       <div className="flex flex-col md:flex-row gap-8 items-center">
//         <div className="w-full md:w-1/2 h-auto">
//           <Image
//             src={product.imageUrl}
//             height={800}
//             width={800}
//             alt={product.name}
//             className="w-full h-auto object-cover"
//           />
//         </div>
//         <div className="w-full md:w-1/2 px-4 md:px-10 py-6 flex flex-col justify-center">
//           <div>
//             <p className="text-xl md:text-2xl font-semibold">{product.name}</p>
//             <p className="py-2 text-lg md:text-xl">${product.price}</p>
//           </div>
//           <div className="text-[#505977] text-sm md:text-base">
//             <h1 className="font-semibold">Description</h1>
//             <div className="my-4 md:my-6">
//               <p>{product.description}</p>
//             </div>
//             <div className="ml-4">
//               <ul className="list-disc space-y-1">
//                 {product.features.map((feature: string, index: number) => (
//                   <li key={index}>{feature}</li>
//                 ))}
//               </ul>
//             </div>
//             <div className="my-8">
//               <h1 className="font-semibold">Dimensions</h1>
//               <div className="flex gap-12 md:gap-20 text-sm md:text-base">
//                 <div>
//                   <h1>Height</h1>
//                   <p>{product.dimensions.height}</p>
//                 </div>
//                 <div>
//                   <h1>Width</h1>
//                   <p>{product.dimensions.width}</p>
//                 </div>
//                 <div>
//                   <h1>Depth</h1>
//                   <p>{product.dimensions.depth}</p>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Add to Cart Button */}
//           <div className="flex flex-wrap justify-between items-center mt-8">
//             <Link href="/Cart">
//               <button className="w-full md:w-[146px] h-[56px] bg-[#2A254B] hover:bg-[#2A114C] text-white mt-4 md:mt-0">
//                 Add to cart
//               </button>
//             </Link>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProductPage;


import { sanityFetch } from "@/sanity/lib/fetch";  // Importing your fetch function
import { fourproucts } from "@/sanity/lib/queries";  // Importing the query for 4 products
import { useRouter } from "next/router";
import Image from "next/image";
import Link from "next/link";

const ProductPage = async ({ params }: { params: { id: string } }) => {
    const { id } = params; // This will be the product's slug or _id from URL

    // Query for the main product details based on the slug
    const productQuery = `*[_type == "product" && slug.current == $slug][0] {
    _id,
    name,
    description,
    price,
    quantity,
    "imageUrl": image.asset->url,
    dimensions,
    features
  }`;

    const product = await sanityFetch({ query: productQuery, params: { slug: id } });

    // Fetching 4 products to display in two rows below the main product
    const products = await sanityFetch({
        query: fourproucts,
    });

    if (!product) {
        return <div>Product not found</div>;
    }

    return (
        <div className="px-4 md:px-8 lg:px-12 py-8 md:py-12">
            {/* Product Section */}
            <div className="flex flex-col md:flex-row gap-8 items-center">
                <div className="w-full md:w-1/2 h-auto">
                    <Image
                        src={product.imageUrl}
                        height={800}
                        width={800}
                        alt={product.name}
                        className="w-full h-auto object-cover"
                    />
                </div>
                <div className="w-full md:w-1/2 px-4 md:px-10 py-6 flex flex-col justify-center">
                    <div>
                        <p className="text-xl md:text-2xl font-semibold">{product.name}</p>
                        <p className="py-2 text-lg md:text-xl">${product.price}</p>
                    </div>
                    <div className="text-[#505977] text-sm md:text-base">
                        <h1 className="font-semibold">Description</h1>
                        <div className="my-4 md:my-6">
                            <p>{product.description}</p>
                        </div>
                        <div className="ml-4">
                            <ul className="list-disc space-y-1">
                                {product.features.map((feature: string, index: number) => (
                                    <li key={index}>{feature}</li>
                                ))}
                            </ul>
                        </div>
                        <div className="my-8">
                            <h1 className="font-semibold">Dimensions</h1>
                            <div className="flex gap-12 md:gap-20 text-sm md:text-base">
                                <div>
                                    <h1>Height</h1>
                                    <p>{product.dimensions.height}</p>
                                </div>
                                <div>
                                    <h1>Width</h1>
                                    <p>{product.dimensions.width}</p>
                                </div>
                                <div>
                                    <h1>Depth</h1>
                                    <p>{product.dimensions.depth}</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Add to Cart Button */}
                    <div className="flex flex-wrap justify-between items-center mt-8">
                        <Link href="/Cart">
                            <button className="w-full md:w-[146px] h-[56px] bg-[#2A254B] hover:bg-[#2A114C] text-white mt-4 md:mt-0">
                                Add to cart
                            </button>
                        </Link>
                    </div>
                </div>
            </div>

            {/* Suggested Products Section */}
            <h1 className="text-xl md:text-2xl font-semibold mt-12 text-[#2A254B]">You might also like</h1>

            {/* Grid for the 4 products */}
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

export default ProductPage;


