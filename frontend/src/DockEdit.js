import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { Button, Container, Form, FormGroup, Input, Label } from 'reactstrap';
import AppNavbar from './AppNavbar';

const DockEdit = () => {
    const initialFormState = {
        view: '',
        date: '',
        description: '',
        patient: '',
        state: ''
    };

    const [dock, setDock] = useState(initialFormState);
    const navigate = useNavigate();
    const { id } = useParams();

    useEffect(() => {
        if (id !== 'new') {
            fetch(`/api/v1/dock/${id}`)
                .then(response => response.json())
                .then(data => setDock(data));
        }
    }, [id, setDock]);

    const handleChange = (event) => {
        const { name, value } = event.target

        setDock({ ...dock, [name]: value})
    }

    const handleSubmit = async (event) => {
        event.preventDefault();

        await fetch(`/api/v1/dock${dock.id ? `/${dock.id}` : ''}`, {
            method: (dock.id) ? 'PUT' : 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(dock)
        });
        setDock(initialFormState);
        navigate('/docks');
    }

    const title = <h2>{dock.id ? 'Edit dock' : 'Add dock'}</h2>;

    return (<div>
        <AppNavbar>
            <Container>
                {title}
                <FormGroup>
                    <Label for="view">View</Label>
                    <input type="text" name="author" id="author" value={dock.view || ''}
                    onChange={handleChange} autoComplete="address-level1"/>
                </FormGroup>
                <FormGroup>
                    <Label for="date">Date</Label>
                    <input type="text" name="author" id="author" value={dock.date || ''}
                    onChange={handleChange} autoComplete="address-level1"/>
                </FormGroup>
                <FormGroup>
                    <Label for="description">Description</Label>
                    <input type="text" name="author" id="author" value={dock.description || ''}
                    onChange={handleChange} autoComplete="address-level1"/>
                </FormGroup>
                <FormGroup>
                    <Label for="patient">Patient</Label>
                    <input type="text" name="author" id="author" value={dock.patient || ''}
                    onChange={handleChange} autoComplete="name"/>
                </FormGroup>
                <FormGroup>
                    <Label for="state">State</Label>
                    <input type="text" name="author" id="author" value={dock.state || ''}
                    onChange={handleChange} autoComplete="address-level1"/>
                </FormGroup>
            </Container>
        </AppNavbar>
    </div>)
};

export default DockEdit;