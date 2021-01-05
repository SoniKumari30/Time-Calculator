import React from "react"
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container,Form} from "react-bootstrap"

//velocity of river is vr
//velocity of swimmer w.r.t river is vs
class App extends React.Component{

  constructor(){
    super()
    this.state={
      speedOfStream: 0,
      speedOfPerson: 0,
      angleOfSwim:0,
      distance: 0,
       
    }
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  

  render(){
    let speedOfPerson = this.state.speedOfPerson
    let speedOfStream = this.state.speedOfStream
    let distance = this.state.distance
    let angleOfSwim = this.state.angleOfSwim
    let time = distance/speedOfPerson.siny
  

    
    
    
    return (
     
        <Container>
           <div>
        <h1 className="text-info mt-5 text-center">time taken by the swimmer...</h1>


        <div className="ml-5 mt-3" style={{ width: "50%", float: "left"}}  >
        
              <Form.Group>

                <h3>timeTaken...</h3>
                <Form.Label>Enter width of the river</Form.Label>
                <Form.Control type="Number" value={distance} onChange={this.handleChange} name="distance" /><br/><br/>
                <Form.Label>Enter velocity of the swimmer</Form.Label>
                <Form.Control type="Number" value={speedOfPerson} onChange={this.handleChange} name="speedOfPerson" /> <br/><br/>
                <Form.Label>Enter velocity of the river</Form.Label>
                <Form.Control type="Number" value={speedOfStream} onChange={this.handleChange} name="speedOfStream" /> <br/><br/>
                <Form.Label>Enter angle of swim</Form.Label>
                <Form.Control type="Number" value={angleOfSwim} onChange={this.handleChange} name="angleOfSwim" /> <br/><br/>
                <h3 className="text-dark">Time taken to cover {distance}  {time} sec</h3>
              </Form.Group>
          </div>
          </div>
          </Container>
      
    )
  }
}
export default App;
