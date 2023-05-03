import React from 'react';
import { useState } from 'react';

const Section =() =>{
   var img = document.getElementsByClassName('section-img');
   var [name, setName] = useState('lamborghini');
   var fun =() =>{
    setName('audi');
   }

    return(
        <div className='section container'>
            <h2>{name}</h2>
            <div><button onClick={fun} className='btn'>Click Me</button></div>
            <div className='carimg'><img className='section-img' src={require('./cars.jpg')}></img></div>
        </div>
    )
}
export default Section;