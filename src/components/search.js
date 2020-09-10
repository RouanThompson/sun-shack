import React from 'react'

function Search(props) {

    let handleType = (evt) => {
        props.changeSearchTerm(evt.target.value)
    }
        return(
            <div>
                <div className="ui search">
                    <div className="ui icon input">
                        <input
                            className="prompt"
                            type="text"
                            placeholder="..."
                            value={props.searchTerm}
                            onChange={handleType}/>
                        <i className="search icon"></i>
                    </div>
                    <div className="results"></div>
                </div>
            </div>
        )
}

export default Search