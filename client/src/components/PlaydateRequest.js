// import { useMutation } from '@apollo/client';
import React, { useState } from 'react';
import { Form, Container, Jumbotron } from 'react-bootstrap';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

// import { SUBMIT_REQUEST } from '../utils/mutations';
import Auth from '../utils/auth';
// import { Form, Alert, } from 'react-bootstrap';


const PlaydateRequest = (props) => {

    const currentDate = new Date();
    const [startDate, setStartDate] = useState(currentDate);
    const [endDate, setEndDate] = useState(new Date().setDate(currentDate.getDate()+3));
    // const [submitRequest] = useMutation(SUBMIT_REQUEST);

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
                        <h5>Request Date:</h5>
                        <label>
                            From:
                            <DatePicker
                                selected={startDate}
                                onChange={(date) => setStartDate(date)}
                                selectsStart
                                startDate={startDate}
                                endDate={endDate}
                            />
                        </label>
                        <label>
                            To:
                            <DatePicker
                                selected={endDate}
                                onChange={(date) => setEndDate(date)}
                                selectsEnd
                                startDate={startDate}
                                endDate={endDate}
                                minDate={startDate}
                            />
                        </label>
                        <h5>Enviornment:</h5>
                        <p>Give us a sneak peek of your enviornment to see if it will fit the needs of the animal you are requesting</p>
                        <label>
                            Children 5yrs old or younger?
                            <input type='checkbox' name='todlers' 
                                value={props.housingMethod}
                            ></input>
                        </label>
                        <br></br>
                        <label>
                            Children ages 6-17 years old
                            <input type='checkbox' name='youngKids' 
                                value={props.housingMethod}
                            ></input>
                        </label>
                        <br></br>
                        <label>
                            Other animals in the house?
                            <input type='checkbox' name='otherAnimals' 
                                value={props.housingMethod}
                            ></input>
                        </label>
                        <br></br>
                        <label>
                            If answered yes above, please list all animals currently living at your home.
                            <input type='textarea' name='listAnimals' 
                                value={props.housingMethod}
                                required
                            ></input>
                        </label>
                        <br></br>
                        <label>
                            If you are renting the home, please provide landlord's or property manager's contact info below:
                            <br></br>
                            <textarea type='textarea' name='landlord' 
                                value={props.landlord}
                            ></textarea>
                        </label>
                        <br></br>
                        <h5>Experience:</h5>
                        <label>
                            Please give us a brief history of your experience with animals (have you owned any pets before?):
                            <br></br>
                            <textarea type='textarea' name='experience' 
                                value={props.experience}
                                required
                            ></textarea>
                        </label>
                    </Form>
                </Container>
            </Jumbotron>
        </>
    )
}

export default PlaydateRequest;