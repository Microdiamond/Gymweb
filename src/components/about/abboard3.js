import React from 'react'
import './about.css';
import { Col, Container, Row } from 'react-bootstrap'
import abimg2 from "./abimg2.jpg";
import abimg3 from "./abimg3.jpg";
import abimg4 from "./abimg4.jpg";
import abimg5 from "./abimg5.jpg";

const abboard3 = () => {
    return (
        <div className='about bgColor'>
            <Row className='ab3ImgRow'>
                <Col className='abimg2ColTop'>
                    <img className='abimg2' src={abimg2} alt="" />
                </Col>
                <Col className='abimg2ColBot'>
                    <img className='abimg3' src={abimg3} alt="" />
                </Col>
                <Col className='abimg2ColTop'>
                    <img className='abimg4' src={abimg4} alt="" />
                </Col>
                <Col className='abimg2ColBot'>
                    <img className='abimg5' src={abimg5} alt="" />
                </Col>
            </Row>
        </div>
    )
}

export default abboard3