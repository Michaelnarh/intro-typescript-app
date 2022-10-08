import React, { useState } from 'react';
import './App.css';
import { profileProps } from './TypeRef';
import AddToCard from './AddToCard';



function App() {
  const [profile, setProfile] = useState<profileProps["person"]>([{
    name: "michael",
    img: 'https://miro.medium.com/max/900/1*gkU6sO05pIuPYNgHaaTOxQ.jpeg',
    note: "Checking the typescript work",
    speciality: ['java', 'javascript', 'php', 'random'],
    caption: ' Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, illum saepe praesentium voluptatibus quisquam animi deleniti quae vitae optio aperiam nisi modi aliquid!'
  }])
  return (
    <div className="App">
      <div className="container">
          {profile.length > 0 && profile.map((person,index) => (
        <div className="card" key={index}>
            <div>
              <div className='profile-and-name'>

                <h5>{person.name}</h5>
                <img src={person.img} alt='...' className='img-size' width={50} height={50} />
              </div>
              <p>{person.caption}</p>
            </div>
        </div>
          ))}
      </div>
      <AddToCard people={profile} setArrProfile={setProfile} />
    </div>
  );
}

export default App;
