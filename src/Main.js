import React from 'react';
import HornedBeast from './HornedBeast';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import beastData from './beastData';
import FilterForm from "./FilterForm"

class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            gallery: beastData
        };
    };

    updateGallery = (filteredGallery) => {
        this.setState({ gallery: filteredGallery });
    }
    render() {
        return (
            <Container>
                <FilterForm updateGallery={this.updateGallery}/>
                <Row xs={1} md={2} lg={3} xl={4}>
                    {this.state.gallery.map((beast, idx) => (
                        <HornedBeast key={idx} beastObj={beast} />
                    ))}
                </Row>
            </Container>
        );
    }
}

export default Main;
