"use client";
import { useState } from 'react';
import CardList from "./components/CardList/CardList";
import dummyData from "./constants/sample.constants";
import Filters from "./components/Filters/Filters"
import FoodCart from './components/FoodCart/FoodCart';
export default function Home() {

  const [data, setData] = useState(dummyData);
  let listQ = dummyData.map(it => it.id);
  const [filterList, setFilterList] = useState([]);

  const [finalQuantity, setFinalQuantity] = useState({})

  const callBack = (item, checked) => {
    let result = null;
    const mySet = new Set([]);

    let list = checked ? [...filterList, item] : filterList.filter(it => it !== item);
    setFilterList([...list]);

    list.forEach(ik => {
      const listSet = dummyData.filter(ite => ite.tags.includes(ik));
      const dataSet = listSet.map((item) => item.id);
      dataSet.forEach(k => mySet.add(k));
    });

    result = dummyData.filter(it => mySet.has(it.id));
    if (mySet.size) {
      setData(result);
    } else {
      setData(dummyData);
    }
    setFinalQuantity(list);

  }

  const callBackCart = (finalQuantityNew) => {
    setFinalQuantity({ ...finalQuantityNew, ...finalQuantity })
  }

  console.log("🚀 ~ file: page.js:12 ~ Home ~ filterList:", filterList)

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
