import React from 'react';
import { Accordion, Table } from 'react-bootstrap';
import Logo from "./logo.svg";

class AccordianExample extends React.Component {
render() {
return (
<div className="accordion-wrap">
<div className="container">
<div className="my-4 my-5">
<Accordion defaultActiveKey="">
<Accordion.Item eventKey="0">
<Accordion.Header>
<img src={Logo} />
Company 1
</Accordion.Header>
<Accordion.Body>

<div className="row mt-2">
  <div className="col-md-6">
    <div className="company-info mb-4">
      <h3>
      company information
      </h3>
      <ul>
      <li>
      Industry - Elliot Avenue
      </li>
      <li>
      state - Washington
      </li>
      <li>
      address - 2425 Folkways Blvd #128, Lincoln, NE, 68521, US 
      </li>
      </ul>
    </div>

<Accordion defaultActiveKey="">
<Accordion.Item eventKey="0">
<Accordion.Header>
project 1
</Accordion.Header>
<Accordion.Body>
<div className="shared-forms">
<h3>
shared forms
</h3>
<Table responsive striped bordered hover>
<thead>
<tr>
<th>ID</th>
<th>Form Name</th>
<th>status</th>
</tr>
</thead>
<tbody>
<tr>
<td>1</td>
<td>Mark</td>
<td>active</td>
</tr>
<tr>
<td>2</td>
<td>Jacob</td>
<td>in active</td>
</tr>
</tbody>
</Table>
</div>

<div className="shared-files mt-4">
<h3>
shared files
</h3>

<ul>
<li>
file name 1 - 
<a href="https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf">
https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf
</a>
</li>
<li>
file name 2 - <a href="https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf">
https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf
</a>
</li>
<li>
file name 3 - <a href="https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf">
https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf
</a>
</li>
</ul>
</div>
</Accordion.Body>
</Accordion.Item>
<Accordion.Item eventKey="1">
<Accordion.Header>
project 2
</Accordion.Header>
<Accordion.Body>
<div className="shared-forms">
<h3>
shared forms
</h3>
<Table responsive striped bordered hover>
<thead>
<tr>
<th>ID</th>
<th>Form Name</th>
<th>status</th>
</tr>
</thead>
<tbody>
<tr>
<td>1</td>
<td>Mark</td>
<td>active</td>
</tr>
<tr>
<td>2</td>
<td>Jacob</td>
<td>in active</td>
</tr>
</tbody>
</Table>
</div>

<div className="shared-files mt-4">
<h3>
shared files
</h3>

<ul>
<li>
file name 1 - 
<a href="https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf">
https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf
</a>
</li>
<li>
file name 2 - <a href="https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf">
https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf
</a>
</li>
<li>
file name 3 - <a href="https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf">
https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf
</a>
</li>
</ul>
</div>
</Accordion.Body></Accordion.Item>
</Accordion>
</div>
  <div className="col-md-6">
  <div className="shared-forms">
<h3>
employees list
</h3>
<Table responsive striped bordered hover>
<thead>
<tr>
<th>user name</th>
<th>role</th>
<th>status</th>
</tr>
</thead>
<tbody>
<tr>
<td>user 1</td>
<td>admin</td>
<td>active</td>
</tr>
<tr>
<td>user 2</td>
<td>user</td>
<td>in active</td>
</tr>
</tbody>
</Table>
</div>
</div>
</div>
</Accordion.Body>
</Accordion.Item>
<Accordion.Item eventKey="1">
<Accordion.Header>
<img src={Logo} />
Company 2
</Accordion.Header>
<Accordion.Body>

<div className="row mt-2">
  <div className="col-md-6">
    <div className="company-info mb-4">
      <h3>
      company information
      </h3>
      <ul>
      <li>
      Industry - Elliot Avenue
      </li>
      <li>
      state - Washington
      </li>
      <li>
      address - 2425 Folkways Blvd #128, Lincoln, NE, 68521, US 
      </li>
      </ul>
    </div>

<Accordion defaultActiveKey="">
<Accordion.Item eventKey="0">
<Accordion.Header>
project 1
</Accordion.Header>
<Accordion.Body>
<div className="shared-forms">
<h3>
shared forms
</h3>
<Table responsive striped bordered hover>
<thead>
<tr>
<th>ID</th>
<th>Form Name</th>
<th>status</th>
</tr>
</thead>
<tbody>
<tr>
<td>1</td>
<td>Mark</td>
<td>active</td>
</tr>
<tr>
<td>2</td>
<td>Jacob</td>
<td>in active</td>
</tr>
</tbody>
</Table>
</div>

<div className="shared-files mt-4">
<h3>
shared files
</h3>

<ul>
<li>
file name 1 - 
<a href="https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf">
https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf
</a>
</li>
<li>
file name 2 - <a href="https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf">
https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf
</a>
</li>
<li>
file name 3 - <a href="https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf">
https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf
</a>
</li>
</ul>
</div>
</Accordion.Body>
</Accordion.Item>
<Accordion.Item eventKey="1">
<Accordion.Header>
project 2
</Accordion.Header>
<Accordion.Body>
<div className="shared-forms">
<h3>
shared forms
</h3>
<Table responsive striped bordered hover>
<thead>
<tr>
<th>ID</th>
<th>Form Name</th>
<th>status</th>
</tr>
</thead>
<tbody>
<tr>
<td>1</td>
<td>Mark</td>
<td>active</td>
</tr>
<tr>
<td>2</td>
<td>Jacob</td>
<td>in active</td>
</tr>
</tbody>
</Table>
</div>

<div className="shared-files mt-4">
<h3>
shared files
</h3>

<ul>
<li>
file name 1 - 
<a href="https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf">
https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf
</a>
</li>
<li>
file name 2 - <a href="https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf">
https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf
</a>
</li>
<li>
file name 3 - <a href="https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf">
https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf
</a>
</li>
</ul>
</div>
</Accordion.Body></Accordion.Item>
</Accordion>
</div>
  <div className="col-md-6">
  <div className="shared-forms">
<h3>
employees list
</h3>
<Table responsive striped bordered hover>
<thead>
<tr>
<th>user name</th>
<th>role</th>
<th>status</th>
</tr>
</thead>
<tbody>
<tr>
<td>user 1</td>
<td>admin</td>
<td>active</td>
</tr>
<tr>
<td>user 2</td>
<td>user</td>
<td>in active</td>
</tr>
</tbody>
</Table>
</div>
</div>
</div>
</Accordion.Body>
</Accordion.Item>
</Accordion>
</div>
</div>
</div>
)
}
}

export default AccordianExample;