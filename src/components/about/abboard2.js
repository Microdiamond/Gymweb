import React from 'react'
import './about.css';
import { Row, Col, Container } from 'react-bootstrap';
import dumbbell from './dumbbell.png'
import yoga from './yoga.png'
import boxing from './boxing.png'
import locker from './locker.png'
import changingroom from './changingroom.png'
import towel from './towel.png'
import shower from './shower.png'
import bathrobe from './bathrobe.png'
import cycling from './cycling.png'
import workout from './workout.png'
import treadmill from './treadmill.png'
import exercise from './exercise.png'

const abboard2 = () => {
    return (
        <div className='about bgColor'>
            <Container>
                <Row><p className='abStanAmenitie'>STANDARD AMENITIES</p></Row>
                <Row className='amenitiesRowII'>
                    <Col className='amenities'>
                        <img className='dumbbell1' src={changingroom} alt="" />
                        <span>CHANGING ROOM</span>
                    </Col>
                    <Col className='amenities'>
                        <img className='dumbbell1' src={locker} alt="" />
                        <span>LOCKERS</span>
                    </Col>
                    <Col className='amenities'>
                        <img className='dumbbell1' src={towel} alt="" />
                        <span>TOWEL SERVICE</span>
                    </Col>
                    <Col className='amenities'>
                        <img className='dumbbell1' src={bathrobe} alt="" />
                        <span>BATHROBE SERVICE</span>
                    </Col>
                </Row>
                <Row className='amenitiesRowII'>
                    <Col className='amenities'>
                        <img className='dumbbell1' src={shower} alt="" />
                        <span>BATH ROOMS</span>
                    </Col>
                    <Col className='amenities'>
                        <img className='dumbbell1' src={workout} alt="" />
                        <span>WORKOUT CLASSES</span>
                    </Col>
                    <Col className='amenities'>
                        <img className='dumbbell1' src={treadmill} alt="" />
                        <span>TREADMILL</span>
                    </Col>
                    <Col className='amenities'>
                        <img className='dumbbell1' src={exercise} alt="" />
                        <span>GROUP EXCERCISE</span>
                    </Col>
                </Row>
                <Row className='amenitiesRowII'>
                    <Col className='amenities'>
                        <img className='dumbbell1' src={dumbbell} alt="" />
                        <span>FREE WEIGHTS</span>
                    </Col>
                    <Col className='amenities'>
                        <img className='dumbbell1' src={yoga} alt="" />
                        <span>YOGA</span>
                    </Col>
                    <Col className='amenities'>
                        <img className='dumbbell1' src={boxing} alt="" />
                        <span>BOXING AREA</span>
                    </Col>
                    <Col className='amenities'>
                        <img className='dumbbell1' src={cycling} alt="" />
                        <span>CYCLING</span>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default abboard2