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
       select: ["Select Option",'DOWNSTREAM','UPSTREAM'],
       option: ""
    }
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSelect = (e) => {
    this.setState({
        option: e.target.value
    })
}

  render(){
    let speedOfPerson = this.state.speedOfPerson
    let speedOfStream = this.state.speedOfStream
    let distance = this.state.distance
    let angleOfSwim = this.state.angleOfSwim
    // let speed = parseInt(speedOfStream) + parseInt(speedOfPerson) 
    // let upStreamSpeed = parseInt(speedOfPerson) - parseInt(speedOfStream)
    // let timeTakenAlongY_axis =  distance / speed 
    // let timeTakenOppositeY_axis =  distance / upStreamSpeed
    let time = distance/speedOfPerson.siny
  

    const select = this.state.select
        let selectList = select.map((ele, i)=>{
            return (
                <option key={i}> {ele} </option>
            )
        })
    
    
    return (
     
        <Container>
           <div>
        <h1 className="text-info mt-5 text-center">time taken by the swimmer...</h1>

        <div className='mt-5' style={{width: "30%", float: "right"}}>
                        <Form.Control as="select" onChange={this.handleSelect} name='option' className='select'>
                            {selectList}
                        </Form.Control><br/>
        </div>

        <div className="ml-5 mt-3" style={{ width: "50%", float: "left"}}  >
        {
            this.state.option === 'DOWNSTREAM' && 
              <Form.Group>

                <h3>timeTakenAlongY_axis</h3>
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
        
            
        }

        

         {
              this.state.option === 'UPSTREAM' &&
                <Form.Group>
                   <h3>timeTakenOppositeY_axis</h3>
                  <Form.Label>Enter width of the river</Form.Label>
                  <Form.Control type="Number" value={distance} onChange={this.handleChange} name="distance" /> <br/><br/>
                  <Form.Label>Enter V velocity of the swimmer</Form.Label>
                  <Form.Control type="Number" value={speedOfPerson} onChange={this.handleChange} name="speedOfPerson" /> <br/><br/>
                  <Form.Label>Enter X velocity of the river</Form.Label>
                  <Form.Control type="Number" value={speedOfStream} onChange={this.handleChange} name="speedOfStream" /> <br/><br/>
                  <Form.Label>Enter angle of swim</Form.Label>
                <Form.Control type="Number" value={angleOfSwim} onChange={this.handleChange} name="angleOfSwim" /> <br/><br/>
                  <h3 className="text-secondary">Time taken to cover distance {distance}   m/sec is {time} sec</h3>
                </Form.Group>
          }
          </div>
          </div>
          </Container>
      
    )
  }
}
export default App;
