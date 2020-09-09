import React from 'react'

class ItemCard extends React.Component{

    render(){
        // let suncreen = this.props.sunscreens
        // console.log(this.props.sunscreens)
        return(
                <div className="card">
                    <div className="image">
                        <img src="" alt=""></img>
                    </div>
                    <div className="content">
                        <div className="header">{this.props.name}</div>
                        <div className="meta">
                            <p>SPF {this.props.spf} </p>
                        </div>
                        <div className="description">
                            Matthew is an interior designer living in New York.
                        </div>
                    </div>
                    <div className="extra content">
                        <span className="center floated">
                            <div className="extra">
                                Rating:
                                <div className="ui star rating" data-rating="3"></div>
                            </div>
                        </span>
                        <span>
                            <i className="heart icon"></i>
                            75 Likes
                        </span>
                    </div>
                </div>




            // <div className="ui">
            //     <div className="content">
            //         {/* image here */}
            //         <div className="content">
            //             <p>{this.props.name}</p>
                        
            //             <span className="right floated">
            //             <i className="heart outline like icon"></i>
            //             17 likes
            //             </span>
            //         </div>
            //         <div className="extra content">
            //             <div className="ui large transparent left icon input">
            //                 <i className="heart outline icon"></i>
            //                 <input type="text" placeholder="Add Comment..."></input>
            //                 {/* <i class="heart outline icon"></i>
            //                 <input type="text" placeholder="Add Comment..."> */}
            //             </div>
            //         </div>
            //     </div>
            // </div>
        )
    }
}

export default ItemCard

