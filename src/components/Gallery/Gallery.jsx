import React from "react";
import Carousel from "../Carousel/Carousel";

const data = [
  {
    image:
      "https://hips.hearstapps.com/hmg-prod/images/wedding-wishes-1645634516.jpg?crop=1.00xw:0.751xh;0,0&resize=1200:*",
    text: "",
  },
  {
    image:
      "https://www.thestatesman.com/wp-content/uploads/2020/02/QT-O4-9.jpg",
    text: "",
  },
  {
    image:
      "https://images.travelandleisureasia.com/wp-content/uploads/sites/2/2020/11/Inside-image-Wedding-Photographers6.jpg",
    text: "",
  },
  {
    image:
      "https://josephkingphotography.in/wp-content/uploads/2022/08/Best-wedding-Photographer-Indore-Joseph-King-Photography3.jpg",
    text: "",
  },
  {
    image:
      "https://arjunkarthaphotography.com/wp-content/uploads/2016/11/online-wedding-photography-course-cover-1.jpg",
    text: "",
  },
];

const Gallery = () => {
  return (
    <div className="bg-[#171717] flex flex-col justify-center items-center w-full">
      <h1 className='w-full flex justify-center items-center mx-auto  mb-[-70px] mt-[10px]'>
        <h1 className="text-[#EDD3A4] text-[36px]  font-[600] font-[Manrope] " >Gallery</h1>
      </h1>

      <Carousel data={data} />
    </div>
  );
};

export default Gallery;
