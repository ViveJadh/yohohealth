import React from 'react';
import { Col, Card } from 'react-bootstrap';

// content, description, image, publishedAt, source, title, url
const Cardcomp = ({ blog }) => {

    return (
        <Col xs={12} md={6} lg={{ span: 5, offset: 1 }} className='p-3'>

            <Card className='h-100 ' bg='dark' text='white'>
                <Card.Img variant="top" className='img-fluid' src={
                    blog.image
                        ? blog.image
                        : "http://www.aaru.edu.jo/websites/aaru2/wp-content/plugins/learnpress/assets/images/no-image.png?Mobile=1&Source=%2F%5Flayouts%2Fmobile%2Fdispform%2Easpx%3FList%3D78b536db%252De7c7%252D45d9%252Da661%252Ddb2a2aa2fbaf%26View%3D6efc759a%252D0646%252D433c%252Dab6e%252D2f027ffe0799%26RootFolder%3D%252Fwebsites%252Faaru2%252Fwp%252Dcontent%252Fplugins%252Flearnpress%252Fassets%252Fimages%26ID%3D4786%26CurrentPage%3D1"
                } alt='' />
                <Card.Body>
                    <Card.Title className=''>{blog.title}</Card.Title>
                    <Card.Text className='mt-4'>
                        {`${blog.description.substring(0, 500)}...`}
                    </Card.Text>

                </Card.Body>
                <Card.Footer className='d-flex justify-content-between flex-md-column  justify-content-md-between  align-items-md-stretch flex-lg-row align-items-lg-center justify-content-between'>

                    <a target="_blank" href={blog.url} rel="noreferrer" className="btn btn-primary mx-1 mt-sm-3">Read More</a>
                    <a target="_blank" href={blog.source.url} rel="noreferrer" className="btn btn-secondary mx-1 mt-sm-3 d-flex align-items-center justify-content-center">{blog.source.name}</a>

                </Card.Footer>

            </Card>

        </Col>
    );
}

export default Cardcomp;
