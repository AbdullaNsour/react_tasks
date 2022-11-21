import { useState, useEffect } from "react";
import axios from "axios";
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { useNavigate, useParams } from "react-router-dom";

export default function ListUser() {
    const navigate = useNavigate();

    const [inputs, setInputs] = useState([]);

    const {id} = useParams();

    useEffect(() => {
        getUser();
    }, []);

    function getUser() {
        axios.get(`http://localhost:8888/api/user/${id}`).then(function(response) {
            console.log(response.data);
            setInputs(response.data);
        });
    }

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({...values, [name]: value}));
    }
    const handleSubmit = (event) => {
        event.preventDefault();

        axios.put(`http://localhost:8888/api/user/${id}/edit`, inputs).then(function(response){
            console.log(response.data);
            navigate('/');
        });
        
    }
    return (
        <div>
            <h1>Edit user</h1>
            <Form onSubmit={handleSubmit}>
                <InputGroup className="mb-3">
                    <label>Name: </label>
                    <InputGroup value={inputs.name} type="text" name="name" onChange={handleChange} />
                    <label>Email: </label>
                    <InputGroup value={inputs.email} type="text" name="email" onChange={handleChange} />
                    <label>Mobile:</label> 
                    <InputGroup value={inputs.mobile} type="text" name="mobile" onChange={handleChange} /> 
                    <button>Save</button>
                </InputGroup>
            </Form>
        </div>
    )
}