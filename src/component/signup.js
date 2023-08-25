import React from 'react';
import axios from 'axios';
import { useState } from "react";
import { Col, Button, Row, Container, Card, Form } from 'react-bootstrap';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Signup() {
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");

    const [confirmPassword, setConfirmPassword] = useState("");
    function validateForm() {
        return (
            email.length > 0 &&
            password.length > 0 &&
            password === confirmPassword
        );
    }
    async function handleConfirmationSubmit(event) {
        event.preventDefault();
        try {
            const user = {
                name: name,
                email: email,
                password: password,
                confirmPassword: confirmPassword,
            };
            const { data } = await
                axios.post(
                    'http://localhost:8000/register/',
                    user,
                    { headers: { 'Content-Type': 'application/json' } },
                    { withCredentials: true });
            toast.info(data.result);

            // Initialize the access & refresh token in localstorage.      
        } catch (e) {
        }
    }

    return (
        <div>
            <ToastContainer />

            <Container>
                <Row className="vh-100 d-flex justify-content-center align-items-center">
                    <Col md={8} lg={6} xs={12}>
                        <Card className="px-4">
                            <Card.Body>
                                <div className="mb-3 mt-md-4">
                                    <h2 className="fw-bold mb-2 text-center text-uppercase ">
                                        Logo
                                    </h2>
                                    <div className="mb-3">
                                        <Form.Group className="mb-3" controlId="Name">
                                            <Form.Label className="text-center">Name</Form.Label>
                                            <Form.Control type="text" placeholder="Enter Name" onChange={e => setName(e.target.value)} value={name} />
                                        </Form.Group>

                                        <Form.Group className="mb-3" controlId="formBasicEmail">
                                            <Form.Label className="text-center">
                                                Email address
                                            </Form.Label>
                                            <Form.Control type="email" placeholder="Enter email" onChange={e => setEmail(e.target.value)} value={email} />
                                        </Form.Group>

                                        <Form.Group
                                            className="mb-3"
                                            controlId="formBasicPassword"
                                        >
                                            <Form.Label>Password</Form.Label>
                                            <Form.Control type="password" placeholder="Password" onChange={e => setPassword(e.target.value)} value={password} />
                                        </Form.Group>
                                        <Form.Group
                                            className="mb-3"
                                            controlId="formBasicPassword"
                                        >
                                            <Form.Label>Confirm Password</Form.Label>
                                            <Form.Control type="password" placeholder="Password" onChange={e => setConfirmPassword(e.target.value)} value={confirmPassword} />
                                        </Form.Group>
                                        <Form.Group
                                            className="mb-3"
                                            controlId="formBasicCheckbox"
                                        ></Form.Group>
                                        <div className="d-grid">
                                            <Button variant="primary" onClick={handleConfirmationSubmit} disabled={!validateForm()} >
                                                Create Account
                                            </Button>
                                        </div>
                                        <div className="mt-3">
                                            <p className="mb-0  text-center">
                                                Already have an account??{' '}
                                                <a href="login" className="text-primary fw-bold">
                                                    Sign In
                                                </a>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}