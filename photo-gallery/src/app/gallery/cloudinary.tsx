"use client"

import { Heart } from "@/components/icons/heart"
import { CldImage } from "next-cloudinary"
import cloudinary from 'cloudinary';
import {Action} from "./actions"
import { useState } from "react";
import { SearchResult } from './page';
import { FullHeart } from '../../components/icons/FullHeart';


export function Cloudinary(props: any & {ImageData: SearchResult; path:string})  {

    const [transition, startTransition]=useState();
    const { ImageData }=props;
    const isFavorite = ImageData.tags.includes("favorite");
  return (
   <>
   <div className="relative"> 
              <CldImage {...props} alt="image" src={ImageData.public_id} />
              {isFavorite ?
                  <FullHeart
                      onClick={() => {
                          startTransition(() => {
                              Action(ImageData.public_id,false,props.path);
                          });


                      }}
                      className="absolute top-2 right-2 hover:text-white text-red-500 cursor-pointer"
                  />
              :
              <Heart 
              onClick={()=>{
                startTransition(()=>{
                    Action(ImageData.public_id,true,props.path);
                });
                 
                      
              }}
              className="absolute top-2 right-2 hover:text-red-500 cursor-pointer"
              />}
          </div>
   </>
  )
}
