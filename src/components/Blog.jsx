import React, { useState, useEffect } from 'react';
import axios from "axios";
import { CardGroup, Col, Container, Row } from 'react-bootstrap';
import Cardcomp from './Cardcomp';
// import data from '../data';
import data from '../result.json';
import Adcomponent from './Adcomponent';

const Blog = () => {
    // const blog_url = `https://gnews.io/api/v4/top-headlines?token=e4e657081f77b9d6b60c65993f16db5b&lang=en&country=in`;
    const [blogs, setBlogs] = useState(data)

    // useEffect(() => {
    //     axios
    //         .get(blog_url)
    //         .then((response) => {

    //             setBlogs(response.data.articles);
    //         })
    //         .catch((error) => {
    //             console.log(error);
    //         });
    // }, []);
    return (
        <Container>

            <Row>
                <CardGroup>
                    {blogs.map((blog) => {

                        return <Cardcomp blog={blog} />
                    })}
                </CardGroup>


            </Row>
        </Container>
    );
}

export default Blog;
