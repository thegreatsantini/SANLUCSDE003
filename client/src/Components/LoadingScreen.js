import React from 'react';
import './Loader.css';


export default ({ source, item }) => {
    return (
        <React.Fragment>
            <h1>Fetching {source} {item}</h1>
            <div class='loader'></div>
        </React.Fragment>
    );
}
