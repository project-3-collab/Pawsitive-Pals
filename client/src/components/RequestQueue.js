//request queue on sidebar that shows pending requests, approved and denied requests
import { useQuery } from '@apollo/client';
import { ListGroup, Col, Tab, Tabs } from 'react-bootstrap';
import { QUERY_PLAYDATES } from '../utils/queries';

const RequestQueue = (props) => {

    const {loading, data } = useQuery(QUERY_PLAYDATES);

    const viewSingleRequest = (request) => {
        props.onSelectRequest(request);
    }

    // if data isn't here yet, say so
    if (loading) {
        return <h2>LOADING...</h2>;
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
                        {data.playdateRequests.filter((request) => request.approvalStatus == 0).map((request) => {
                            return (
                                <ListGroup.Item
                                as="li"
                                className="d-flex justify-content-between align-items-start"
                                action variant="warning"
                                key={request._id}
                                onClick={() => viewSingleRequest(request)}>

                                <div className="ms-2 me-auto">
                                    <div className="fw-bold">{request.requester}</div>
                                    {request.pet.name} ({request.pet.petId}, {request.pet.type})
                                </div>
                                </ListGroup.Item>
                                )
                            })
                        }
                        
                    </ListGroup>
                </Tab>
                <Tab eventKey="approved" title="Approved">
                    <ListGroup as="ol">
                        {data.playdateRequests.filter((request) => request.approvalStatus == 1).map((request) => {
                            return (
                                <ListGroup.Item
                                as="li"
                                className="d-flex justify-content-between align-items-start"
                                action variant="success"
                                key={request._id}
                                onClick={() => viewSingleRequest(request)}>
                                
                                <div className="ms-2 me-auto">
                                    <div className="fw-bold">{request.requester}</div>
                                    {request.pet.name} ({request.pet.petId}, {request.pet.type})
                                </div>
                                </ListGroup.Item>
                                )
                            })
                        }
                    </ListGroup>
                </Tab>
                <Tab eventKey="denied" title="Denied">
                <ListGroup as="ol">
                        {data.playdateRequests.filter((request) => request.approvalStatus == 2).map((request) => {
                            return (
                                <ListGroup.Item
                                as="li"
                                className="d-flex justify-content-between align-items-start"
                                action variant="danger"
                                key={request._id}
                                onClick={() => viewSingleRequest(request)}>

                                <div className="ms-2 me-auto">
                                    <div className="fw-bold">{request.requester}</div>
                                    {request.pet.name} ({request.pet.petId}, {request.pet.type})
                                </div>
                                </ListGroup.Item>
                                )
                            })
                        }
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

