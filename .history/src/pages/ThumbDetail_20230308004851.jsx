import React from "react";

export default function ThumbDetail({title,image_url,population,region,capital}){
    return (
        <div className="container rounded-lg shadow-lg bg-white dark:bg-gray-700 dark:text-white pb-4">
            <img src={image_url} className="h-1/2 w-full rounded-tl-lg rounded-tr-lg" slt={title}/>
            <div className="p-4">
                <h2 className="font-bold mb-4">{title}</h2>
                <p className="text-xs">Population:<span className="text-gray-700 dark:text-gray-300">{population}</span></p>
                <p className="text-xs"> Region:<span className="text-gray-700 dark:text-gray-300">{region}</span></p>
                <p className="text-xs">Capital<span className="text-gray-700 dark:text-gray-300"> </span></p>

            </div>
        </div>
    )
}