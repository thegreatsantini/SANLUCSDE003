import React from 'react';
import {
    Col,
    Panel,
    Row
} from 'react-bootstrap'
import './FacebookPosts.css'

const containerStyle = {
    padding: '15px 10%',
    display: 'flex',
    // justifyContent: 'center',
    flexWrap: 'wrap',
    flex:'1 1 auto'
}

const panelBodyStyle = {
    height: '135px',
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center'
}

const panelHeadingStyle = {
    height: '60px',
    justifyContent: 'center',
    display: 'flex',
    alignItems: 'center'
}

const panelStyle = {
    // height: '50px'
    // border: '15px solid black'
}

export default ({ data }) => {

    const UI = data.map((post, i) => {
        // const titleLength = (el) => el.length > 20 ? el.slice(0, el.length - 8) + '...' : el
        return (
            <Col key={i} xs={12} sm={6} md={4}>
                <Panel style={panelStyle} >
                    <Panel.Heading style={panelHeadingStyle}> {post.title} </Panel.Heading>
                    <Panel.Body style={ panelBodyStyle }> {post.text} </Panel.Body>
                    <Panel.Footer>{post.timestamp}</Panel.Footer>
                </Panel>
            </Col>
        )
    })
    return (
        <Row bsClass='panel__container' style={containerStyle} >
            {UI}
        </Row>
    );
}
