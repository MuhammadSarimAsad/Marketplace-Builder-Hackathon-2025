import { sanityFetch } from "@/sanity/lib/fetch";
import { allproducts, fourproucts } from "@/sanity/lib/queries";
import Image from "next/image";
import Link from "next/link";

type Product = {
  _id: string;
  name: string;
  description: string;
  price: number;
  slug: { current: string };
  imageUrl: string;
};

export default async function Home() {
  const products: Product[] = await sanityFetch({ query: allproducts });

  return (
    <div className="px-4 sm:px-6 md:px-8">
      <h1 className="text-2xl font-bold text-center my-8">Products</h1>

      {/* Grid Layout */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <div
            key={product._id}
            className="border p-4 rounded-lg transition-all duration-300 ease-in-out hover:shadow-lg hover:scale-105"
          >

            {/* Product Image */}
            <div className="relative w-full pb-[100%]">
              <Link key={product._id} href={`/products/${product.slug.current}`}>
                <Image
                  src={product.imageUrl}
                  alt={product.name}
                  className="absolute inset-0 w-full h-full object-cover"
                  height={500}
                  width={500}
                />
              </Link>
            </div>

            {/* Product Name */}
            <h2 className="text-lg font-semibold text-center mt-4">{product.name}</h2>

            {/* Product Description */}
            <p className="text-sm text-center text-gray-600 mt-2">{product.description}</p>

            {/* Product Price */}
            <p className="font-semibold text-center text-lg mt-2">${product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

