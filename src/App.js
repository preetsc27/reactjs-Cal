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
      lastOperator: ""
    }

    this.theBtnClick = this.theBtnClick.bind(this)
  }

  theBtnClick(e){
    const { out, lastValue, lastOperator } = this.state
    const gotValue = e.target.value
    console.log(gotValue)
    if(parseInt(gotValue).toString() !== "NaN"){
      let theOut = out+gotValue
      if(lastValue !== ""){
        theOut = gotValue
      }
      this.setState({
        out: theOut
      })
      if(lastOperator !== ""){
        if(lastValue === ""){
          this.setState({
            lastValue: out,
          })
        }else{
        const intOut = parseInt(out)
        const intLastValue = parseInt(lastValue)
        let cal
        switch(lastOperator){
          case "X": 
            cal = intOut * intLastValue
            break
          case "+":
            cal = intOut + intLastValue
            break
          case "-":
            cal = intLastValue - intOut
            break
          case "/":
            cal = parseInt(intLastValue / intOut)
            break
        }
        this.setState({
          lastValue: cal.toString(),
          lastOperator: ""
        })
      }
    }
    else{
      switch(gotValue){
        case "A/C":
          this.setState({
            out: "",
            lastValue: ""
          })
          break
        case "X":
        case "+":
        case "-": 
        case "/":
        if(lastValue === ""){
          this.setState({
            lastValue: out,
          })
        }else{
          const intOut = parseInt(out)
          const intLastValue = parseInt(lastValue)
          let cal
          switch(gotValue){
            case "X": 
              cal = intOut * intLastValue
              break
            case "+":
              cal = intOut + intLastValue
              break
            case "-":
              cal = intLastValue - intOut
              break
            case "/":
              cal = parseInt(intLastValue / intOut)
              break
          }
          this.setState({
            out: cal.toString(),
            lastOperator: gotValue
          })
        }
        break
      }
    }
  }
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
        </div>
      </div>
    );
  }
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
