import React, { Component } from 'react'


const LINHAS = prompt("Digite a quantidade de Linhas da Matriz");
const COLUNAS = prompt("Digite a quantidade de colunas da Matriz");

const MATRIZ = [];

for (let i = 0; i < LINHAS; i++) {
    MATRIZ[i] = [];
    for (let j = 0; j < COLUNAS; j++) {
        MATRIZ[i][j] = '';
    }
}

for (let i = 0; i < LINHAS; i++) {
    for (let j = 0; j < COLUNAS; j++) {
        MATRIZ[i][j] = '';
    }
}

export default class teste extends Component {
    render() {
        return (
            <h1>Teste2</h1>
        )
    }
};

