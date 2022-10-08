import React, { useState } from 'react';
import { Form, Row, Button, Card, Col } from 'react-bootstrap';
import DatePicker from "react-datepicker";
import { useMutation } from '@apollo/client';
import { PROCESS_APPLICATION } from '../utils/mutations';

const ViewingRequest = (props) => {
    const [processApplication] = useMutation(PROCESS_APPLICATION);

    if(props.data._id == undefined) {
        return (
            <>
                <Card>
                    <Card.Header className="text-center">Please select a request</Card.Header>
                    <Card.Body>
                        <Card.Title className="text-center">Applicant Contact Info</Card.Title>
                        <Card.Text>
                            <Form.Group>
                                <Form.Label htmlFor="name">Name</Form.Label>
                                <Row className="justify-content-md-center">
                                    <Form.Control
                                        type='text'
                                        placeholder='First Name'
                                        name='firstname'
                                        style={{ width: "48%", marginRight: "5px" }}
                                    />
                                    <Form.Control
                                        type='text'
                                        placeholder='Last Name'
                                        name='lastname'
                                        style={{ width: "48%", marginLeft: "5px" }}
                                    />
                                </Row>
                            </Form.Group>
                            <Form.Group>
                                <Row>
                                    <Form.Label htmlFor="experience" style={{ width: "49%", marginLeft: "10px" }}>Email</Form.Label>
                                    <Form.Label htmlFor="experience" style={{ width: "40%", marginLeft: "0px" }}>Phone Number</Form.Label>
                                </Row>
                                <Row>
                                    <Form.Control
                                        type='email'
                                        placeholder='Your email address'
                                        name='email'
                                        style={{ width: "48%", marginLeft: "5px" }}
                                    />
                                    <Form.Control
                                        type='text'
                                        placeholder='Your phone number'
                                        name='phone'
                                        style={{ width: "48%", marginLeft: "5px" }}
                                    />
                                </Row>
                            </Form.Group>
                            <Form.Group>
                                <Form.Label htmlFor='license'>Driver's License</Form.Label>
                                <Form.Control
                                    type='text'
                                    placeholder="Driver's License Number"
                                    name='license'
                                />
                            </Form.Group>
                            <Form.Group>
                                <Form.Label htmlFor='Address'>Address</Form.Label>
                                <Form.Control
                                    type='text'
                                    placeholder='Address'
                                    name='address'
                                />
                                <br />
                                <Row>
                                    <Form.Control
                                        type='text'
                                        placeholder='City'
                                        name='city'
                                        style={{ width: "28%" }}
                                        xs={6}
                                    />
                                    <Form.Control
                                        type='text'
                                        placeholder='State'
                                        name='state'
                                        style={{ width: "20%", marginLeft: "5px" }}
                                    />
                                    <Form.Control
                                        type='text'
                                        placeholder='ZIP/Postal Code'
                                        name='zipcode'
                                        style={{ width: "20%", marginLeft: "5px" }}
                                    />
                                    <Form.Control
                                        type='text'
                                        placeholder='Country'
                                        name='country'
                                        style={{ width: "25%", marginLeft: "5px" }}
                                    />
                                </Row>
                            </Form.Group>
                            <Form.Group>
                                <Row>
                                    <Form.Label htmlFor="experience" style={{ width: "48%", marginLeft: "10px" }}>Housing</Form.Label>
                                    <Form.Label htmlFor="experience" style={{ width: "48%", marginLeft: "5px" }}>Years of experience with animals</Form.Label>
                                </Row>
                                <Row>
                                    <Form.Control
                                        as="select"
                                        name='housing'
                                        style={{ width: "48%", marginLeft: "5px" }}>
                                        <option value="field1">Owner</option>
                                        <option value="field2">Renter</option>
                                        <option value="field3">Other</option>
                                    </Form.Control>
                                    <Form.Control
                                        as="select"
                                        name='experience'
                                        style={{ width: "48%", marginLeft: "5px" }}>
                                        <option value="field1">No experience</option>
                                        <option value="field2">0-2 years</option>
                                        <option value="field3">2-5 years</option>
                                        <option value="field4">5-10 years</option>
                                        <option value="field5">10+ years</option>
                                    </Form.Control>
                                </Row>
                            </Form.Group>
                            <br></br>
                            <Card.Title className="text-center">Playdate Request Info</Card.Title>
                            <Form.Group>
                                <h5>Request Date:</h5>
                                <Form.Label>
                                    From:
                                    <DatePicker
                                        
                                    />
                                </Form.Label>
                                <Form.Label>
                                    To:
                                    <DatePicker
                                        
                                    />
                                </Form.Label>
                            </Form.Group>
                            <Form.Group>
                                <h5>Enviornment:</h5>
                                <p>Give us a sneak peek of your enviornment to see if it will fit the needs of the animal you are requesting.</p>
                                <Form.Check
                                    type="checkbox"
                                    label="Children 5yrs old or younger living in your home?">
                                </Form.Check>
                                <Form.Check
                                    type="checkbox"
                                    label="Children ages 6-17 years old living in your home?">
                                </Form.Check>
                                <Form.Check
                                    type="checkbox"
                                    label="Other adults 18+ living in your home?">
    
                                    </Form.Check>
                                <Form.Check
                                    type="checkbox"
                                    label="Other animals in the house? List name, age, and type of animal.">
    
                                </Form.Check>
                                <br></br>
                                <Form.Label>
                                    If answered yes above, please list all animals currently living at your home.
                                    <Form.Control
                                        as="textarea"
                                        style={{ width: '350px', resize: 'both' }}>
                                    </Form.Control>
                                </Form.Label>
                                <br></br>
                                <Form.Label>
                                    If you are renting the home, please provide landlord's or property manager's contact info below:
                                    <Form.Control
                                        as="textarea"
                                        style={{ width: '350px', resize: 'both' }}
                                        >
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
                                    >
                                </Form.Control>
                            </Form.Group>
                        </Card.Text>
                        <Row className='text-center'>
                            <Col sm={6}>
                                <Button variant="success" size="lg">
                                    Accept
                                </Button> {' '}
                            </Col>
                            <Col sm={4}>
                                <Button variant="danger" size="lg">
                                    Deny
                                </Button>
                            </Col>
                        </Row>
                    </Card.Body>
                    <Card.Footer className="text-muted, text-center">
                        2 days ago
                    </Card.Footer>
                </Card>
            </>
        )
    }


    const handleApplication = async (approvalStatus) => {
        await processApplication({
            variables: {id: props.data._id, approvalStatus: approvalStatus}
        });
    }

    return (
        <>
            <Card>
                <Card.Header className="text-center">{props.data.pet.name} ({props.data.pet.petId})</Card.Header>
                <Card.Body>
                    <Card.Title className="text-center">Applicant Contact Info</Card.Title>
                    <Card.Text>
                        <Form.Group>
                            <Form.Label htmlFor="name">Name</Form.Label>
                            <Row className="justify-content-md-center">
                                <Form.Control
                                    type='text'
                                    placeholder='First Name'
                                    name='firstname'
                                    style={{ width: "48%", marginRight: "5px" }}
                                    value={props.data.user.firstname}
                                />
                                <Form.Control
                                    type='text'
                                    placeholder='Last Name'
                                    name='lastname'
                                    style={{ width: "48%", marginLeft: "5px" }}
                                    value={props.data.user.lastname}
                                />
                            </Row>
                        </Form.Group>
                        <Form.Group>
                            <Row>
                                <Form.Label htmlFor="experience" style={{ width: "49%", marginLeft: "10px" }}>Email</Form.Label>
                                <Form.Label htmlFor="experience" style={{ width: "40%", marginLeft: "0px" }}>Phone Number</Form.Label>
                            </Row>
                            <Row>
                                <Form.Control
                                    type='email'
                                    placeholder='Your email address'
                                    name='email'
                                    style={{ width: "48%", marginLeft: "5px" }}
                                    value={props.data.user.email}
                                />
                                <Form.Control
                                    type='text'
                                    placeholder='Your phone number'
                                    name='phone'
                                    style={{ width: "48%", marginLeft: "5px" }}
                                    value={props.data.user.phone}
                                />
                            </Row>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label htmlFor='license'>Driver's License</Form.Label>
                            <Form.Control
                                type='text'
                                placeholder="Driver's License Number"
                                name='license'
                                value={props.data.user.license}
                            />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label htmlFor='Address'>Address</Form.Label>
                            <Form.Control
                                type='text'
                                placeholder='Address'
                                name='address'
                                value={props.data.user.address}
                            />
                            <br />
                            <Row>
                                <Form.Control
                                    type='text'
                                    placeholder='City'
                                    name='city'
                                    style={{ width: "28%" }}
                                    xs={6}
                                    value={props.data.user.city}
                                />
                                <Form.Control
                                    type='text'
                                    placeholder='State'
                                    name='state'
                                    style={{ width: "20%", marginLeft: "5px" }}
                                    value={props.data.user.state}
                                />
                                <Form.Control
                                    type='text'
                                    placeholder='ZIP/Postal Code'
                                    name='zipcode'
                                    style={{ width: "20%", marginLeft: "5px" }}
                                    value={props.data.user.zipcode}
                                />
                                <Form.Control
                                    type='text'
                                    placeholder='Country'
                                    name='country'
                                    style={{ width: "25%", marginLeft: "5px" }}
                                    value={props.data.user.country}
                                />
                            </Row>
                        </Form.Group>
                        <Form.Group>
                            <Row>
                                <Form.Label htmlFor="experience" style={{ width: "48%", marginLeft: "10px" }}>Housing</Form.Label>
                                <Form.Label htmlFor="experience" style={{ width: "48%", marginLeft: "5px" }}>Years of experience with animals</Form.Label>
                            </Row>
                            <Row>
                                <Form.Control
                                    as="select"
                                    name='housing'
                                    style={{ width: "48%", marginLeft: "5px" }} value={props.data.user.housing}>
                                </Form.Control>
                                <Form.Control
                                    as="select"
                                    name='experience'
                                    style={{ width: "48%", marginLeft: "5px" }} value={props.data.user.experience}>
                                   
                                </Form.Control>
                            </Row>
                        </Form.Group>
                        <br></br>
                        <Card.Title className="text-center">Playdate Request Info</Card.Title>
                        <Form.Group>
                            <h5>Request Date:</h5>
                            <Form.Label>
                                From:
                                <DatePicker
                                />
                            </Form.Label>
                            <Form.Label>
                                To:
                                <DatePicker
                                />
                            </Form.Label>
                        </Form.Group>
                        <Form.Group>
                            <h5>Enviornment:</h5>
                            <p>Give us a sneak peek of your enviornment to see if it will fit the needs of the animal you are requesting.</p>
                            <Form.Check
                                type="checkbox"
                                label="Children 5yrs old or younger living in your home?"
                               >
                            </Form.Check>
                            <Form.Check
                                type="checkbox"
                                label="Children ages 6-17 years old living in your home?"
                                >
                            </Form.Check>
                            <Form.Check
                                type="checkbox"
                                label="Other adults 18+ living in your home?"
                                >

                                </Form.Check>
                            <Form.Check
                                type="checkbox"
                                label="Other animals in the house? List name, age, and type of animal.">

                            </Form.Check>
                            <br></br>
                            <Form.Label>
                                If answered yes above, please list all animals currently living at your home.
                                <Form.Control
                                    as="textarea"
                                    style={{ width: '350px', resize: 'both' }}>
                                </Form.Control>
                            </Form.Label>
                            <br></br>
                            <Form.Label>
                                If you are renting the home, please provide landlord's or property manager's contact info below:
                                <Form.Control
                                    as="textarea"
                                    style={{ width: '350px', resize: 'both' }}
                                    >
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
                                >
                            </Form.Control>
                        </Form.Group>
                    </Card.Text>
                    <Row className='text-center'>
                        <Col sm={6}>
                            <Button variant="success" size="lg" onClick={() => handleApplication(1)}>
                                Accept
                            </Button> {' '}
                        </Col>
                        <Col sm={4}>
                            <Button variant="danger" size="lg" onClick={() => handleApplication(2)}>
                                Deny
                            </Button>
                        </Col>
                    </Row>
                </Card.Body>
                <Card.Footer className="text-muted, text-center">
                    2 days ago
                </Card.Footer>
            </Card>
        </>
    )
}

export default ViewingRequest;