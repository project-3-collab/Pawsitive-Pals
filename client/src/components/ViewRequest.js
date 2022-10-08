import React, { useState } from 'react';
import { Form, Row, Button, Card } from 'react-bootstrap';
import UserSignUpForm from './SignupForm';
import PlaydateRequestForm from './PlaydateRequest';

const ViewingRequest = () => {
    const handleAcceptRequest = () => {

    }
    const handleDenyRequest = () => {

    }

    return (
        <>
            <Card>
                <Card.Header className="text-center">Applicant Username</Card.Header>
                <Card.Body>
                    <Card.Title className="text-center">Pet name (pet ID)</Card.Title>
                    <Card.Text>
                        <Form.Group>
                            <Form.Label htmlFor="name">Name</Form.Label>
                            <Row className="justify-content-md-center">
                                <Form.Control
                                    type='text'
                                    placeholder='First Name'
                                    name='firstname'
                                    style={{ width: "47%", marginRight: "2px" }}
                                />
                                <Form.Control
                                    type='text'
                                    placeholder='Last Name'
                                    name='lastname'
                                    style={{ width: "46%", marginLeft: "2px" }}
                                />
                            </Row>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label htmlFor='email'>Email & Phone number</Form.Label>
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
                                <Form.Label htmlFor="experience" style={{ width: "48%", marginLeft: "5px" }}>Housing</Form.Label>
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
                    </Card.Text>
                    <Button action variant="success" size="lg" onClick={handleAcceptRequest}>
                        Accept
                    </Button> {' '}
                    <Button action variant="danger" size="lg" onClick={handleDenyRequest}>
                        Deny
                    </Button>
                </Card.Body>
                <Card.Footer className="text-muted, text-center">
                    2 days ago
                </Card.Footer>
            </Card>
        </>
    )
}

export default ViewingRequest;