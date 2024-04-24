import React, { useState, useEffect } from 'react';
import '../App.css';
import Slider from '../Components/Slider';
import ImageSlider from '../Components/ImageSlider';
import Footer from '../Components/Footer';

import Banner  from '../Assets/banners1.jpg';
import Banner2 from '../Assets/banners2.jpg';
import Banner3 from '../Assets/banners3.jpg';
import Banner4 from '../Assets/banners4.jpg'; 
import Banner5 from '../Assets/banners5.jpg'; 
import Banner6 from '../Assets/banners6.jpg'; 
import Banner7 from '../Assets/banners7.jpg'; 
import Samsung from '../Assets/samsung_zfold.png'


const slides = [
    {
      image: Banner5,
      title: 'Trending ',
      text: ['Text 1', 'Text 2', 'Text 3', 'Text 4'],
    },
    {
        image: Banner6,
        title: 'Trending ',
        text: ['Text 1', 'Text 2', 'Text 3', 'Text 4'],
      },
      {
        image: Banner7,
        title: 'Trending ',
        text: ['Text 1', 'Text 2', 'Text 3', 'Text 4'],
      },
    // Add more slides here
  ];


const images = [
  Banner,
  Banner2,
  Banner3,
  Banner4
];

const images2 = [
    Banner5,
    Banner6,
    Banner6
  ];

function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getApiData();
  }, []);

  const getApiData = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/admin/getadmin');
      if (response.ok) {
        const data = await response.json();
        setProducts(data.message);
      } else {
        console.error('Error fetching product data:', response.status);
      }
    } catch (error) {
      console.error('Error fetching product data:', error);
    }
  };

  return (
    
    <div className='Home_page'>
      <Slider images={images} />
      <h1 className='Title1'>Trending Products</h1>
      <div className='product_image_container'>
      {products.map((product) => (
        <div key={product.product_id}>
          <div className='product_bigbox'>
            <div className='product_bigboxcontainer'>
              <div className='image-wrapper'>
                <img
                  className='product_bigimagesize'
                  src={Samsung}
                  alt={product.product_name}
                />
                <button className='button'>{product.product_prize}</button>
              </div>
              <text className='product_text'>{product.product_name}</text>
            </div>
          </div>
        </div>
      ))}
      </div>
      <Slider images={images2}/>
      
    </div>
    
    
  );
}

export default Home;