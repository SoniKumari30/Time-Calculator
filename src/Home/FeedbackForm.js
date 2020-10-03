import React from "react"
import {Container, Form, Col, Row, Button} from 'react-bootstrap'

class FeedbackForm extends React.Component{
        constructor(props){
            super(props)
            this.state = {
                formName: 'Aromatic bar',
                text: '',
                email: '',
                phone: '',
                name: '',
                rating: '',
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
            rating: this.state.rating,
            arr: this.state.arr
            
        }

    
        var array = []
        array.push(formData)
        array=  array.concat(JSON.parse(localStorage.getItem('array') || "[]"))

        const setItem = localStorage.setItem('array',JSON.stringify(array))
        if(array){
            alert("Successfully added!")
        }
    }

     handleChange = (e) => {
        this.setState({
            [e.target.name]:e.target.value 
        })
    }

     handleRadioChange=(rating)=>{
        this.setState({rating})
    }

    render(){
        return (
            <div className="fluid-container" style={{height:"100%", width: "100%",backgroundColor:" red",backgroundImage:"linear-gradient(#F4F8F9,#B7F4C9,#E4C4F9)"}}>
                <Container>
                <h1 className='pt-5 pb-2'>Form</h1>
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
                                    required
                                />
                            </Col>
                            <Col md={6}>
                            <Form.Label htmlFor="email">Email field</Form.Label>
                            <Form.Control 
                                type="text"
                                id="email"
                                name="email"
                                value={this.state.email}
                                onChange={this.handleChange}
                                required
                            />
                            </Col>
                        </Row>
    
                        
                        <Row className="pt-3">
                            <Col md={6}>
                                <Form.Label htmlFor="phone">Phone field</Form.Label>
                                <Form.Control 
                                    type="Number"
                                    id="phone"
                                    name="phone"
                                    value={this.state.phone}
                                    onChange={this.handleChange}
                                    required
                                />
                            </Col>

                            <Row>
                            <Col>
                            <Form.Label>Radio Button </Form.Label>
                                <Form.Check inline label='Excellent' type="radio" id="excellent" name="rating"
                                    checked={this.state.rating==='excellent'}
                                    onChange={()=>{this.handleRadioChange('excellent')}}
                                />
                                <Form.Check inline label='Good' type="radio" id="good" name="rating"
                                    checked={this.state.rating==='good'}
                                    onChange={()=>{this.handleRadioChange('good')}}
                                />
                                <Form.Check inline label='Fair' type="radio" id="fair" name="rating"
                                    checked={this.state.rating==='fair'}
                                    onChange={()=>{this.handleRadioChange('fair')}}
                                />
                                <Form.Check inline label='Bad' type="radio" id="bad" name="rating"
                                    checked={this.state.rating==='bad'}
                                    onChange={()=>{this.handleRadioChange('bad')}}
                                    required
                                />
                            </Col>
    
                           
                        </Row>
                            <Col md={6}>
                            <Form.Label htmlFor="name">Name *</Form.Label>
                            <Form.Control 
                                type="text"
                                id="name"
                                name="name"
                                value={this.state.name}
                                onChange={this.handleChange}
                                required
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

export default FeedbackForm