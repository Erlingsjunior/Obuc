import React from 'react';
import { Table, Button } from 'react-bootstrap';
import './MainTable.css';

class MainTable extends React.Component {
    render() {

        const handleDelete = () => {

        }

        return (

            <Table className="div" striped bordered hover >
                <thead>
                    <tr>
                        <th>Funcionário</th>
                        <th>Prédio</th>
                        <th>Local de Trabalho</th>
                        <th></th>
                    </tr>
                </thead>

                {this.props.main.map((dado) =>
                    <tbody><tr>
                        <td>{dado.funcionario}</td>
                        <td>{dado.predio}</td>
                        <td>{dado.local}</td>
                        <td>
                            <Button variant="outline-primary">Editar</Button>{' '}
                            <Button onClick={() => this.props.handleDelete(dado)} variant="outline-primary">Deletar</Button>{' '}
                        </td>
                    </tr></tbody>)}
            </Table>
        )
    }
}

export default MainTable;