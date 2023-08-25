import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import axios from "axios";
import fileDownload from 'js-file-download';
import { useDispatch } from 'react-redux'
import { increment } from "../store/actions/actions";
import ReactDOM from 'react-dom/client';
function AppCard(props) {
    // console.log(props.app_data);
    const [count, setCount] = useState(props.app_data.download_count);

    const dispatch = useDispatch();
    const plusToken = (url, id) => {
        (async () => {
            try {
                // const { data } = await axios.get('http://localhost:8000/plus/' + localStorage.getItem('username') + '/' + id
                // );
                const data = { result: 'success', token_balance: 3 }
                console.log(data);
                if (data.result === "success")
                    dispatch(increment(data.token_balance));
                // console.log(data.token_balance)

                // downloadReq();
                window.open(url, "_blank", "noreferrer");
            } catch (e) {
                console.log('not auth')
            }
        })()


    };
    console.log(props.app_data.name);

    const downloadReq = () => {
        axios.get('http://localhost:8000/download/' + props.app_data.url, {
            responseType: 'blob',
        }).then(res => {
            fileDownload(res.data, props.app_data.url);
            console.log(res);
        }).catch(err => {
            console.log(err);
        })
    }

    return (

        // <Card className=" text-center m-1">
        //     <Card.Body>
        //         <Card.Title>{`${props.app_data.name}`}</Card.Title>
        //         <Card.Text>
        //             This is free Application.
        //         </Card.Text>
        //         <Button onClick={() => plusToken(`${props.app_data.tracking_link}`, `${props.app_data.id}`)} variant="primary">Download</Button>
        //     </Card.Body>
        //     <Card.Footer className="text-muted">
        //         {`token : ${props.app_data.token}`}
        //     </Card.Footer>
        // </Card>
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={props.app_data.icon} />
            <Card.Body>
                <Card.Title>{`${props.app_data.name}`}</Card.Title>
                <Card.Text>
                    {/* <TextHtml data={props.app_data.conversion_instructions} ></TextHtml> */}

                </Card.Text>
                <Button onClick={() => plusToken(`${props.app_data.tracking_link}`, `${props.app_data.id}`)} variant="primary">Download</Button>
            </Card.Body>
        </Card>
    );
}

export default AppCard;