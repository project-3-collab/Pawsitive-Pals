// import { useMutation } from '@apollo/client';
import React, { useState } from 'react';
import { Form, Container, Jumbotron, Button } from 'react-bootstrap';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useMutation } from '@apollo/client'


import { SUBMIT_REQUEST } from '../utils/mutations';
import Auth from '../utils/auth';
//import { Form, Alert, } from 'react-bootstrap';


const PlaydateRequest = (props) => {

    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());
    const [enviornmentCheckbox, setEnviornmentCheckbox] = useState([false, false, false, false]);
    const [animalsInfo, setAnimalsInfo] = useState("");
    const [homeInfo, setHomeInfo] = useState("");
    const [reason, setReason] = useState("");

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

        const input = {
            petId: String(props.data),
            fromDate: startDate,
            toDate: endDate,
            hasToddlers: enviornmentCheckbox[0],
            hasKids: enviornmentCheckbox[1],
            hasTeens: enviornmentCheckbox[2],
            hasOtherAdults: enviornmentCheckbox[3],
            animalsInfo: animalsInfo,
            homeInfo: homeInfo,
            reason: reason,
            approvalStatus: 0
        }

        await submitRequest({
            variables: { input: input }
        });

    };

    return (
        <>
            <Jumbotron>

                <Form onSubmit={handleFormSubmit}>
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
                        <p>Give us a sneak peek of your enviornment to see if it will fit the needs of the animal you are requesting.</p>
                        <Form.Check
                            type="checkbox"
                            label="Children 5yrs old or younger living in your home?"
                            onChange={(e) => updateEnvromentCheckbox(0, e.target.checked)}></Form.Check>
                        <Form.Check
                            type="checkbox"
                            label="Children ages 6-17 years old living in your home?"
                            onChange={(e) => updateEnvromentCheckbox(1, e.target.checked)}></Form.Check>
                        <Form.Check
                            type="checkbox"
                            label="Other adults 18+ living in your home?"
                            onChange={(e) => updateEnvromentCheckbox(2, e.target.checked)}></Form.Check>
                        <Form.Check
                            type="checkbox"
                            label="Other animals in the house? List name, age, and type of animal."
                            onChange={(e) => updateEnvromentCheckbox(3, e.target.checked)}></Form.Check>
                        <br></br>
                        <Form.Label>
                            If answered yes above, please list all animals currently living at your home.
                            <Form.Control
                                as="textarea"
                                style={{ width: '350px', resize: 'both' }}
                                onChange={(e) => setAnimalsInfo(e.target.value)}>
                            </Form.Control>
                        </Form.Label>
                        <br></br>
                        <Form.Label>
                            If you are renting the home, please provide landlord's or property manager's contact info below:
                            <Form.Control
                                as="textarea"
                                style={{ width: '350px', resize: 'both' }}
                                onChange={(e) => setHomeInfo(e.target.value)}>
                            </Form.Control>
                        </Form.Label>
                    </Form.Group>
                    <Form.Group>
                        <h5>Reason for playdate:</h5>
                        <Form.Label>
                            Why do you want this playdate? What fun activities do you plan on doing with your PAW pal?
                        </Form.Label>
                        <Form.Control
                            as="textarea"
                            style={{ width: '350px', resize: 'both' }}
                            onChange={(e) => setReason(e.target.value)}>
                        </Form.Control>
                    </Form.Group>
                    <Button
                        type='submit'
                        variant='primary'>
                        Submit
                    </Button>
                </Form>

            </Jumbotron>
        </>
    )
}

export default PlaydateRequest;