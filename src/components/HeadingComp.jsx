import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const HeadingComp = () => {
    return (
        <Container>
            <Row>
                <Col xs={12} className="scroll-container">

                    <h3 className="scroll-text">{'Latest Health News '}</h3>

                </Col>
            </Row>
        </Container>

    );
}

export default HeadingComp;
