import React from 'react';
import {
    Col,
    Panel,
    Row
} from 'react-bootstrap'

const containerStyle = {
    padding: '15px 15%'
}

export default ({ data }) => {

    const UI = data.map((post, i) => {
        return (
            <Col key={i} xs={6} md={4}>
                <Panel>
                    <Panel.Heading> {post.title} </Panel.Heading>
                    <Panel.Body>{post.text}</Panel.Body>
                    <Panel.Footer>{post.timestamp}</Panel.Footer>
                </Panel>
            </Col>
        )
    })
    return (
        <Row style={containerStyle}>
            {UI}
        </Row>
    );
}
