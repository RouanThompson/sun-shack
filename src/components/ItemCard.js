import React from 'react'

class ItemCard extends React.Component{

    state = {
        likes: this.props.likes
    }

    handleAdd = () => {
        const {addToBagList} = this.props
        console.log("I was clicked")
        console.log("my id:", this.props.id)
        console.log("my id:", this.props.name)

        let addItem = {
            id: this.props.id,
            name: this.props.name,
            brand: this.props.brand,
            price: this.props.price
        }

        addToBagList(addItem)
    }


    handleHeart = () => {
        console.log("Heart clicked")
        console.log(this.props.likes)
        console.log(this.state.likes)

        let sum = this.state.likes + 1
        this.setState({
            likes: sum
        })
    }


    render(){
        return(
                <div className="card">
                    <div className="image">
                        <img src={this.props.image} alt=""></img>
                    </div>
                    <div className="content">
                        <div className="header">{this.props.name}</div>
                        <div className="meta">
                            <p>by {this.props.brand}</p>
                            <p>SPF {this.props.spf}</p>
                            <p>PA {this.props.pa}</p>
                        </div>
                        <div className="description">
                            {this.props.description}
                        </div>
                    </div>
                    <div className="extra content">
                        <div className="ui labeled button" >
                            <div className="ui pink button" onClick={this.handleHeart}>
                                <i className="heart yellow icon"></i> Likes
                            </div>
                            <div className="ui basic pink left pointing label">
                                {this.state.likes}
                            </div>
                        </div>
                        <span>
                            <i className="dollar sign green icon" style={{textAlign: "right", marginLeft: 0}} ></i> 
                            {this.props.price}
                        </span>
                        <div className="ui vertical animated button" style={{textAlign: "right", marginLeft: 3}} onClick={this.handleAdd}>
                            <div className="hidden content">Add</div>
                            <div className="visible content">
                                <i className="shopping basket icon"></i>
                            </div>
                        </div>
                    </div>
                </div>
        )
    }
}

export default ItemCard