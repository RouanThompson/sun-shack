import React from 'react'
import { Container } from 'semantic-ui-react'
import ItemsCollection from './ItemsCollection'

class HomePage extends React.Component {
    render(){
        return (
          <Container>
              <h1>Sun Shack </h1>
              <br />
              <ItemsCollection />
          </Container>
        )
    }
}

export default HomePage