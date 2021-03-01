import React from 'react';
import CardItem from './CardItem';
import './Cards.css'

function Cards() {
    return (
        <div className='cards'>
            <h1>
                Check out EPIC Destinations!
            </h1>
            <div className='cards__container'>
                <div className='cards__wrapper'>
                  <ul className='cards__items'>
                      <CardItem  
                      src='images/img-9.jpg'
                      text='Explore the hidden waterfall deep
                       inside the Amazon Jungle'
                      label='Adventure'
                      path='/services' 
                       />
                       <CardItem  
                      src='images/img-2.jpg'
                      text='Travel through the Islands of Bali i a Private Cruise'
                      label='Luxury'
                      path='/services' 
                       />
                  </ul>
                  <ul className='cards__items'>
                      <CardItem  
                      src='images/img-3.jpg'
                      text='Set Sail in Atlantic Ocean visiting Uncharted Waters'
                      label='Mystery'
                      path='/services' 
                       />
                       <CardItem  
                      src='images/img-4.jpg'
                      text='Experience Football on Top of Himilayan Mountains'
                      label='Adventure'
                      path='/Products' 
                       />
                       <CardItem  
                      src='images/img-8.jpg'
                      text='Ride Through the Sahara Desert on a guided camel tour'
                      label='Adrenaline'
                      path='/Sign up' 
                       />
                  </ul>
                </div>
            </div>
        </div>
    )
}

export default Cards
