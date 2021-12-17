import React from "react";
import Form from "react-bootstrap/Form";
import beastData from "./beastData.json";

class FilterForm extends React.Component {

  filter = (event) => {
    const numOfHorns = parseInt(event.target.value);
    console.log('numOfHorns selected: ', numOfHorns);
    let gallery = beastData;
    if (numOfHorns) {
      gallery = beastData.filter(beast => beast.horns === numOfHorns);
    }
    // TODO: Lift the new state of the gallery to it's parent component, to be rendered.
    this.props.updateGallery(gallery);
  };

  render() {
    return (
      <>
        <Form className="form">
          <Form.Label for="numOfHorns">Filter by Horns</Form.Label>
          <br />
          <Form.Select
            className="formSelect"
            name="numOfHorns"
            onChange={this.filter}
          >
            <option value="">All THE HORNS!</option>
            <option value="1">One Horn</option>
            <option value="2">Two Horn</option>
            <option value="3">Three Horn</option>
            <option value="100">More Horns Than I Can Count!</option>
          </Form.Select>
        </Form>
      </>
    );
  }
}

export default FilterForm;
