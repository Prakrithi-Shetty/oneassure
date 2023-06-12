import React from "react";
import Card from '../Card/Card'
import NoResultsFound from "../NoResultsFound/NoResultsFound";

const CardList = ({ data, callBackCart, finalQuantity }) => {
    return (
        <>
            {!data.length ? <NoResultsFound /> : <div className="grid grid-cols-1 md:grid-cols-3 gap-4"> {data.map((item, index) => (
                <Card index={index} {...item} callBackCart={callBackCart} finalQuantity={finalQuantity} />
            ))}</div>}
        </>
    );
};

export default CardList;