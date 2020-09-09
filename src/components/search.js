import React from 'react'

class Search extends React.Component{
    render(){
        return(
            <div className>
                <div className="ui search">
                    <div className="ui icon input">
                        <input className="prompt" type="text" placeholder="..."></input>
                        <i className="search icon"></i>
                    </div>
                    <div className="results"></div>
                </div>
            </div>
        )
    }
}

export default Search