import cloudinary from 'cloudinary';
import { revalidatePath } from "next/cache"
import { resolve } from 'path';
"use server"

export async function Action(publicId:string,
    isFavorite:boolean){
        if(isFavorite){
           
            await cloudinary.v2.uploader.remove_tag('favorite', [publicId]);
        }else{
            await cloudinary.v2.uploader.add_tag('favorite', [publicId]);
        }
    await new Promise((resolve)=>setTimeout(resolve,1000));
     revalidatePath('/gallery');
}