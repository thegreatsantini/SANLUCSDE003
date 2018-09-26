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
        const titleLength = (el) => el.length > 45 ? el.slice(0, el.length - (8 + el.length)) + '...' : el;
        const testLength = (el) => el.length > 145 ? el.slice(0, el.length - (8 + el.length)) + '...' : el;
        return (
            <Col key={i} xs={12} sm={6} md={4}>
                <Panel style={panelStyle} >
                    <Panel.Heading style={panelHeadingStyle}> {titleLength(post.title)} </Panel.Heading>
                    <Panel.Body style={ panelBodyStyle }> {testLength(post.text)} </Panel.Body>
                    <Panel.Footer>{post.timestamp}</Panel.Footer>
                </Panel>
            </Col>
        )
    })
    const titleLength = (el) => el.length > 45 ? el.slice(0, el.length - (10 + el.length)) + '...' : el;
const testLength = (el) => el.length > 145 ? el.slice(0, el.length - (10 + el.length)) + '...' : el;
    return (
        <Row bsClass='panel__container' style={containerStyle} >
            {UI}
            <Col  xs={12} sm={6} md={4}>
                <Panel style={panelStyle} >
                    <Panel.Heading style={panelHeadingStyle}> {titleLength('this is an extemly long post tile. i am using it to test my cuntion please work correclty')} </Panel.Heading>
                    <Panel.Body style={ panelBodyStyle }> {testLength('this is an extemly long post tst. i am using it to test my cuntion please work correclty. it should add a ... to the end of the post text in order to accomodate for long post lengths')} </Panel.Body>
                    <Panel.Footer>'timestat</Panel.Footer>
                </Panel>
            </Col>
        </Row>
    );
}
