import React from "react"
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container,Form} from "react-bootstrap"

//velocity of river is vr
//velocity of swimmer w.r.t river is vs
class App extends React.Component{

  constructor(){
    super()
    this.state={
      velocityOfRiver: 1,
      velocityOfPerson: 1,
      angleOfSwim:1,
      widthOfRiver:1,
       
    }
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  

  render(){
    let velocityOfPerson = this.state.velocityOfPerson
    let velocityOfRiver = this.state.velocityOfRiver
    let angleOfSwim = this.state.angleOfSwim
    let widthOfRiver = this.state.widthOfRiver
    let x = velocityOfPerson.siny
    let time = widthOfRiver/x
  

    
    
    
    return (
     
        <Container>
           <div>
        <h1 className="text-info mt-5 text-center">time taken by the swimmer...</h1>
        <div className="ml-5 mt-3" style={{ width: "50%", float: "left"}}  >
        
              <Form.Group>
                <Form.Label>Enter width of the river</Form.Label>
                <Form.Control type="Number" value={widthOfRiver} onChange={this.handleChange} name="widthOfRiver" /><br/><br/>
                <Form.Label>Enter velocity of the swimmer</Form.Label>
                <Form.Control type="Number" value={velocityOfPerson} onChange={this.handleChange} name="velocityOfPerson" /> <br/><br/>
                <Form.Label>Enter velocity of the river</Form.Label>
                <Form.Control type="Number" value={velocityOfRiver} onChange={this.handleChange} name="velocityOFRiver" /> <br/><br/>
                <Form.Label>Enter angle of swim</Form.Label>
                <Form.Control type="Number" value={angleOfSwim} onChange={this.handleChange} name="angleOfSwim" /> <br/><br/>
                <h3 className="text-dark">Time taken to cover {widthOfRiver}  {time} sec </h3>
              </Form.Group>
          </div>
          </div>
          </Container>
      
    )
  }
}
export default App;
