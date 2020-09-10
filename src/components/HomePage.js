import React from 'react'
import { Container } from 'semantic-ui-react'
import ItemCollection from './ItemCollection'
import Search from './search'
import BagIcon from './BagIcon'

class HomePage extends React.Component {

    state = {
        sunscreens: [],
        searchTerm: "",
        bagList: []
    }

    changeSearchTerm = termFromChild => {
        this.setState({
            searchTerm: termFromChild
        })
    }

    addToBagList = newItem => {

        // returns a new array with the new item and items within bag list
        const updatedBagList =  [newItem, ...this.state.bagList]

        // updates BagList state to that of the new array and triggers a render
        this.setState({
            bagList: updatedBagList
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
        const {searchTerm, bagList} = this.state
        return (
          <Container>
              <h1>Sun Shack</h1>
              <Search searchTerm={searchTerm} changeSearchTerm={this.changeSearchTerm}/>
              <BagIcon bagList={bagList}/>
              <ItemCollection sunscreens={this.filteredArray()} bagList={bagList} addToBagList={this.addToBagList}/>
          </Container>
        )
    }
}

export default HomePage