import React from 'react'
import ItemCard from './ItemCard'

class ItemCollection extends React.Component {

    renderCards = () => {
        const {sunscreens, bagList, addToBagList} = this.props
        return sunscreens.map(sunscreen => <ItemCard key={sunscreen.id} brand={sunscreen.brand} name={sunscreen.name} spf={sunscreen.spf} pa={sunscreen.pa} type={sunscreen.type} description={sunscreen.description} price={sunscreen.price} likes={sunscreen.likes} bagList={bagList} addToBagList={addToBagList}/>)
    }

    render() {
        // console.log(this.props.bagList)
        return (
            <div className="ui link cards">
                {this.renderCards()}
            </div>
        )
        
    }
}

export default ItemCollection