import React, { useEffect } from 'react';
import './tempStyles.scss';
import $ from 'jquery';

const TempApp = () => {

  // useEffect(()=> {
  //   $('#contact').addClass('is-animating');
  // },[]);
  return (
    <>
      <div className='is-animating'>
        <h1 className='mainTitle'>Massage JH</h1>
        <div className='circle'>
          <h1 className='title'>Coming Soon!!</h1>
        </div>
        <hr/>
        <div id='contact'>
          <p className='contactTitle'>Contact: </p>
          <a className='email' href="mailto:mkmorgan1994@gmail.com">Email</a>
          <a className='phone' href="tel:208-709-5531">Phone</a>
        </div>
      </div>
    </>
  );
}

export default TempApp;