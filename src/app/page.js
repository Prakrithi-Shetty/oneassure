"use client";
import { useState } from 'react';
import CardList from "./components/CardList/CardList";
import dummyData from "./constants/sample.constants";
import Filters from "./components/Filters/Filters"
import FoodCart from './components/FoodCart/FoodCart';
export default function Home() {

  const [data, setData] = useState(dummyData);
  const[finalQuantity,setFinalQuantity]=useState({})

  const callBack = (item, checked) => {
    let result = null;
    if (checked) {
      result = dummyData.filter(it => it.tags.includes(item));
    } else {
      result = dummyData.filter(it => !it.tags.includes(item));
    }
    setData(result);
  }

  const callBackCart=(finalQuantityNew)=>{
    setFinalQuantity({...finalQuantityNew,...finalQuantity})
  }

  return (
    <>
      <div>
        <FoodCart finalQuantity={finalQuantity}/>
      </div>
      <div className="flex flex-row " style={{ background: "white" ,height:"100vh",width:"100vw"}}>
        <Filters onClickFilter={callBack} />
        <div style={{ border: "1px solid lightgrey", marginLeft: 20, marginRight: 20 }}></div>
        <div >
          <div className="container mx-auto p-4" >
            <CardList data={data} callBackCart={callBackCart}  finalQuantity={finalQuantity}/>
          </div>
        </div>
      </div>
    </>
  )
}
