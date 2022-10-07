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

<<<<<<< HEAD
  //this is to pull up the accepted or denied reques from local storage
  //const pullApproved = function() {
   
  

//   return (
//     <div>
//       <h1>Pawsitive Pals Requests</h1>
//       <container>View Individual Requests</container>
//       <ul>Open Requests</ul>
//       <li>Request 1</li>
//       <li>Request 2</li>
//       <li>Request 3</li>
//       <li>Request 4</li>
//       <li>Request 5</li>
//       <button>View Approved</button>
//       <button>View Denied</button>
//       </div>
//   )
// }
// export default RequestQueue;
=======
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
>>>>>>> 39a60692cd75de1d654da926d2f6dda5128a650c

