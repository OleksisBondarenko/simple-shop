import "./style.scss"
import { Component } from "react";

import ProductCard from "../../Components/ProductCard";
import Title from "../../Components/Title";
import CartCard from "../../Components/CartCard";

export class CartBag extends Component {
    render() {
        return (
            <>
                <div className="cart-bag">
                    <Title >Cart</Title>


                    <div className="home__content-wrapper">
                        {
                            [1,2,3,4,5,6,7] .map(card => {
                                return <>
                                <span></span>
                                    {/* <CartCard key={card}/>*/}
                                     </> 
                                
                            })
                        }
                    </div>
                </div>
            </>
        );
    }
}

export default CartBag;