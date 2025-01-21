import { defineQuery, groq } from "next-sanity";


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
export const fourproducts = defineQuery(`
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

export const Onefourproducts = defineQuery(`
        *[_type == "product"][8..11]{
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


    export const Onefourproducts2 = defineQuery(`
        *[_type == "product"][20..23]{
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


// export const allproducts = groq`[_type == "product"]`;
// export const fourproducts = groq`[_type == "product"]`;
