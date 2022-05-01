import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const HeadingComp = ({ text }) => {
    return (
        <Container>
            <Row>
                <Col xs={12} className="scroll-container d-none d-md-block">

                    <h1 className="scroll-text">{text}</h1>

                </Col>
                <Col xs={12} className="d-sm-block d-md-none d-lg-none">

                    <h1 className='text-center mt-4'>{text}</h1>

                </Col>
            </Row>
        </Container>




    );
}

export default HeadingComp;
