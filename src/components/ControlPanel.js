import React from 'react'
import { Button, Row, Col, Container } from 'react-bootstrap'
import { useForm } from '../hooks/useForm'
import RangeSlider from 'react-bootstrap-range-slider';


export default function ControlPanel({ genRandArray, speed, setSpeed, bubbleSort, stop, setStop }) {

    return (
        <Container>
            <Row>
                <Col xs="2"><Button variant="primary" type="" onClick={genRandArray}>Generate random array</Button> </Col>
                <Col xs="2"><Button variant="primary" type="">Generate random array</Button></Col>
                <Col>
                    <b>Choose a sort type:</b>
                    <Row>
                        <Col xs="2"><Button variant="primary" onClick={bubbleSort}>Bubble</Button></Col>
                        <Col xs="2"><Button variant="primary" type="">Insertion</Button></Col>
                        <Col xs="2"><Button variant="primary" type="">Merge</Button></Col>
                        <Col xs="2"><Button variant="primary" type="">Radix</Button></Col>
                    </Row>
                </Col>
                <Col><RangeSlider value={speed} onChange={e => setSpeed(e.target.value)} /></Col>
                <Col xs="2"><Button variant={stop ? "primary" : "danger"} onClick={() => setStop(prevState => !prevState)}>{stop ? "Resume" : "Stop"}</Button></Col>
            </Row>
        </Container>
    )
}
