import React, { Component } from 'react'
import './search.css';

class SearchBar extends Component {
    render() {
        return (
            <div className="search">
                <p>
                    <i class="fab fa-instagram"></i>
                    <span>|</span>
                    <span>Instagram</span>
                </p>
                <input/>
                <p>
                    <i class="far fa-compass"></i>
                    <i class="far fa-heart"></i>
                    <i class="far fa-user"></i>
                </p>
            </div>
        )
    }
}

export default SearchBar;