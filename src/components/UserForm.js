import React from "react"
import {Container, Form, Col, Row, Button} from 'react-bootstrap'

class UserForm extends React.Component(){
        constructor(props){
            super(props)
            this.state = {
                formName: 'Aromatic bar',
                text: '',
                email: '',
                phone: '',
                name: '',
                gender: '',
                arr:[]
            }
        }
    
     handleSubmit = (e) => {
        e.preventDefault()
        const formData = {
            formName: this.state.formName,
            text: this.state.text,
            email: this.state.email,
            phone: this.state.phone,
            name: this.state.name,
            gender: this.state.gender,
            //arr: this.state.arr
            
        }

        //const arr=[]
        console.log(formData)
         JSON.parse(localStorage.getItem('arr'))
         arr.push(formData)
        
        localStorage.setItem('arr',JSON.stringify(arr))
    }

     handleChange = (e) => {
        this.setState({
            [e.target.name]:e.target.value 
        })
    }

     handleRadioChange=(gender)=>{
        this.setValue({gender})
    }

    render(){
        return (
            <div>
                <Container>
                    <Form onSubmit={this.handleSubmit}>
                        <Row>
                            <Col>
                            <input className="ml-0 border-0 text-left text-info mt-3" style={{outline: "none"}}
                                    value={this.state.formName}
                                />
                                <p>we are committed to providing you with the best dining experience possible,
                                    so we welcome your comments. please fill out these questionnarie Thank you
                                </p>
                            </Col>
                        </Row>
                        <Row className="pt-3">
                            <Col md={6}>
                                <Form.Label htmlFor="name">Text Field</Form.Label>
                                <Form.Control 
                                    type="text"
                                    id="text"
                                    name="text"
                                    value={this.state.text}
                                    onChange={this.handleChange}
                                    //required
                                />
                            </Col>
                            <Col md={6}>
                            <Form.Label htmlFor="email">Email:-</Form.Label>
                            <Form.Control 
                                type="text"
                                id="email"
                                name="email"
                                value={this.state.email}
                                onChange={this.handleChange}
                                //required
                            />
                            </Col>
                        </Row>
    
                        {/* ************************* */}
                        <Row>
                            <Col>
                            <Form.Label>Quality:- </Form.Label>
                                <Form.Check inline label='Excellent' type="radio" id="excellent" name="gender"
                                    checked={this.state.gender==='excellent'}
                                    onChange={()=>{this.handleRadioChange('excellent')}}
                                />
                                <Form.Check inline label='Good' type="radio" id="good" name="gender"
                                    checked={this.state.gender==='good'}
                                    onChange={()=>{this.handleRadioChange('good')}}
                                />
                                <Form.Check inline label='Fair' type="radio" id="fair" name="gender"
                                    checked={this.state.gender==='fair'}
                                    onChange={()=>{this.handleRadioChange('fair')}}
                                />
                                <Form.Check inline label='Bad' type="radio" id="bad" name="gender"
                                    checked={this.state.gender==='bad'}
                                    onChange={()=>{this.handleRadioChange('bad')}}
                                />
                            </Col>
    
                           
                        </Row>
    
                        
                        <Row className="pt-3">
                            <Col md={6}>
                                <Form.Label htmlFor="phone">Phone:-</Form.Label>
                                <Form.Control 
                                    type="Number"
                                    id="phone"
                                    name="phone"
                                    value={this.state.phone}
                                    onChange={this.handleChange}
                                    //required
                                />
                            </Col>
                            <Col md={6}>
                            <Form.Label htmlFor="name">Name:-</Form.Label>
                            <Form.Control 
                                type="text"
                                id="name"
                                name="name"
                                value={this.state.name}
                                onChange={this.handleChange}
                                //required
                            />
                            </Col>
                        </Row>
    
                        <Row>
                            <Col md={4}></Col>
                            <Col md={4}>
                        <Button  size="sm" block  className="mt-3 pl-5 pr-5">
                            <input type="submit" className="btn" value="SUBMIT"/></Button>
                            </Col>
                            <col md={4}></col>
                        </Row>
                    </Form>
                </Container>
            </div>
        )
    }
    
}

export default UserForm