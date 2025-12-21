

import React from "react";



const ImageGallery = ({imageList=[]}) => {


    return (



        // <div>


        //     {
        //         imageList.map((item)=>(
        //             <img
        //             src={item.urls.small_s3}
        //             alt={item.alt_description}
        //             />
        //         ))


        //     }




        // </div>

    <div>
    {imageList.length > 0 &&
        imageList.map((img) => {
        return (
            <div key={img.id}>
            <img
                src={img.urls.regular}
                alt={img.alt_description}
            />
            </div>
        );
        })}
    </div> 


    );

};





export default ImageGallery;