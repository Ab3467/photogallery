"use client"

import { CldImage } from "next-cloudinary"


export function Cloudinary(props:any)  {
  return (
   <>
   
          <CldImage {...props} alt="image"/>
   
   
   </>
  )
}
