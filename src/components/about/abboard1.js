import React from 'react'
import './about.css';
import { Row, Col } from 'react-bootstrap';
import abimg1 from './abimg1.jpg'

const abboard1 = () => {
    return (
        <div className='about bgColor'>
            <Row>
                <Col className='aboutOne'>
                    <img className='abimg1' src={abimg1} alt="" />
                </Col>
                <Col className='aboutOne flCol'>
                    <p className='aboutUs'>ABOUT US</p>
                    <span className='spAbUs'>Welcome to our gym, where fitness meets community and excellence. Our gym is dedicated to providing a welcoming and inclusive environment where individuals can work towards achieving their fitness goals.</span>
                </Col>
            </Row>
        </div>
    )
}

export default abboard1