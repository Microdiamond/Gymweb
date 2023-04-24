import React from 'react'
import logo from '../BoardV.jpg'
import './Board.css';
import { Col } from 'react-bootstrap';

const BoardV = () => {
    return (
        <div className='board'>
            <div className='BimgV'>
                <img className='board' src={logo} alt="" />
                <div className='dBimgV'>
                    <Col>
                        <div className='titleBV'>ADDRESS</div>
                        <div className='detailBV'>THAILAND CHONBURI PATTAYA</div>
                    </Col>
                    <Col>
                        <div className='titleBV'>CONTRACT</div>
                        <div className='detailBV'>Email: Chatchai.nak1997@gmail.com</div>
                    </Col>
                    <Col>
                        <div className='titleBV'>REFERENCE</div>
                        <div className='detailBV'>CANVA CREATIVE STUDIO</div>
                    </Col>
                </div>
            </div>
        </div>
    )
}

export default BoardV