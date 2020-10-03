import React from "react"
import { Table, Container } from "react-bootstrap"

function FeedbackTable(){
    const table= JSON.parse(localStorage.getItem('array'))
    return (
        <div className="fluid-container" style={{height:"100%", width: "100%",backgroundColor:" red",backgroundImage:"linear-gradient(#F4F8F9,#B7F4C9,#E4C4F9 )"}}>
             <Container>
            <h1 className='pt-5 pb-2'>All Feedback</h1>
            <Table striped bordered hover responsive>
            <thead className='thead-dark'>
                    <tr>
                    <th>Form Name</th>
                    <th>Text field</th>
                    <th>Phone field</th>
                    <th>Email field</th>
                    <th>Radio button</th>
                    <th>Name</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        table.map(ele => {
                            return (
                                <tr>
                                    <td>{ele.formName}</td>
                                    <td>{ele.text}</td>
                                    <td>{ele.phone}</td>
                                    <td>{ele.email}</td>
                                    <td>{ele.rating}</td>
                                    <td>{ele.name}</td>
                                </tr>
                            )
                        })
                    }
                </tbody>
                </Table>
                </Container>
        </div>
    )
}

export default FeedbackTable