import React from 'react';
import HornedBeast from './HornedBeast';
import beastData from './beastData';

class Main extends React.Component {
    render() {
        return (
        <>
            <p>Horned Beasts coming soon...</p>
            {beastData.map((beast,idx)=> (
             <HornedBeast key={idx} beastObj={beast}/>
            ))}
           
        </>
        );
    }
}

export default Main;