import React from 'react'
import Image, { StaticImageData } from "next/image"// for image type is defined

const ProductCard = (props:{title:string, price:number , img:StaticImageData}) => {
  return (
    <div>
        <Image src={props.img} alt="one"/>
        <p className=" font-bold text-lg">{props.title}</p>
        <p className="opacity-75 mt-2">Jackets</p>
        <p className=" font-bold text-lg mt-2">${props.price}</p>
    </div>
  )
}

export default ProductCard