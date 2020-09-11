import React from 'react'

class ItemCard extends React.Component{

    handleAdd = () => {
        const {addToBagList} = this.props
        console.log("I was clicked")
        console.log("my id:", this.props.id)
        console.log("my id:", this.props.name)



        let addItem = {
            id: this.props.id,
            name: this.props.name,
            brand: this.props.brand,
            price: this.props.price,
        }

        addToBagList(addItem)
        
    }

    render(){
        return(
                <div className="card">
                    <div className="image">
                        <img src="" alt=""></img>
                    </div>
                    <div className="content">
                        <div className="header">{this.props.name}</div>
                        <div className="meta">
                            <p>by {this.props.brand}</p>
                            <p>SPF {this.props.spf}</p>
                            <p>PA {this.props.pa}</p>
                        </div>
                        <div className="description">
                            Matthew is an interior designer living in New York.
                        </div>
                    </div>
                    <div className="extra content">
                        <div className="ui labeled button">
                            <div className="ui pink button">
                                <i className="heart yellow icon"></i> Like
                            </div>
                            <div className="ui basic pink left pointing label">
                                {this.props.likes}
                            </div>
                        </div>
                        <span>
                            <i className="dollar sign green icon" style={{textAlign: "right"}} ></i> 
                            {this.props.price}
                        </span>
                        <div className="ui vertical animated button" onClick={this.handleAdd}>
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