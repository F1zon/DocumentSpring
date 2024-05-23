import React, { useEffect, useState } from 'react';
import { Button, ButtonGroup, Container, Table } from 'reactstrap';
import AppNavbar from './AppNavbar';
import { Link } from 'react-router-dom';

const DockList = () => {

    const [docks, setDocks] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);

        fetch('/api/v1/docks')
            .then(response => response.json())
            .then(data => {
                setBooks(data);
                setLoading(false);
            })
    }, []);

    const remove = async (id) => {
        await fetch(`/api/v1/dock/${id}`, {
            method: 'DELETE',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        }).then(() => {
            let updatedDocks = [...docks].filter(i => i.id !== id);
            setDocks(updatedDocks);
        });
    }

    if (loading) {
        return <p>Loading...</p>;
    }

    const dockList = docks.map(dock => {
        return <tr key={dock.id}>
            <td style={{whiteSpace: 'nowrap'}}>{dock.view}</td>
            {/* <td> {dock.author || ''} </td> */}
            {/* <td> {dock.year || ''} </td> */}
            <td>
                <ButtonGroup>
                    <Button size="sm" color="primary" tag={Link} to={"/books/" + dock.id}>Edit</Button>
                    <Button size="sm" color="danger" onClick={() => remove(dock.id)}>Delete</Button>
                </ButtonGroup>
            </td>
        </tr>
    });

    return (
        <div>
            <AppNavbar>
                <tr></tr>
                <Container fluid>
                    <div className="float-end">
                        <Button color="success" tag={Link} to="/docks/new">Add Book</Button>
                    </div>
                    <h3>My Docks</h3>
                    <Table className="mt-4">
                        <thead>
                            <tr>
                                <th width="20%">View</th>
                                <th width="20%">Date</th>
                                <th width="20%">Description</th>
                                <th width="20%">Patient</th>
                                <th width="20%">State</th>
                                <th width="10%">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {dockList}
                        </tbody>
                    </Table>
                </Container>
            </AppNavbar>
        </div>
    );
};

export default DockList;