import React from 'react'
import './Board.css';
import { Row, Col, Container } from 'react-bootstrap';
import human1 from './human1.jpg'
import human2 from './human2.jpg'
import human3 from './human3.jpg'

const BoardIV = () => {
    return (
        <div className='board bgColor board3'>
            <div className='board bgColor board3'>
                <Container>
                    <Row>
                        <Row>
                            <Col>
                                <p className='wwoP'>BEFORE AND AFTER</p>
                            </Col>
                        </Row>
                        <Row>
                            <Col className='cGym3'>
                                <img className='gym3' src={human1} alt="" />
                            </Col>
                            <Col className='cGym3'>
                                <img className='gym3' src={human2} alt="" />
                            </Col>
                            <Col className='cGym3'>
                                <img className='gym3' src={human3} alt="" />
                            </Col>
                        </Row>
                    </Row>
                </Container>
            </div>
        </div>
    )
}

export default BoardIV