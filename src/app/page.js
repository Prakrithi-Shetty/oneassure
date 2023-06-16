"use client";
import { useState } from 'react';
import CardList from "./components/CardList/CardList";
import dummyData from "./constants/sample.constants";
import Filters from "./components/Filters/Filters"
import FoodCart from './components/FoodCart/FoodCart';


export default function Home() {

  const [data, setData] = useState(dummyData);
  const [filterList, setFilterList] = useState([]);
  const [finalQuantity, setFinalQuantity] = useState({})

   const callBack = (selectedFilters) => {

      let filteredData = dummyData;

      // Filter by Season
      if (selectedFilters.season.length > 0) {
        filteredData = filteredData.filter((item) => {
          return selectedFilters.season.some((season) =>
            item.tags.includes(season)
          );
        });
      }
    
      // Filter by Dietary Preferences
      if (selectedFilters.dietaryPreferences.length > 0) {
        filteredData = filteredData.filter((item) => {
          return selectedFilters.dietaryPreferences.some((preference) =>
            item.tags.includes(preference)
          );
        });
      }

       // Filter by meal
       if (selectedFilters.meal.length > 0) {
        filteredData = filteredData.filter((item) => {
          return selectedFilters.dietaryPreferences.some((preference) =>
            item.tags.includes(preference)
          );
        });
      }
    
      setData(filteredData);

    }

  const callBackCart = (finalQuantityNew) => {
    setFinalQuantity({ ...finalQuantityNew, ...finalQuantity })
  }

  

  return (
    <>
      <div>
        <FoodCart finalQuantity={finalQuantity} />
      </div>
      <div className="flex flex-row " style={{ background: "white", height: "100vh", width: "100vw" }}>
        <Filters onClickFilter={callBack} />
        <div style={{ border: "1px solid lightgrey", marginLeft: 20, marginRight: 20 }}></div>
        <div >
          <div className="container mx-auto p-4" >
            <CardList data={data} callBackCart={callBackCart} finalQuantity={finalQuantity} />
          </div>
        </div>
      </div>
    </>
  )
}
