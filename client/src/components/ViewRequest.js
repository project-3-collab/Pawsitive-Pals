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

                {/*this line will be for the accept and deny buttons*/}
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
