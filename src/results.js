import React from 'react';
import JSONpretty from 'react-json-pretty';

var JSONPrettyMon = require('react-json-pretty/dist/monikai');

export default function Results(props) {
    return (
        <>
        <h1>Results from your API: </h1>
            <span><JSONPretty id="json-pretty" data={props.body} theme={JSONPrettyMon} ></JSONPretty></span>
        </>
    )
}