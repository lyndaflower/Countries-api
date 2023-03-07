import React from "react";

export default function ThumbDetail({title,image_url,population,region,capital}){
    return (
        <div className="container rounded-lg shadow-lg bg-white dark:bg-gray-700 dark:text-white pb-4">
            <img src={image_url}/ >
        </div>
    )
}