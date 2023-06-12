import React from "react";
import Image from "next/image";
import AddToCart from "../AddToCart/AddToCart";

const Card = ({ deliveryTime, title, isPopular, isSuperFast, image, index, callBackCart, finalQuantity }) => {
    return (
        <div className="bg-white rounded-lg shadow-md p-4">
            <div className="relative mb-4" style={{ height: 300 }}>
                <Image src={image} alt={title} layout="fill" objectFit="cover" className="rounded-lg" style={{ borderRadius: 0 }} />
            </div>
            <h3 className="text-xl font-semibold" style={{ color: "black", paddingBottom: 8 }}>{title}</h3>
            <p className="text-gray-500 mb-2">Delivery Time: {deliveryTime}</p>
            {isPopular && <span className="bg-green-500 text-white px-2 py-1 rounded-full text-sm mr-2">Popular</span>}
            {isSuperFast && <span className="bg-blue-500 text-white px-2 py-1 rounded-full text-sm">Super Fast</span>}
            <AddToCart index={index} callBackCart={callBackCart} finalQuantity={finalQuantity} />
        </div>
    );
};

export default Card;
