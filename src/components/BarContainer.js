import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

export default function BarContainer({ barColors, barValues }) {

    return (
        <Container className="barcontainer">
            {barValues.map((barValue, index) => (
                <div style={{ height: `${barValue}px` }} key={index} className="vl" />))}
        </Container>
    )
}
