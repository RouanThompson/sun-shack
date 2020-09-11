import React from 'react'
import { Container } from 'semantic-ui-react'

class Order extends React.Component{

    state = {
        quantity: 1
    }

    handlePlus = () =>{
        let sum = this.state.quantity + 1
        this.setState({
            quantity: sum
        })
    }
    render(){
        console.log("Order: ", this.props.quantity)
        return(
            <Container>
                <div>
                    <div>
                        <div style={{display: "flex", alignItems: "center"}}>
                            <div style={{color: "#333", marginLeft: .5}}>
                                {this.props.name}
                            </div>
                            <div style={{color: "gray", marginLeft: 10}}>
                                {this.props.brand}
                            </div>
                            <button style={{color: "silver", marginLeft: 20}} onClick={this.handleMinus}>
                                -
                            </button>
                            <div style={{color: "blue", marginLeft: 5}}>
                                {this.state.quantity}
                            </div>
                            <button style={{color: "silver", marginLeft: 5}} onClick={this.handlePlus}>
                                +
                            </button>
                            <div style={{color: "green", marginLeft: 50}}>
                                {this.props.price}
                            </div>
                        </div>
                    </div>
                </div>
                {/* {this.props.name} by {this.props.brand}
                </table>
                {this.props.price} */}

            </Container>
        )
    }
}

export default Order