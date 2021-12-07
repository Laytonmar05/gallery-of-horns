import React from 'react';
import Card from 'react-bootstrap/Card';

class HornedBeast extends React.Component {
    render() {
        return (
            <Card className="beast">
                <Card.Title>{this.props.beastObj.title}</Card.Title>
                <Card.Img
                src = {this.props.beastObj.image_url}
                alt = {this.props.beastObj.description}
                title = {this.props.beastObj.title}
                style = {{width:'20%'}}
           />
                <Card.Text>{this.props.beastObj.description}</Card.Text>
            </Card>
        );
    }
}

export default HornedBeast;