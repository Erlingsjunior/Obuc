import React from 'react';
import { Button, Form } from 'react-bootstrap';
import Forms from './Forms';
import './MainPage.css';
import MainTable from './MainTable';

class MainPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            arrLocaisTrabalho: []
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
    }

    componentDidMount() {
        let arrLocaisTrabalho = JSON.parse(
            sessionStorage.getItem(
                "arrLocaisTrabalho"))
        if (arrLocaisTrabalho === null) {
            arrLocaisTrabalho = [];
        }
        this.setState({ arrLocaisTrabalho })
    }

    handleSubmit(element) {
        const { arrLocaisTrabalho } = this.state;
        this.setState({
            arrLocaisTrabalho: [
                ...arrLocaisTrabalho,
                element]
        })
        sessionStorage.setItem(
            "arrLocaisTrabalho",
            JSON.stringify([
                ...arrLocaisTrabalho,
                element]))
    }

    handleDelete(element) {
        const { arrLocaisTrabalho } = this.state;
        this.setState({
            arrLocaisTrabalho: arrLocaisTrabalho
                .filter((e) =>
                    e !== element)
        })
        sessionStorage
            .setItem("arrLocaisTrabalho",
                JSON.stringify(
                    arrLocaisTrabalho
                        .filter(
                            (e) =>
                                e !== element)
                ))
    }

    render() {

        const { arrLocaisTrabalho } = this.state

        return (
            <div>
                <header className="titulo">
                    <br />
                    <h2>Locais de Trabalho</h2>
                    <br />
                </header>
                <Forms
                    handleSubmit={this.handleSubmit}
                />

                <MainTable
                    main={arrLocaisTrabalho}
                    handleDelete={this.handleDelete}
                />
            </div>
        )
    }

}

export default MainPage;
