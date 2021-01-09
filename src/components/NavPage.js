import React from 'react';
import { Button } from 'react-bootstrap';
import './NavPage.css';

class NavPage extends React.Component {
    render() {
        return (
            <div className="mb-2">
                <Button className="buttonNav" variant="primary" size="md">
                    Acessos Administrativos
                </Button>{' '}
                <Button className="buttonNav" variant="primary" size="md">
                    Serviços
                </Button>{' '}
                <Button className="buttonNav" variant="primary" size="md">
                    Fale Conosco
                </Button>{' '}
                <Button className="buttonNav" variant="primary" size="md">
                    Reporte
                </Button>{' '}
                <Button className="buttonNav" variant="primary" size="md">
                    Pesquisa de Satisfação
                </Button>{' '}
                <Button className="buttonNav" variant="primary" size="md">
                    Prédios
                </Button>{' '}
                <Button className="buttonNav" variant="primary" size="md">
                    Locais de Trabalho
                </Button>{' '}
            </div>
        )
    }
}

export default NavPage;