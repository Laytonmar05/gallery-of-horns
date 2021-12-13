import React from 'react';
import "./FilteredForm.css"
import Form from "react-bootstrap/Form";

class FilterForm extends React.Component {
    render() {return(
<>
<Form className="form" class="form">
<Form.Label for="numOfHorns">Filter by Horns</Form.Label>
<br/>
<Form.Select className="formSelect" name="numOfHorns">
<option>ALL THE HORNS!</option>
  <option value="1">One Horn</option>
  <option value="2">Two Horns</option>
  <option value="3">Three Horns</option>
  <option value="100">More Horns Than I Can Count!</option>

</Form.Select>
</Form>
</>
    ) };
};

export default FilterForm;