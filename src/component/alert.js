import React, { useState } from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Toast from 'react-bootstrap/Toast';

function Alert() {
    const [show, setShow] = useState(false);
    const [type, setType] = useState('Danger');
    const [text, setText] = useState('A user with this email does not exist');
    console.log("sdfsdfsdf");
    return (
        <Row>
            <Col xs={6}>
                <Toast bg={type.toLowerCase()} onClose={() => setShow(false)} show={show} delay={3000} autohide>

                    <Toast.Body>{`${text}!`}</Toast.Body>
                </Toast>
            </Col>
            {/* <Col xs={6}>
                <Button onClick={() => setShow(true)}>Show Toast</Button>
            </Col> */}
        </Row>
    );
}

export default Alert;