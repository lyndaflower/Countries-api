import React from "react";

export default function ThumbDetail({title,image_url,population,region,capital}){
    return (
        <div className="container rounded-lg shadow-lg bg-white dark:bg-gray-700 dark:text-white pb-4">
            <img src={image_url} className="h-1/2 w-full rounded-tl-lg rounded-tr-lg" slt={title}/>
            <div className="p-4"></div>
        </div>
    )
}