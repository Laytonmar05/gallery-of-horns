import React from 'react';
import HornedBeast from './HornedBeast';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import beastData from './beastData';
import FilterForm from "./FilterForm"

class Main extends React.Component {
    render() {
        return (
        <Container>
            <FilterForm /> 
            <Row xs={1} md={2} lg={3} xl={4}>
            {beastData.map((beast,idx)=> (
             <HornedBeast key={idx} beastObj={beast}/>
            ))}
           </Row>
        </Container>
        );
    }
}

export default Main;