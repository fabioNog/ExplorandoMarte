import React, { Component } from 'react';


import TextField from 'material-ui/TextField';

// Grid Row e Colunas
import { Grid, Row, Col } from 'react-flexbox-grid';

// Botões

import RaisedButton from 'material-ui/RaisedButton';

const styles = {


    paper2: {
        width: '100%',
        padding: 3,
        paddingTop: 10,
        minHeight: 30,
        marginBottom: 10,
        border: '1px solid #3F51B5',
        // border: '1px solid teal',
        borderRadius: '10px',
        // opacity: 0.7,

    },

    botoonStyle: {
        width: '50%',
        padding: 3,
        paddingTop: 10,
        minHeight: 30,
        marginBottom: 10,
        // border: '1px solid teal',
        borderRadius: '10px',
        // opacity: 0.7,
    },

    gridStyle: {
        width: '70%',
        padding: 0,
        paddingTop: '1px',
        marginTop: 50,

        //  backgroundColor: blueGrey800,
        // border: '1px solid #3F51B5',
        borderRadius: '20px',
        // opacity: 0.7,
        backgroundImage: `url(${'../img/logo-colorida-branca-linha.png'})`
    },

    flatButtonStyle: {
        background: 'red',
    },

    titulo: {
        color: '#F24236',

        fontFamily: 'Arial',
        fontSize: 50,
    }
};

export default class Form extends Component {
    
    
        _sendForm(e) {
            e.preventDefault();
            var _data = {
                superior: document.getElementById('superior').value,
                coordenada1: document.getElementById('coordenada1').value,
            };
            console.log('Formulario enviado');
        };
    
        render() {
            return (
                <div>                       
                    <div >
                        <form onSubmit={(e) => this._sendForm(e)} method="post">
                            <Grid fluid style={styles.gridStyle}>
    
                                <Row>
                                    <Col xs={12} md={12} lg={8} lgOffset={2}  >
                                        <h1 style={styles.titulo}>Explorando Marte</h1>
                                    </Col>
    
                                </Row>
    
                                <Row>
                                    <Col xs={12} md={12} lg={8} lgOffset={1}>
                                        <h1> Insira as instruções para a nave:</h1>
                                    </Col>
    
                                </Row>
    
                                <Row>
                                    <Col xs={12} md={12} lg={6} lgOffset={1} >
                                        <TextField style={styles.paper2} floatingLabelText={'Coordenadas do canto superior a direita:'}  />
                                    </Col>
    
                                    <Col xs={8} md={12} lg={4}  >
    
                                        <RaisedButton label="Superior" primary={true} style={styles.botoonStyle} type="submit" />
                                    </Col>
    
                                </Row>
    
    
                                <Row>
                                    <Col xs={12} md={12} lg={6} lgOffset={1} >
                                        <TextField style={styles.paper2} floatingLabelText={'Coordenadas no plano cartesiano da primeira nave:'} />
                                    </Col>
    
                                    <Col xs={8} md={12} lg={4}  >
                                        <RaisedButton label="coordenada1" primary={true} style={styles.botoonStyle} type="submit" />
                                    </Col>
    
                                </Row>
    
    
                                <Row>
                                    <Col xs={12} md={12} lg={6} lgOffset={1} >
                                        <TextField style={styles.paper2} floatingLabelText={'Instruções de navegação da nave 1:'} />
                                    </Col>
    
                                    <Col xs={8} md={12} lg={4}  >
                                        <RaisedButton label="instrucoes" primary={true} style={styles.botoonStyle} type="submit" />
                                    </Col>
    
                                </Row>
    
                                <Row>
                                    <Col xs={12} md={12} lg={6} lgOffset={1} >
                                        <TextField style={styles.paper2} floatingLabelText={'Coordenadas no plano cartesiano da segunda nave:'} />
                                    </Col>
    
                                    <Col xs={8} md={12} lg={4}  >
    
                                        <RaisedButton label="coordenada2" primary={true} style={styles.botoonStyle} type="submit" />
                                    </Col>
    
                                </Row>
    
    
                                <Row>
                                    <Col xs={12} md={12} lg={6} lgOffset={1} >
                                        <TextField style={styles.paper2} floatingLabelText={'Instruções de navegação da nave 2:'} />
                                    </Col>
    
                                    <Col xs={8} md={12} lg={4}  >
                                        <RaisedButton label="instrucoes" primary={true} style={styles.botoonStyle} type="submit=" />
                                    </Col>
                                </Row>
                            </Grid>
                            
    
                        </form>
                    </div>
                </div>
            )
        }
    }
    