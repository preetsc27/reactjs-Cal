import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import MyButton from './components/MyButton';

class App extends Component {

  constructor(props){
    super(props)

    this.state = {
      out: "",
      lastValue: "",
      lastOperator: "",
      newOutSet: false,
      equalToPressed: false,
      message: ""
    }

    this.theBtnClick = this.theBtnClick.bind(this)
  }

  theBtnClick(e){
    const { out, lastValue, lastOperator, newOutSet, equalToPressed } = this.state
    const gotValue = e.target.value
    console.log(gotValue)
    this.setState({
      message: ""
    })
    if(parseInt(gotValue).toString() !== "NaN"){
      let theOut = out+gotValue
      if(!newOutSet){
        theOut = gotValue
        this.setState({
          newOutSet: true
        })
      }
      this.setState({
        out: theOut,
        equalToPressed: false
      })
    }
    else{
      switch(gotValue){
        case "A/C":
          this.setState({
            out: "",
            lastValue: "",
            lastOperator: "",
            newOutSet: false,
            equalToPressed: false,
            percentageValue: "100"
          })
          break
        case "%":
          this.setState({
            message: "This calculator does not support floating points."
          })
          break
        case "+/-":
          let newOut = out.toString()
          if(newOut.startsWith("-")){
            newOut = newOut.split("")
            newOut.shift()
            newOut.join("")
          }else{
            newOut = "-" + out
          }
          this.setState({
            out: newOut
          })
          break
        case "X":
        case "+":
        case "-": 
        case "/":
        case "=":
        if((lastValue === "" || equalToPressed) && gotValue !== "="){
          this.setState({
            lastValue: out,
            newOutSet: false,
            lastOperator: gotValue,
            equalToPressed: false
          })
        }else if(lastOperator !== ""){
          const firstNum = parseInt(out)
          const secondNum = parseInt(lastValue)
          console.log(firstNum, secondNum, lastOperator)
          const newOutValue = this.doCalculation(lastOperator, firstNum, secondNum)
          
          let newLatValue = newOutValue
          let newOperator = gotValue
          let isEqualToPressed = false
          if(newOperator === "="){
            newOperator = lastOperator
            newLatValue = firstNum
            isEqualToPressed = true
            if(equalToPressed)
              newLatValue = secondNum
          }
          this.setState({
            out: newOutValue,
            lastValue: newLatValue,
            lastOperator: newOperator,
            newOutSet: false,
            equalToPressed: isEqualToPressed
          })
        }
        break
      }
    }
  }

  doCalculation(operator, firstNum, secondNum){
    let cal = 0
    switch(operator){
      case "X": 
        cal = firstNum * secondNum
        break
      case "+":
        cal = firstNum + secondNum
        break
      case "-":
        cal = secondNum - firstNum
        break
      case "/":
        cal = parseInt(secondNum / firstNum)
        break
    }
    return cal
  }

  render() {

    const row1List = [
      {
        name: "A/C",
        theBtnClass: "btn-dark",
        onClick: this.theBtnClick
      },
      {
        name: "+/-",
        theBtnClass: "btn-dark",
        onClick: this.theBtnClick
      },
      {
        name: "%",
        theBtnClass: "btn-dark",
        onClick: this.theBtnClick
      },
      {
        name: "/",
        theBtnClass: "btn-warning",
        onClick: this.theBtnClick
      }
    ]

    const row2List = [
      {
        name: "7",
        theBtnClass: "btn-secondary",
        onClick: this.theBtnClick
      },
      {
        name: "8",
        theBtnClass: "btn-secondary",
        onClick: this.theBtnClick
      },
      {
        name: "9",
        theBtnClass: "btn-secondary",
        onClick: this.theBtnClick
      },
      {
        name: "X",
        theBtnClass: "btn-warning",
        onClick: this.theBtnClick
      }
    ]

    const row3List = [
      {
        name: "4",
        theBtnClass: "btn-dark",
        onClick: this.theBtnClick
      },
      {
        name: "5",
        theBtnClass: "btn-dark",
        onClick: this.theBtnClick
      },
      {
        name: "6",
        theBtnClass: "btn-dark",
        onClick: this.theBtnClick
      },
      {
        name: "-",
        theBtnClass: "btn-warning",
        onClick: this.theBtnClick
      }
    ]

    const row4List = [
      {
        name: "1",
        theBtnClass: "btn-secondary",
        onClick: this.theBtnClick
      },
      {
        name: "2",
        theBtnClass: "btn-secondary",
        onClick: this.theBtnClick
      },
      {
        name: "3",
        theBtnClass: "btn-secondary",
        onClick: this.theBtnClick
      },
      {
        name: "+",
        theBtnClass: "btn-warning",
        onClick: this.theBtnClick
      }
    ]

    return (
      <div className="container my-container">
        <div className="row">
          <div className="col-sm-12">
            <p className="the-out-put" >{this.state.out}</p>
          </div>
          <Row1 dataList={row1List}/>
          <Row1 dataList={row2List}/>
          <Row1 dataList={row3List}/>
          <Row1 dataList={row4List}/>
          <LastRow onClick={this.theBtnClick} />
          <p className="text-danger">{this.state.message}</p>
        </div>
      </div>
    );
  }
}

const LastRow = (props) => {
  return(
    <React.Fragment>
      <div className="col-sm-9 the-col">
        <MyButton 
        name="0" 
        theBtnClass="btn-secondary"
        value="0"
        onClick={props.onClick}/>
      </div>

      <div className="col-sm-3 the-col">
        <MyButton 
        name="=" 
        theBtnClass="btn-warning" 
        value="="
        onClick={props.onClick}/>
      </div>
    </React.Fragment>
  )
}

const Row1 = (props) =>{
  const dataList = props.dataList
  const out = dataList.map((d, i) => {
    return(
      <div className="col-sm-3 the-col" key={i}>
        <MyButton 
        name={d.name} 
        theBtnClass={d.theBtnClass} 
        value={d.name}
        onClick={d.onClick}/>
      </div>
    )
  })
  return(
    <React.Fragment >
      {out}
    </React.Fragment>
  )
}

export default App;
