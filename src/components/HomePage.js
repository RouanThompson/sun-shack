import React from 'react'
import { Container } from 'semantic-ui-react'
import ItemCollection from './ItemCollection'
import sunscreenData from '../data/sunscreen.json'
import Search from './search'
import Cart from './Cart'

class HomePage extends React.Component {


    render(){
        // let sunscreenAr = sunscreenData.sunscreens
        // console.log(sunscreenArr)
        return (
          <Container>
              <h1>Sun Shack</h1>
              <row><Search /> <Cart /></row>
              
              <br />
              <ItemCollection sunscreens={sunscreenData.sunscreens}/>
          </Container>
        )
    }
}

export default HomePage