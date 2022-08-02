import React from 'react';

const Result = (props) => {
    console.log("Renderizacion de Result", props.value);
    return (
        <div className='result'>
            {props.value}
        </div>
    );
}


export default Result;
