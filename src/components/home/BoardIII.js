import React from 'react'
import './Board.css';
import { Row, Col, Container } from 'react-bootstrap';
import gym3 from './gym3.jpg'
import gym4 from './gym4.jfif'
import gym5 from './gym5.jpg'

const BoardIII = () => {
    return (
        <div className='board bgColor board3'>
            <Container>
                <Row>
                    <Row>
                        <Col>
                            <p className='wwoP'>WHAT WE OFFER</p>
                            <p className='detailP'>We're committed to bringing you the best workout experience.</p>
                        </Col>
                    </Row>
                    <Row>
                        <Col className='cGym3'>
                            <img className='gym3' src={gym3} alt="" />
                            <div>TOUR OUR GYM</div>
                        </Col>
                        <Col className='cGym3'>
                            <img className='gym3' src={gym4} alt="" />
                            <div>CHECK OUT OUR GROUP CLASSES</div>
                        </Col>
                        <Col className='cGym3'>
                            <img className='gym3' src={gym5} alt="" />
                            <div>ASK ABOUT PERSONAL TRAINING</div>
                        </Col>
                    </Row>
                </Row>
            </Container>
        </div>
    )
}

export default BoardIII