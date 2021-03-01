import React, { Component } from 'react'
import { Button, Form, Container, Header } from "semantic-ui-react";
import "./App.css";

// function App() {
//   return (
//     <Container fluid className="container">
//       <Header as="h2">React to post form data to Google Sheets</Header>
//       <Form className="form">
//         <Form.Field>
//           <label>Name</label>
//           <input placeholder="Enter your name" required />
//         </Form.Field>
//         <Form.Field>
//           <label>Email</label>
//           <input type="email" placeholder="Enter your email" required />
//         </Form.Field>
//         <Form.Field>
//           <label>Your Contact Number</label>
//           <input
//             pattern="[0-9]{3}-[0-9]{3}-[0-9]{5}"
//             placeholder="Enter your contact number"
//             required
//           />
//         </Form.Field>
//         <Form.Field>
//           <label>Enter your current semester</label>
//           <div class="ui right labeled input">
//             <input type="text" placeholder="Your Current Semester.." />
//             <div class="ui basic label">th</div>
//           </div>
//         </Form.Field>

//         <Form.Field>
//           <label>Tell about yourself</label>
//           <textarea placeholder="Write something about yourself" />
//         </Form.Field>

//         <Button color="blue" type="submit">
//           Submit
//         </Button>
//       </Form>
//     </Container>
//   );
// }

// export default App;
export default class App extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       name: '',
       email: '',
       contact: '',
       about: ''
    }
  }

  changeHandler = (e) => {
    this.setState({[e.target.name] : e.target.value})
  }

  submitHandler = e => {
    e.preventDefault();
    console.log(this.state);
  }
  
  render() {
    const { name, email, contact, about } = this.state;    
    return (
      <Container fluid className="container">
        <Header as='h2'>React to post form data to Google Sheets</Header>
        <Form className="form" onSubmit={this.submitHandler}>
          <Form.Field>
            <label>Name</label>
            <input placeholder='Enter your name' type="text" name = "name" value = {name} onChange={this.changeHandler}/>
          </Form.Field>
          <Form.Field>
            <label>Email</label>
            <input placeholder='Enter your email' type="email" name = "email" value = {email} onChange={this.changeHandler}/>
          </Form.Field>
          <Form.Field>
            <label>Conatct No</label>
            <input placeholder='Enter your Contact No' pattern="[0-9]{3}-[0-9]{3}-[0-9]{5}" type="text" name = "contact" value = {contact} onChange={this.changeHandler}/>
          </Form.Field>
          <Form.Field>
            <label>Tell about yourself</label>
            <textarea placeholder='Write something about yourslef...' type="text" name = "about" value = {about} onChange={this.changeHandler}/>
          </Form.Field>
          
          <Button color="blue" type='submit'>Submit</Button>
        </Form>
      </Container>
    )
  }
}