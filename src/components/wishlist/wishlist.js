import React, { Component } from 'react'
import './wishlist.css'
import editImage from './img/edit.svg'
import deleteImage from './img/delete.svg'
import axios from 'axios'


// const Wishes = (props) => (
//     <div>{props.record.wish}</div>
//     )

    // constructor(props) {
    //     super(props)
    //     this.state = { 
    //         wishes: []
    //     }
    // }
    
    // componentDidMount() {
    //     axios.get('http://localhost:4000/app/wishes')
    //     .then((response) => {
    //         this.setState({ wishes: response.data })
    //     })
    //     .catch(function (error) {
    //     console.log(error)
    //     })
    // }

    // wish() {
    //     return this.state.wishes.map((data) => {
    //         return (
    //         <Wishes
    //             record={data}
    //             key={data._id}
    //         />
    //         )
    //     })
    //   }


class Wishlist extends Component {
    constructor(){
        super()
        this.state = {
            wish:'',  
        }
        this.newWish = this.newWish.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
    }

    newWish(event){
        this.setState({
            wish:event.target.value
        })
    }

    onSubmit(event){
        event.preventDefault()

    const registered = {
        wish: this.state.wish
        }
        axios.post('http://localhost:4000/app/newwish', registered)
        .then(response => console.log(response.data))
        
        window.location = '/'
    }
    

    render(){
    return (
        <div className="wish-area">
            <form onSubmit={this.onSubmit}>
                <div className="input-field">
                    <input 
                        className="text-box" 
                        type="text" 
                        placeholder="Type something..."
                        onChange={this.newWish} 
                        value={this.state.wish}/>
                </div>
                <div>
                    <input type="submit" className="button" value="Add Wish"/>
                </div>
            </form>
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