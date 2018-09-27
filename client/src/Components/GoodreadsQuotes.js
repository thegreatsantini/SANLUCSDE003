import React from 'react';
import { Carousel } from 'react-bootstrap'

const importAll = (r) => {
    let images = {};
    r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
    return images;
}

const images = importAll(require.context('../images', false, /\.(png|jpe?g|svg)$/));

const containerStyle = {
    margin: '0 auto',
    padding: '25px 15%',
}

const textStyle = {
    fontSize: '1.99rem',
    fontWeight: 'bold',
    fontFamily: 'Noto Serif KR, sans-serif'
}

const imageStyle = {
    boxShadow: '0 19px 38px rgba(0,0,0,0.30), 0 15px 12px rgba(0,0,0,0.22)',
}

export default ({ data }) => {
    const UI = data.map((item, i) => {
        return (
            <Carousel.Item
            interval={null}
                >
                <img
                    style={imageStyle}
                    alt="Inspirational quote"
                    src={images[`img${i + 1}.jpg`]}
                />
                <Carousel.Caption>
                    <h4 style={textStyle}> {item.quote} </h4>
                    <p>Votes: {item.votes}</p>
                </Carousel.Caption>
            </Carousel.Item>
        )
    })
    return (
        <div style={containerStyle}>
            <Carousel>
                {UI}
            </Carousel>
        </div>
    );
}
