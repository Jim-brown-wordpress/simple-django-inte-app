import { useEffect, useState } from "react";
import axios from "axios";
import AppCard from "./card";
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { useDispatch } from 'react-redux'
import { increment } from "../store/actions/actions";

// Define the Login function.
export const Home = () => {
    const [message, setMessage] = useState([]);
    const dispatch = useDispatch();
    const ayetstudiosUrl = 'https://www.ayetstudios.com/offers/get/13715?apiKey=b2863cecce237d7dad9a7156958e10cd&countries=DE';
    useEffect(() => {
        if (localStorage.getItem('access_token') === null) {
            window.location.href = '/login'
        }
        else {
            (async () => {
                try {


                    const { data } = await axios.get(
                        ayetstudiosUrl
                    );

                    console.log(data.offers);
                    setMessage(data.offers);
                    return (
                        <Row style={{ margin: "0px" }}>
                            {
                                message.map((app_data, index) => (

                                    <Col xs={12} md={4}>
                                        <AppCard
                                            key={index}
                                            app_data={app_data}
                                        />
                                    </Col>
                                ))
                            }
                        </Row>
                    );
                } catch (e) {
                    console.log('not auth')
                }
            })()


        };
        (async () => {
            try {
                axios.defaults.headers.common['Authorization'] =
                    `Bearer ${localStorage.getItem('access_token')}`;
                const { initData } = await axios.get(
                    `http://localhost:8000/home/${localStorage.getItem('username')}`,

                    {
                        headers: {
                            'Content-Type': 'application/json'
                        }
                    },
                );
                // data.app_datas.map(app_data => console.log(app_data.id));
                // setMessage(data.app_datas);
                console.log('sdfsdfs' + initData.token);
                dispatch(increment(initData.token));
            } catch (e) {
                console.log('not auth')
            }
        })()
    }, []);


    return (

        <Row style={{ margin: "0px" }}>
            {
                message.map((app_data, index) => (

                    <Col xs={12} md={4}>
                        <AppCard
                            key={index}
                            app_data={app_data}
                        />
                    </Col>
                ))
            }
        </Row>
    );

}
