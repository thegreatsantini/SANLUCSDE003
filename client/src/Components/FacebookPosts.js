import React from 'react';
import {
    Col,
    Panel,
    Row
} from 'react-bootstrap'


const containerStyle = {
    padding: '15px 15%',
    display: 'flex',
    // justifyContent: 'center',
    flexWrap: 'wrap',
    flex:'1 1 auto'
}



const panelStyle = {
    // height: '50px'
    // border: '15px solid black'
}

export default ({ data }) => {

    const UI = data.map((post, i) => {
        const titleLength = (el) => el.length > 20 ? el.slice(0, el.length - 5) : el
        return (
            <Col key={i} xs={12} sm={6} md={4}>
                <Panel style={panelStyle} >
                    <Panel.Heading> {titleLength(post.title)} </Panel.Heading>
                    <Panel.Body> {post.text} </Panel.Body>
                    <Panel.Footer>{post.timestamp}</Panel.Footer>
                </Panel>
            </Col>
        )
    })
    return (
        <Row style={containerStyle} >
            {UI}
        </Row>
    );
}
