import React from 'react';
import {
    Carousel,
    Well,
} from 'react-bootstrap'

const importAll = (r) => {
    let images = {};
    r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
    return images;
}

const images = importAll(require.context('../images', false, /\.(png|jpe?g|svg)$/));

const containerStyle = {
    margin: '0 auto',
    padding:  '15px 15%'
}


export default ({ data }) => {
    const UI = data.map((item, i) => {
        return (
            <Carousel.Item>
                <img  alt="900x500" src={images[`img${i + 1}.jpg`]} />
                <Carousel.Caption>
                    <h3>{item.quote}</h3>
                    <p>{item.votes}</p>
                </Carousel.Caption>
            </Carousel.Item>
        )
    })
    return (
        <Well style={containerStyle}>
            <Carousel>
                {UI}
            </Carousel>
        </Well>
    );
}
