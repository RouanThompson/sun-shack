import React from 'react'
import { Container } from 'semantic-ui-react'
import ItemCollection from './ItemCollection'
import Search from './search'
import BagIcon from './BagIcon'

class HomePage extends React.Component {

    state = {
        sunscreens: [],
        searchTerm: "",
        bagList: [],
        total: 0,
        quantity: 1
    }

    changeSearchTerm = termFromChild => {
        this.setState({
            searchTerm: termFromChild
        })
    }

    updateTotal = (price, quantity) => {
        const updatedTotal = (price * quantity) + this.state.total
        console.log("total", this.state.total)
        this.setState({
            total: updatedTotal
        })

    }

    addToBagList = (newItem) => {

        // returns a new array with the new item and items within bag list
        const updatedBagList =  [newItem, ...this.state.bagList]

        // const sum = price * quantity
        const updatedTotal = newItem.price + this.state.total

        // updates state to that of the new value and triggers a render
        this.setState({
            bagList: updatedBagList,
            total: updatedTotal
        })
    }

    filteredArray = () => {
        let filteredArray = this.state.sunscreens.filter(sunscreen => {
            return (
                sunscreen.name.toLowerCase().includes(this.state.searchTerm.toLowerCase())
                ||
                sunscreen.spf.includes(this.state.searchTerm)
                ||
                sunscreen.pa.includes(this.state.searchTerm)
            )
        })
        return filteredArray
    }
 
    componentDidMount() {
        fetch("http://localhost:3000/sunscreens")
        .then(resp => resp.json())
        .then(sunscreenObj => this.setState({
            sunscreens: sunscreenObj
        }))
    }

    render(){
        const {searchTerm, bagList, total, quantity} = this.state
        // console.log(bagList)
        return (
          <Container>
              <h1>Sun Shack</h1>
              <Search searchTerm={searchTerm} changeSearchTerm={this.changeSearchTerm}/>
              <BagIcon bagList={bagList} total={total} quantity={quantity} updateTotal={this.updateTotal}/>
              <ItemCollection sunscreens={this.filteredArray()} bagList={bagList} addToBagList={this.addToBagList} total={total}/>
          </Container>
        )
    }
}

export default HomePage