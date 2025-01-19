import { defineQuery } from "next-sanity";


export const allproducts = defineQuery(`
    *[_type == "product"]{
    _id,
    category,
    name,
    slug,
    price,
    quantity,
    tags,
    description,
    features,
    dimensions,
    "imageUrl" : image.asset->url
    }`)

// 2 rows of 4 products
export const fourproucts = defineQuery(`
        *[_type == "product"][0..7]{
    _id,
    category,
    name,
    slug,
    price,
    quantity,
    tags,
    description,
    features,
    dimensions,
    "imageUrl" : image.asset->url
    }`)

