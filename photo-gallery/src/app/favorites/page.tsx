

import { Cloudinary } from '../gallery/cloudinary';
import cloudinary from 'cloudinary';
import { SearchResult } from '../gallery/page';



export default async function Favorites() {
    const results = (await cloudinary.v2.search
        .expression('resource_type:image ')
        .sort_by('created_at', 'desc')
        .with_field("tags")
        .max_results(10)
        .execute()) as { resources: SearchResult[] };


    // console.log(results)

    return (
        <section>
            <div className=" flex flex-col gap-8">
                <div className='flex justify-between '>
                    <h1 className='text-4xl font-bold'>Favorites Images</h1>
                   
                </div>

                <div className='grid grid-cols-4 gap-4'>
                    {results.resources.map(result => (
                        <Cloudinary
                            key={result.public_id}
                            ImageData={result}

                            width="400"
                            height="300"
                            alt="an image of something"
                        />
                    ))}
                </div>
            </div>

        </section>
    )
}
