import "./style.scss"
import { Component } from "react";

import ProductCard from "../../Components/ProductCard";
import Title from "../../Components/Title";
export class Home extends Component {
    render() {
        return (
            <>
                <div className="home">
                    {/* <div className="home__title">
                        Category name
                    </div> */}
                <Title > Category name</Title>
                    
                
                    <div className="home__content-wrapper">
                        {
                            [1,2,3,4,5,6,7] .map(card => {
                                return <ProductCard key={card} isAvailable={true} />
                            })
                        }
                    </div>
                </div>
            </>
        );
    }
}

export default Home;
