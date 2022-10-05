// import { useMutation } from '@apollo/client';
import React, { useState } from 'react';
import { Form, Container, Jumbotron, Col, Button } from 'react-bootstrap';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useMutation } from '@apollo/client'


import { SUBMIT_REQUEST } from '../utils/mutations';
import Auth from '../utils/auth';
//import { Form, Alert, } from 'react-bootstrap';


const PlaydateRequest = (props) => {

    const currentDate = new Date();
    const [startDate, setStartDate] = useState(currentDate);
    const [endDate, setEndDate] = useState(new Date().setDate(currentDate.getDate()+3));
    const [enviornmentCheckbox, setEnviornmentCheckbox] = useState([false,false,false]);
    const [animalsInfo, setAnimalsInfo] = useState("");
    const [homeInfo, setHomeInfo] = useState("");
    const [history, setHistory] = useState("");

    function updateEnvromentCheckbox(order, value) {
        let prevState = [...enviornmentCheckbox];
        prevState[order] = value;
        setEnviornmentCheckbox(prevState);
    };

    const [submitRequest] = useMutation(SUBMIT_REQUEST);

    const handleFormSubmit = async (event) => {
        event.preventDefault(); 
        
        // get token
        const token = Auth.loggedIn() ? Auth.getToken() : null;

        if (!token) {
        return false;
        }
      };

    return (
        <>
            <Jumbotron>
                <Container>
                    <Form  onSubmit={handleFormSubmit}>
                        <Form.Group>
                            <h5>Request Date:</h5>
                            <Form.Label>
                                From:
                                <DatePicker
                                    selected={startDate}
                                    onChange={(date) => setStartDate(date)}
                                    selectsStart
                                    startDate={startDate}
                                    endDate={endDate}
                                />
                            </Form.Label>
                            <Form.Label>
                                To:
                                <DatePicker
                                    selected={endDate}
                                    onChange={(date) => setEndDate(date)}
                                    selectsEnd
                                    startDate={startDate}
                                    endDate={endDate}
                                    minDate={startDate}
                                />
                            </Form.Label>
                        </Form.Group>
                        <Form.Group>
                            <h5>Enviornment:</h5>
                            <p>Give us a sneak peek of your enviornment to see if it will fit the needs of the animal you are requesting</p>
                            <Form.Check 
                                type="checkbox"
                                label="Children 5yrs old or younger?"
                                onChange={(e) => updateEnvromentCheckbox(0, e.target.checked)}></Form.Check>
                            <Form.Check
                                type="checkbox"
                                label="Children ages 6-17 years old"
                                onChange={(e) => updateEnvromentCheckbox(1, e.target.checked)}></Form.Check>
                            <Form.Check
                                type="checkbox"
                                label="Other animals in the house?"
                                onChange={(e) => updateEnvromentCheckbox(2, e.target.checked)}></Form.Check>
                            <Form.Label>
                                If answered yes above, please list all animals currently living at your home.
                            </Form.Label>
                            <Form.Control
                                as="textarea" 
                                style={{width: '350px', resize: 'both'}}
                                onChange={(e) => setAnimalsInfo(e.target.value)}>
                            </Form.Control>
                            <Form.Label>
                                If you are renting the home, please provide landlord's or property manager's contact info below:
                            <Form.Control 
                                as="textarea" 
                                style={{width: '350px', resize: 'both'}}
                                onChange={(e) => setHomeInfo(e.target.value)}>
                            </Form.Control>
                        </Form.Label>
                        </Form.Group>
                        <Form.Group>
                            <h5>Experience:</h5>
                            <Form.Label>
                                Please give us a brief history of your experience with animals (have you owned any pets before?):
                            </Form.Label>
                            <Form.Control 
                                as="textarea" 
                                style={{width: '350px', resize: 'both'}}
                                onChange={(e) => setHistory(e.target.value)}>
                            </Form.Control>
                        </Form.Group>
                        <Button variant='primary'>Submit</Button>
                    </Form>
                </Container>
            </Jumbotron>
        </>
    )
}

export default PlaydateRequest;