"use client"

import { Heart } from "@/components/ui/icons/heart"
import { CldImage } from "next-cloudinary"
import cloudinary from 'cloudinary';
import {Action} from "./actions"
import { useState } from "react";
import { SearchResult } from './page';
import { FullHeart } from '../../components/ui/icons/FullHeart';


export function Cloudinary(props: any & {ImageData: SearchResult})  {

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
                              Action(ImageData.public_id,false);
                          });


                      }}
                      className="absolute top-2 right-2 hover:text-white text-red-500 cursor-pointer"
                  />
              :
              <Heart 
              onClick={()=>{
                startTransition(()=>{
                    Action(ImageData.public_id,true);
                });
                 
                      
              }}
              className="absolute top-2 right-2 hover:text-red-500 cursor-pointer"
              />}
          </div>
   </>
  )
}
