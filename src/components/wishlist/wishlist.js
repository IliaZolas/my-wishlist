import React, { Component } from 'react'
import './wishlist.css'
import editImage from './img/edit.svg'
import deleteImage from './img/delete.svg'


class Wishlist extends Component {

    render(){
    return (
        <div className="wish-area">
            <div className="input-field">
                <input className="text-box" type="text" placeholder="Type something..."/>
            </div>
            <div className="wish-list">
                <div className="wish-card">
                <div className="card-text">
                    <h2>My wish item here</h2>
                </div>
                <div className="wish-icons">
                    <div>
                        <img src={editImage} className="card-icons" alt="edit" />
                    </div>
                    <div>
                        <img src={deleteImage} className="card-icons" alt="edit" />
                    </div>
                </div>
                </div>
            </div>
        </div>
    )
}
}

export default Wishlist