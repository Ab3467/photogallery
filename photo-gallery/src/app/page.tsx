"use client"
import Image from 'next/image'
import { CldImage } from 'next-cloudinary';
import { CldUploadButton } from 'next-cloudinary';
import {useState} from "react"

export type UploadResult ={
info:{
  public_id :string
},
event:'success',
}

export default function Home() {
  const [imgId,setImgId]=useState("")
  return (
    <>
    <main className='flex min-h-screen flex-col items-center justify-center bg-yellow-100'>
        <CldUploadButton 
          onUpload={(result: UploadResult)=>{
          setImgId(result.info.public_id)
        }}
        uploadPreset="py5227pn"/>

        {imgId && (
        <CldImage
          width="500"
          height="300"
          src={imgId}
          sizes="100vw"
          
          // tint="70:blue:green:purple"
          alt="Description of my image"
        />
)}
    </main>
    
    </>
  );
}
    