//request queue on sidebar that shows pending requests, approved and denied requests
import { ListGroup, Col, Tab, Tabs } from 'react-bootstrap';

const RequestQueue = () => {

    const ClickSingleRequest = (event) => {
        console.log('clicked');
    }

    const ClickViewApproved = (event) => {
        console.log('AllApproved');

        const ClickViewDenied = (event) => {
            console.log('AllDenied');
        }

    }

    return (
        <>
            <Tabs
                defaultActiveKey="pending"
                id="fill-tab-example"
                className="mb-3"
                justify>
                <Tab eventKey="pending" title="Pending">
                    <ListGroup as="ol">
                        <ListGroup.Item
                            as="li"
                            className="d-flex justify-content-between align-items-start"
                            action variant="warning">

                            <div className="ms-2 me-auto">
                                <div className="fw-bold">Username</div>
                                Pet Name (Pet ID, Pet type)
                            </div>
                        </ListGroup.Item>
                    </ListGroup>
                </Tab>
                <Tab eventKey="approved" title="Approved">
                    <ListGroup as="ol">
                        <ListGroup.Item
                            as="li"
                            className="d-flex justify-content-between align-items-start"
                            action variant="success">

                            <div className="ms-2 me-auto">
                                <div className="fw-bold">Username</div>
                                Pet Name (Pet ID, Pet type)
                            </div>
                        </ListGroup.Item>
                    </ListGroup>
                </Tab>
                <Tab eventKey="denied" title="Denied">
                <ListGroup as="ol">
                    <ListGroup.Item
                        as="li"
                        className="d-flex justify-content-between align-items-start"
                        action variant="danger">

                        <div className="ms-2 me-auto">
                            <div className="fw-bold">Username</div>
                            Pet Name (Pet ID, Pet type)
                        </div>
                    </ListGroup.Item>
                </ListGroup>
                </Tab>
            </Tabs>
            {/* list of pending requests */}
            {/* <Col>
                <h4>Pending Requests</h4>

            </Col> */}

            {/* list of approved requests */}
            {/* <Col>
                <h4>Approved Requests</h4>

            </Col> */}

            {/* list of denied requests */}
            {/* <Col>
                <h4>Denied Requests</h4>
                
            </Col> */}
        </>
    )
}
export default RequestQueue;

