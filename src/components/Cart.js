import React from 'react'

class Cart extends React.Component{
    render(){
        return(
            <div className="ui vertical animated button" style={{backgroundColor: "pink"}}>
                <div className="hidden content">Shop</div>
                <div className="visible content">
                    <i className="shop icon"></i>
                </div>
            </div>
        )
    }
}

export default Cart