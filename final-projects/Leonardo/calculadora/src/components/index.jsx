import React, { useState } from 'react'
import { Container, ButtonCalc, ButtonCalcDel, ButtonCalcEqual, ButtonCalcReset, BoxNumber, TitleContent, Title, Screen, OperationScreen, ResultScreen, ResultContent, ContentButtonOperation, ContentButtonResult, NumberRow } from './style.js'
import { evaluate } from 'decimal-eval'

const Calculator = () => {

  const [valorTela, setValorTela] = useState('')
  const [resultado, setResultado] = useState(0)
  const [acumulador, setAcumulador] = useState(0)
  const [operado, setOperado] = useState(false)

  const Tela = (valor, res) => {
    return (
      <Screen>
        <OperationScreen>
          <span>{valor}</span>
        </OperationScreen>
        <ResultScreen>
          <span>{res}</span>
        </ResultScreen>
      </Screen>
    )
  }

  const Btn = (label, onclick, color) => {
    return (

      <ContentButtonOperation>
        <button onClick={onclick}>{label}</button>
      </ContentButtonOperation>
    )
  }

  const BtnRes = (label, onclick, color) => {
    return (
      <ContentButtonResult>
        <button onClick={onclick}>{label}</button>
      </ContentButtonResult>
    )
  }

  const addDigitoTela = (digito) => {
    if ((digito === '+' || digito === '-' || digito === '/' || digito === '*') && operado) {
      setOperado(false)
      setValorTela(resultado + digito)
      return
    }

    if (operado) {
      setValorTela(digito)
      setOperado(false)
      return
    }
    const valorDigitadoTela = valorTela + digito
    setValorTela(valorDigitadoTela)
  }

  const limparMemoria = () => {
    setOperado(false)
    setValorTela('')
    setResultado(0)
    setAcumulador(0)
    return
  }

  const Operacao = (oper) => {

    if (oper === 'bs') {
      let vtela = valorTela
      vtela = vtela.substring(0, (vtela.length - 1))
      setValorTela(vtela)
      setOperado(false)
      return
    }
    try {
      const result = evaluate(valorTela)
      setAcumulador(result)
      setResultado(result)
      setOperado(true)
    }
    catch (e) {
      setResultado('ERROR')
    }
  }

  return (
    <Container>
      <TitleContent>
        <Title>Calc</Title>
      </TitleContent>
      <ResultContent>
        {Tela(valorTela, resultado)}
      </ResultContent>
      <BoxNumber>
        <NumberRow>
          <ButtonCalc onClick={() => addDigitoTela('7')}>7</ButtonCalc>
          <ButtonCalc onClick={() => addDigitoTela('8')}>8</ButtonCalc>
          <ButtonCalc onClick={() => addDigitoTela('9')}>9</ButtonCalc>
          <ButtonCalcDel onClick={() => Operacao('bs')}>DEL</ButtonCalcDel>
        </NumberRow>
        <NumberRow>
          <ButtonCalc onClick={() => addDigitoTela('4')}>4</ButtonCalc>
          <ButtonCalc onClick={() => addDigitoTela('5')}>5</ButtonCalc>
          <ButtonCalc onClick={() => addDigitoTela('6')}>6</ButtonCalc>
          <ButtonCalc onClick={() => addDigitoTela('+')}>+</ButtonCalc>
        </NumberRow>
        <NumberRow>
          <ButtonCalc onClick={() => addDigitoTela('1')}>1</ButtonCalc>
          <ButtonCalc onClick={() => addDigitoTela('2')}>2</ButtonCalc>
          <ButtonCalc onClick={() => addDigitoTela('3')}>3</ButtonCalc>
          <ButtonCalc onClick={() => addDigitoTela('-')}>-</ButtonCalc>
        </NumberRow>
        <NumberRow>
          <ButtonCalc onClick={() => addDigitoTela('.')}>.</ButtonCalc>
          <ButtonCalc onClick={() => addDigitoTela('0')}>0</ButtonCalc>
          <ButtonCalc onClick={() => addDigitoTela('/')}>/</ButtonCalc>
          <ButtonCalc onClick={() => addDigitoTela('*')}>*</ButtonCalc>
        </NumberRow>
        <NumberRow>
          <ButtonCalcReset onClick={() => limparMemoria('')}>RESET</ButtonCalcReset>
          <ButtonCalcEqual onClick={() => Operacao('=')}>=</ButtonCalcEqual>
        </NumberRow>
      </BoxNumber>
    </Container>
  )
}

export default Calculator