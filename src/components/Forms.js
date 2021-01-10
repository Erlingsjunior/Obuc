import React from 'react';
import { Button, Form } from 'react-bootstrap';
import './Forms.css';


class Forms extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            funcionario: '',
            predio: 'Predio 1',
            local: ''
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleResetForm = this.handleResetForm.bind(this);
    }

    handleResetForm() {
        this.setState({
            funcionario: '',
            predio: 'Predio 1',
            local: ''
        });
    }

    handleSubmit() {
        this.props.handleSubmit(this.state)
        this.handleResetForm();
    }

    render() {
        return (
            <Form className="displayFlex">
                <Form.Group>
                    <label htmlFor="funcionario">Funcionário</label>
                    <Form.Control
                        id="funcionario"
                        type="text"
                        placeholder="digite seu nome"
                        value={this.state.funcionario}
                        onChange={(event) => this.setState({ funcionario: event.target.value })}
                    />
                </Form.Group>
                <Form.Group controlId="exampleForm.SelectCustom">
                    <Form.Label htmlFor="predio">Prédio</Form.Label>

                    <Form.Control
                        id="predio"
                        as="select" custom
                        value={this.state.predio}
                        onChange={(event) => this.setState({ predio: event.target.value })}
                    >
                        <option value="Predio 1">Predio 1</option>
                        <option value="Predio 2">Predio 2</option>
                        <option value="Predio 3">Predio 3</option>
                    </Form.Control>
                </Form.Group>
                <Form.Group>
                    <label htmlFor="local">Local de Trabalho</label>
                    <Form.Control
                        id="local"
                        type="text"
                        placeholder="digite seu local"
                        value={this.state.local}
                        onChange={(event) => this.setState({ local: event.target.value })}
                    />
                </Form.Group>
                <Button id="botao" variant="secondary" size="sm" active onClick={this.handleSubmit}> + </Button>
            </Form>
        )
    }

}

export default Forms;