import './App.css';
import editImage from './img/edit.svg'
import deleteImage from './img/delete.svg'

function App() {
  return (
    <div className="App">
      <div className="wishlist-title">
        <h1>My Wishlist</h1>
      </div>
      <div className="wish-area">
        <div>
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
    </div>
  );
}

export default App;
