import React from 'react'
// import { Card } from 'semantic-ui-react'
import ItemCard from './ItemCard'
// import sunscreens from '../data/sunscreen.json'


class ItemCollection extends React.Component {

    renderCards = () => {
        return this.props.sunscreens.map(sunscreen => <ItemCard key={sunscreen.id} brand={sunscreen.brand} name={sunscreen.name} spf={sunscreen.spf} pa={sunscreen.pa} type={sunscreen.type} description={sunscreen.description} price={sunscreen.price} />)
    }

    render() {
        // console.log(this.props.sunscreens)
        return (
            // <ItemCard sunscreens={this.props.sunscreens}/>
            <div className="ui link cards">
                {this.renderCards()}
            </div>
        )
    }
}

export default ItemCollection