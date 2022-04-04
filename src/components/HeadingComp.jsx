import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const HeadingComp = ({ text }) => {
    return (
        <Container>
            <Row>
                <Col xs={12} className="scroll-container">

                    <h1 className="scroll-text">{text}</h1>

                </Col>
            </Row>
        </Container>

    );
}

export default HeadingComp;
