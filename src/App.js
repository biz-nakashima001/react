import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      msg: '名前を入力して下さい。',
      inputValue:'',
      mag2: '選択して下さい',
      checkValue: false,
      redioValue:'(未選択)',
      msg3:'選択して下さい',
      sel1Value:'',
      sel2Value:[]
    };
    this.handleOnChange = this.handleOnChange.bind(this);
    this.handleOnClick  = this.handleOnClick.bind(this);
    this.handleOnChangeCb = this.handleOnChangeCb.bind(this);
    this.handleOnChangeRb = this.handleOnChangeRb.bind(this);
    this.handleOnChangeSel1 = this.handleOnChangeSel1.bind(this);
    this.handleOnChangeSel2 = this.handleOnChangeSel2.bind(this);
  }

  handleOnClick(event) {
    this.setState({
      msg:'こんにちは, '+ this.inputValue + 'さん。',
      msg2:'選択状態:' + this.checkValue + ','+ this.radioValue,
      msg3:'状態:' + this.sel1Value + '[' + this.sel2Value + ']'
    });
  }

  handleOnChange(event) {
    this.inputValue = event.target.value;
  }

  handleOnChangeCb(event) {
    this.checkValue = event.target.checked;
  }

  handleOnChangeRb(event) {
    this.radioValue = event.target.value;
  }

  handleOnChangeSel1(event) {
    this.sel1Value = event.target.value;
  }

  handleOnChangeSel2(event) {
    var options  = event.target.options;
    var values = [];
    for (var i = 0; i < options.length;i++){
      if(options[i].selected){
        values.push(options[i].value);
      }
    }
    this.sel2Value = values;
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
          <body className="App-body">
            <div class="component">
              <p>{this.state.msg}</p>
              <input type="text" onChange={this.handleOnChange}/>
            </div>
            <div  class="component">
              <p>{this.state.msg2}</p>
              <div>
                <input type="checkbox" onChange={this.handleOnChangeCb} id="ck1" />
                <label htmlFor="ck1">チェックボックス</label>
              </div>
              <div>
                <input type="radio" onChange={this.handleOnChangeRb} value="A" id="r1" name="radio" />
                <label htmlFor="r1">ラジオボタンA</label>
              </div>
              <div>
                <input type="radio" onChange={this.handleOnChangeRb} value="B" id="r2" name="radio" />
                <label htmlFor="r2">ラジオボタンB</label>
              </div>
            </div>
            <div  class="component">
              <p>{this.state.msg3}</p>
              <div>
                <p>セレクトボックス</p>
                <select onChange={this.handleOnChangeSel1}>
                  <option>和食</option>
                  <option>中華</option>
                  <option>洋食</option>
                </select>
              </div>
              <div>
                <p>セレクトボックス(複数)</p>
                <select multiple size="5" onChange={this.handleOnChangeSel2}>
                  <option>秋刀魚定食</option>
                  <option>すき焼き</option>
                  <option>おでん</option>
                  <option>ラーメン</option>
                  <option>チャーシューメン</option>
                  <option>タンタン麺</option>
                  <option>チキンライス</option>
                  <option>オムライス</option>
                </select>
              </div>
            </div>
            <div>
              <input type="button" value="押して下さい。" onClick={this.handleOnClick} />
            </div>
        </body>
      </div>
    );
  }
}

export default App;
