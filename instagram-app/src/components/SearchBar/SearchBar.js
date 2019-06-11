import React, { Component } from 'react'
import './search.css';

class SearchBar extends Component {
    render() {
        return (
            <div className="search">
                <div>
                    <span><i className="fab fa-instagram"/></span>
                    <span className="line">|</span>
                    <span className="instagram">Instagram</span>
                </div>
                <input
                className="search-input"
                    placeholder="&#x1F50D; Search"
                />
                <div>
                    <span className="ig-icons"><i className="far fa-compass" /></span>
                    <span className="ig-icons"><i className="far fa-heart" /></span>
                    <span className="user"><i className="far fa-user"/></span>
                </div>
            </div>
        )
    }
}

export default SearchBar;