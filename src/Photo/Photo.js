import React from "react";

import "./Photo.css";

const Photo = () => {
  return (
    <>
      <div className="pic">
        <h1 style={{ color: "red", marginLeft: "10px" }}>Photo Gallery :-</h1>
        <div className="first">
          <img
            src="https://images.unsplash.com/photo-1631049307264-da0ec9d70304?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aG90ZWwlMjByb29tfGVufDB8fDB8fA%3D%3D&w=1000&q=80"
            alt="load"
          />
          <img src="https://static.toiimg.com/photo/51090387.cms" alt="load" />
          <img
            src="https://static01.nyt.com/images/2019/03/24/travel/24trending-shophotels1/24trending-shophotels1-superJumbo.jpg"
            alt="load"
          />
          <img
            src="https://www.kohsamuibudgethotel.com/images/home/promotion-package.jpg"
            alt="load"
          />
        </div>
        <div className="second">
          <img
            src="https://img.traveltriangle.com/cms/attachments/pictures/1072405/original/Sheraton_Hotel_Bathroom.jpg?tr=w-606,h-400"
            alt="load"
          />
          <img
            src="https://foto.hrsstatic.com/fotos/0/3/545/350/80/000000/http%3A%2F%2Ffoto-origin.hrsstatic.com%2Ffoto%2F4%2F4%2F4%2F7%2F444789%2F444789_d_20512037.jpg/SVzdQ78cLcKmbnMBdnjj8A%3D%3D/3500,2329/6/Apaliving_das_Budgethotel-Basel-Badezimmer-1-444789.jpg"
            alt="load"
          />
        </div>
        <div className="third">
          <img
            src="https://cdn1.goibibo.com/voy_ing/t_g/07a78ff672fb11e7b7fa025f77df004f.jpg"
            alt="load"
          />
          <img
            src="https://pix10.agoda.net/hotelImages/259/25967323/25967323_210713011100103610503.jpg?s=1024x768"
            alt="load"
          />
        </div>
        <div className="forth">
          <img
            src="https://images.oyoroomscdn.com/uploads/hotel_image/55299/ce493cd7fb47c393.jpg"
            alt="load"
          />
          <img
            src="https://r1imghtlak.mmtcdn.com/2ae5512ed3ab11e58854daf4768ad8d9.png?&output-quality=75&output-format=jpg"
            alt="load"
          />
        </div>
      </div>
    </>
  );
};
export default Photo;
