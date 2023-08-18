"use client"
import Image from 'next/image'
import { CldUploadButton } from 'next-cloudinary'

export default function Home() {
  return (
    <>
    <main className='flex min-h-screen flex-col items-center justify-center'>
      <CldUploadButton uploadPreset="ofjk5tpc"/>

    </main>
    
    </>
  )
}
    