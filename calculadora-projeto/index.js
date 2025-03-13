import { somar, subtrair, multiplicar, dividir } from './calculadora.js';
import moment from 'moment';

console.log('>>>> Atividade 1 <<<<')
console.log("Soma: ", somar(10, 5));
console.log("Subtração: ", subtrair(10, 5));
console.log("Multiplicação: ", multiplicar(10, 5));
console.log("Divisão: ", dividir(10, 5));

console.log('>>>> Atividade 2 <<<<')

const ano = moment().year();

function calcularIdade(anoNascimento) {
    return ano - anoNascimento;
}


const anoNascimento = 1990;
const idade = calcularIdade(anoNascimento);
console.log('Idade: ', idade);