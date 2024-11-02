/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import Menu from "./Menu";
import Categories from "./Categories";
import Title from "./Title";
import items from "./data";

import MenuCube from "./MenuCube";
import "swiper/css";
import "swiper/css/effect-cube";
import "swiper/css/pagination";
import "swiper/css/navigation";



const tempCategories = items.map((item) => item.category);
console.log('tempCategories: ', tempCategories);
// ['breakfast', 'lunch', 'shakes', 'breakfast', 'lunch', 'shakes', 'breakfast', 'lunch', 'shakes']
const tempSet = new Set(tempCategories);
console.log('tempSet: ', tempSet);
// {'breakfast', 'lunch', 'shakes'}
const tempItems = ['all', ...tempSet];
console.log('tempItems: ', tempItems);
// ['all', 'breakfast', 'lunch', 'shakes']


// Obiekt Set jest w zasadzie kolekcją o unikalnych wartościach.
const allCategories = ["all", ...new Set(items.map((item) => item.category))];
console.log("allCategories.length: ", allCategories.length);
// ['all', 'breakfast', 'lunch', 'shakes']

let myArray = Array.from(allCategories);
console.log(myArray);

const App = () => {
  const [menuItems, setMenuItems] = useState(items);
  const [categories, setCategories] = useState(allCategories);
  const [view, setView] = useState(null)

  // login
  const listGallery = () => {
    // normally connect to db or api
    setView('cube gallery');
  };

// logout  
  const cubeGallery = () => {
    setView(null);
  };  

  const filterItems = (category) => {
    if (category === 'all') {
      setMenuItems(items);
      return;
    }
    // newItems są równe oryginalnym items, jeżeli item.category odpowiada category wtedy return
    const newItems = items.filter((item) => item.category === category);
    // przekazujemy newItems
    setMenuItems(newItems);
  };  

  return (
    <main>
      <section>
        <Title text="our menu" />
        <Categories categories={categories} filterItems={filterItems} />
        
        {view ? (
          <div className='elements-view'>
            <div className='btn-container'>
          <button className='btn-gallery' onClick={cubeGallery}>
            cube gallery
          </button>
          </div>
          <Menu items={menuItems} />
          </div>
          ) : (          
          <div className='elements-view'>
            <div className='btn-container'>
          <button className='btn-gallery' onClick={listGallery}>
            list gallery
          </button>
          </div>
          <MenuCube items={menuItems} />
          </div>)}
       
        {/* <div className='title-underline'></div> */}
        {/* <Menu items={menuItems} /> */}
        {/* <MenuCube items={menuItems} /> */}
      </section>
    </main>
  );
};
export default App;

