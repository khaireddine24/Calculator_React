import React, { useState } from 'react';
import './App.css'; 

function App() {
  const [expression, setExpression] = useState('');

  const handleClick = (value) => {
    setExpression((prevExpression) => prevExpression + value);
  };

  const evaluateExpression = () => {
    try {
      setExpression(eval(expression).toString());
    } catch (error) {
      setExpression('Error');
    }
  };

  const clearInput = () => {
    setExpression('');
  };

  return (
    <div class="cont">
  <form class="calc" name="ca">
    <input type="text" class="value" value={expression} readonly name="txt"/>
  
    <span class="num cl" onclick="ca.txt.value=''" onClick={clearInput}><i>C</i></span>
    <span class="num" onclick="ca.txt.value+='/'" onClick={() => handleClick('/')}><i>/</i></span>
    <span class="num" onclick="ca.txt.value+='*'" onClick={() => handleClick('*')}><i>*</i></span>
    <span class="num" onclick="ca.txt.value+='+'" onClick={() => handleClick('+')}><i>+</i></span>
 
    <span class="num" onclick="ca.txt.value+='7'" onClick={() => handleClick('7')}><i>7</i></span>
    <span class="num" onclick="ca.txt.value+='8'" onClick={() => handleClick('8')}><i>8</i></span>
    <span class="num" onclick="ca.txt.value+='9'" onClick={() => handleClick('9')}><i>9</i></span>
    <span class="num" onclick="ca.txt.value+='-'" onClick={() => handleClick('-')}><i>-</i></span>
 
    <span class="num" onclick="ca.txt.value+='4'" onClick={() => handleClick('4')}><i>4</i></span>
    <span class="num" onclick="ca.txt.value+='5'" onClick={() => handleClick('5')}><i>5</i></span>
    <span class="num" onclick="ca.txt.value+='6'" onClick={() => handleClick('6')}><i>6</i></span>
    <span class="num" onclick="ca.txt.value+='*'" onClick={() => handleClick('*')}><i>*</i></span>
 
    <span class="num" onclick="ca.txt.value+='1'" onClick={() => handleClick('1')}><i>1</i></span>
    <span class="num" onclick="ca.txt.value+='2'" onClick={() => handleClick('2')}><i>2</i></span>
    <span class="num" onclick="ca.txt.value+='3'" onClick={() => handleClick('3')}><i>3</i></span>
    <span class="num" onclick="ca.txt.value+='/'" onClick={() => handleClick('/')}><i>/</i></span>

    

    <span class="num" onclick="ca.txt.value+='%'" onClick={() => handleClick('%')}><i>%</i></span>
    <span class="num" onclick="ca.txt.value+='0'" onClick={() => handleClick('0')}><i>0</i></span>
    <span class="num" onclick="ca.txt.value+='.'" onClick={() => handleClick('.')}><i>.</i></span>
    <span class="num" onclick="ca.txt.value=eval(ca.txt.value)" onClick={evaluateExpression}><i>=</i></span>
  </form>
</div>
  );
}

export default App;
