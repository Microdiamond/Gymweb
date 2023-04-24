import React from 'react'
import logo from '../gymboard.png'
import './Board.css';

const Board = () => {
  const shoot = () =>{
    window.location.href='http://google.com';
  }
  return (
    <div className='board'>
      <div className='Bimg'>
        <img className='board' src={logo} alt="" />
        <div className='BybText'>
          <span className='t1'>BE YOUR </span>
          <span className='t2'>BEST</span>
          <br />
            <button className='JTDButton'onClick={shoot}>Join To Day</button>
        </div>
      </div>
    </div>
  )
}

export default Board