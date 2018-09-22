import React from 'react';


export default ({ source, item }) => {    
        return (
            <React.Fragment>
                <h1> Please Wait we are fetching { source } { item }</h1>
            </React.Fragment>
        );
    }
