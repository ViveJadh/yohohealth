import React from 'react';
import { CardGroup, Container, Row } from 'react-bootstrap';
import Cardcomp from './Cardcomp';




const Blog = ({ data }) => {



    return (
        <Container>

            <Row>
                <CardGroup>
                    {data.map((blog) => {

                        return <Cardcomp blog={blog} />
                    })}
                </CardGroup>


            </Row>
        </Container>
    );
}

export default Blog;
