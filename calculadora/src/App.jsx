import { useState } from 'react'

import './App.css'

import Message from './components/Message'

function App() {
  const [message, setMessage] = useState ('')//primeiro num
  const [secondNum, setSecondNum] = useState('')
  const [Op,SetOp] = useState('')
  const [result, SetResult] = useState('')

  function clear() {
    setMessage('')
    setSecondNum('')
    SetOp('')
    SetResult('')
    
    
  }

  function ADD (num) {
    Op === ''?setMessage(prev=>prev + num):setSecondNum(prev => prev + num)
    
  }
  function escolhaop (op) {
    SetOp(op)
  }

  function calculos () {
    let resultado 
    const nr1 = parseFloat(message)
    const nr2 = parseFloat(secondNum)
    switch (Op) {
      case '+':
         resultado = nr1 + nr2
        
        
        break;
      case '-':
       resultado = nr1 - nr2
        
        
        break;
      case '*':
         resultado = nr1 * nr2
       
        
        break;
      case '/':
         resultado = nr1 / nr2
        
        
        break;
    
      default: 'Error'
        break;
    }
    SetResult(resultado)
  }
  

  const exibicao = `${message} ${Op} ${secondNum} = ${result}`
  return (
    
    <>
      <div>
    
    <h1>{exibicao}</h1>

    <button onClick={() => ADD('1')}>1</button>
    <button onClick={() => ADD('2')}>2</button>
    <button onClick={() => ADD('3')}>3</button>
    <button onClick={() => ADD('4')}>4</button>
    <button onClick={() => ADD('5')}>5</button>
    <button onClick={() => ADD('6')}>6</button>
    <button onClick={() => ADD('7')}>7</button>
    <button onClick={() => ADD('8')}>8</button>
    <button onClick={() => ADD('9')}>9</button>
    <button onClick={() => ADD('0')}>0</button>
    
    <button onClick={clear}>AC</button>
    
    <button onClick={()=>escolhaop('+')}>+</button>
    <button onClick={()=>escolhaop('-')}>-</button>
    <button onClick={()=>escolhaop('*')}>*</button>
    <button onClick={()=>escolhaop('/')}>/</button>
    <button onClick={calculos}>=</button>
    
    

      </div>
     
    </>
  )
}

export default App
