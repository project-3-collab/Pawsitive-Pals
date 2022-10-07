//request queue on sidebar that shows pending requests, approved and denied requests
import ListGroup from 'react-bootstrap/ListGroup';

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
            {/* list of pending requests */}
            <div>
                <h4>Pending Requests</h4>
                <ListGroup as="ol">
                    <ListGroup.Item
                        as="li"
                        className="d-flex justify-content-between align-items-start"
                        action variant="warning"
                    >
                        <div className="ms-2 me-auto">
                            <div className="fw-bold">Username</div>
                            Pet Name (Pet ID, Pet type)
                        </div>
                    </ListGroup.Item>
                </ListGroup>
            </div>

            {/* list of approved requests */}
            <div>
                <h4>Approved Requests</h4>
                <ListGroup as="ol">
                    <ListGroup.Item
                        as="li"
                        className="d-flex justify-content-between align-items-start"
                        action variant="success"
                    >
                        <div className="ms-2 me-auto">
                            <div className="fw-bold">Username</div>
                            Pet Name (Pet ID, Pet type)
                        </div>
                    </ListGroup.Item>
                </ListGroup>
            </div>

            {/* list of denied requests */}
            <div>
                <h4>Denied Requests</h4>
                <ListGroup as="ol">
                    <ListGroup.Item
                        as="li"
                        className="d-flex justify-content-between align-items-start"
                        action variant="danger"
                    >
                        <div className="ms-2 me-auto">
                            <div className="fw-bold">Username</div>
                            Pet Name (Pet ID, Pet type)
                        </div>
                    </ListGroup.Item>
                </ListGroup>
            </div>
        </>
    )
}
export default RequestQueue;

