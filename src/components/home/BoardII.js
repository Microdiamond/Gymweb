/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import './Board.css';
import { Row, Col, Container } from 'react-bootstrap';
import gym1 from './gym1.jpeg'
import gym2 from './gym2.jpg'

const BoardII = () => {
    const LearnMore = () => {
        window.location.href = '#'
    }
    return (
        <div className='board bgColor'>
            <Container fluid>
                <Row>
                    <Col className='colB2_1'>
                        <Row className='rowAOF'>
                            <p className='Aof'>ABOUT OUR FIT FAMILY</p>
                            <p className='story'>Astraeus was founded in 2001 by a husband and wife team,
                                Bobby and Dora Graff. Since then, we have expanded to over 115 locations
                                nationwide!
                            </p>
                            <a className='LM' href="#" onClick={LearnMore}>Learn more</a>
                        </Row>
                    </Col>
                    <Col className='colB2_1'>
                        <Row className='rowB2Pic'>
                            <Col>
                                <img className='gym1' src={gym1} alt="" />
                            </Col>
                            <Col className='cGym2'>
                                <img className='gym2' src={gym2} alt="" />
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default BoardII