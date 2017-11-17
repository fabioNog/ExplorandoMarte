import React, { Component } from 'react'
import Nave from './nave'
import { Divider } from 'material-ui/Divider';

// const LINHAS = prompt("Digite a quantidade de Linhas da Matriz");
// const COLUNAS = prompt("Digite a quantidade de colunas da Matriz");

// const MATRIZ = [];

// for (let i = 0; i < LINHAS; i++) {
//     MATRIZ[i] = [];
//     for (let j = 0; j < COLUNAS; j++) {
//         MATRIZ[i][j] = '';
//     }
// }

// for (let i = 0; i < LINHAS; i++) {
//     for (let j = 0; j < COLUNAS; j++) {
//         MATRIZ[i][j] = '';
//     }
// }

export default class teste extends Component {
    render() {

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


        for (let i = 0; i < LINHAS; i++) {
            for (let j = 0; j < COLUNAS; j++) {
                MATRIZ[i][j] = prompt("Digite um valor para inserir")
            }
        }

        var VALORES = '';

        for (let L = 0; L < LINHAS; L++) {
            for (let C = 0; C < COLUNAS; C++) {
                if(C < COLUNAS)
                VALORES += MATRIZ[L][C]
            }
        }
        return (
            <div>
            {console.log(VALORES)}
            </div>
        )
    }
};

