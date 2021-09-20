import React, { useState } from 'react'
import { Container, ButtonCalc, ButtonCalcDel, ButtonCalcEqual, 
         ButtonCalcReset, BoxNumber, TitleContent, Title, Screen, 
         OperationScreen, ResultScreen, ResultContent, NumberRow } from './style.js'
import { evaluate } from 'decimal-eval'

const Calculator = () => {

  const [screenValue, setScreenValue] = useState('')
  const [result, setResult] = useState(0)
  const [operator, setOperator] = useState(false)

  const Tela = (value, res) => {
    return (
      <Screen>
        <OperationScreen>
          <span>{value}</span>
        </OperationScreen>
        <ResultScreen>
          <span>{res}</span>
        </ResultScreen>
      </Screen>
    )
  }

  const digitScreenAdd = (digit) => {
    if ((digit === '+' || digit === '-' || digit === '/' || digit === '*') && operator) {
      setOperator(false)
      setScreenValue(result + digit)
      return
    }

    if (operator) {
      setScreenValue(digit)
      setOperator(false)
      return
    }
    const digitValueScreen = screenValue + digit
      setScreenValue(digitValueScreen)
  }

  const cleanMemory = () => {
    setOperator(false)
    setScreenValue('')
    setResult(0)
    return
  }

  const operatorButton = (oper) => {

    if (oper === 'bs') {
      let vscreen = screenValue
      vscreen = vscreen.substring(0, (vscreen.length - 1))
      setScreenValue(vscreen)
      setOperator(false)
      return
    }
    try {
      const result = evaluate(screenValue)
      setResult(result)
      setOperator(true)
    }
    catch (e) {
      setResult('ERROR')
    }
  }

  return (
    <Container>
      <TitleContent>
        <Title>Calc</Title>
      </TitleContent>
      <ResultContent>
        {Tela(screenValue, result)}
      </ResultContent>
      <BoxNumber>
        <NumberRow>
          <ButtonCalc onClick={() => digitScreenAdd('7')}>7</ButtonCalc>
          <ButtonCalc onClick={() => digitScreenAdd('8')}>8</ButtonCalc>
          <ButtonCalc onClick={() => digitScreenAdd('9')}>9</ButtonCalc>
          <ButtonCalcDel onClick={() => operatorButton('bs')}></ButtonCalcDel>
        </NumberRow>
        <NumberRow>
          <ButtonCalc onClick={() => digitScreenAdd('4')}>4</ButtonCalc>
          <ButtonCalc onClick={() => digitScreenAdd('5')}>5</ButtonCalc>
          <ButtonCalc onClick={() => digitScreenAdd('6')}>6</ButtonCalc>
          <ButtonCalc onClick={() => digitScreenAdd('+')}>+</ButtonCalc>
        </NumberRow>
        <NumberRow>
          <ButtonCalc onClick={() => digitScreenAdd('1')}>1</ButtonCalc>
          <ButtonCalc onClick={() => digitScreenAdd('2')}>2</ButtonCalc>
          <ButtonCalc onClick={() => digitScreenAdd('3')}>3</ButtonCalc>
          <ButtonCalc onClick={() => digitScreenAdd('-')}>-</ButtonCalc>
        </NumberRow>
        <NumberRow>
          <ButtonCalc onClick={() => digitScreenAdd('.')}>.</ButtonCalc>
          <ButtonCalc onClick={() => digitScreenAdd('0')}>0</ButtonCalc>
          <ButtonCalc onClick={() => digitScreenAdd('/')}>/</ButtonCalc>
          <ButtonCalc onClick={() => digitScreenAdd('*')}>*</ButtonCalc>
        </NumberRow>
        <NumberRow>
          <ButtonCalcReset onClick={() => cleanMemory('')}></ButtonCalcReset>
          <ButtonCalcEqual onClick={() => operatorButton('=')}>=</ButtonCalcEqual>
        </NumberRow>
      </BoxNumber>
    </Container>
  )
}

export default Calculator