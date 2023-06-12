"use client";

import { useState, useEffect } from 'react';



const Cart = ({ index, finalQuantity, callBackCart }) => {
    const [quantity, setQuantity] = useState(0);
    const [isAdded, setIsAdded] = useState(false);
    const [decrement, setDecrement] = useState(false);


    useEffect(() => {
        setIsAdded(false);
    }, [quantity]);

    useEffect(() => {
        handleAddToCart()
    }, [quantity]);


    const handleIncrement = () => {
        setQuantity(quantity + 1);
    };

    const handleDecrement = () => {
        if (quantity > 0) {
            setQuantity(quantity - 1);
        }
    };


    const handleAddToCart = () => {
        let finalQuantityObj = finalQuantity;
        finalQuantityObj[index] = quantity;
        callBackCart(finalQuantityObj)
    };



    return (
        <div className="pt-8" index={index}>

            <div style={{ display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "center" }}>
                <button
                    disabled={quantity === 0 && !isAdded}
                    style={{
                        backgroundColor: 'black',
                        color: 'white',
                        border: 'none',
                        padding: '10px',
                        borderRadius: '4px',
                        marginTop: '10px',
                        display: 'block',
                        cursor: quantity === 0 && !isAdded ? 'not-allowed' : 'pointer',
                    }}
                >
                    Click + or - to add to Cart
                </button>
                <div>
                    <button
                        onClick={handleDecrement}
                        style={{
                            backgroundColor: 'transparent',
                            color: 'black',
                            border: 'none',
                            padding: '5px 10px',
                            marginRight: '5px',
                            cursor: 'pointer',
                        }}
                    >
                        -
                    </button>
                    <input
                        type="number"
                        value={quantity}
                        readOnly
                        style={{
                            color: 'black',
                            textAlign: 'center',
                            width: '50px',
                            border: '1px solid black',
                            borderRadius: '4px',
                        }}
                    />
                    <button
                        onClick={handleIncrement}
                        style={{
                            backgroundColor: 'transparent',
                            color: 'black',
                            border: 'none',
                            padding: '5px 10px',
                            marginLeft: '5px',
                            cursor: 'pointer',
                        }}
                    >
                        +
                    </button>
                </div>

            </div>


        </div>
    );
};

export default Cart;
