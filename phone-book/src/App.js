import React, { Component } from 'react';
import PhoneForm from './component/PhoneForm';
import PhoneInfoList from "./component/PhoneInfoList";

class App extends Component {
  id = 2
  state = {
    information: [
      {
        id: 0,
        name: '김민준',
        phone: '010-0000-0000'
      },
      {
        id: 1,
        name: '홍길동',
        phone: '010-0000-0001'
      }
    ]
  }
  handleCreate = (data) => {
    const { information } = this.state;
    this.setState({
      information: information.concat({ id: this.id++, ...data })
      // 문자열 이어 붙이기 concat
    })
    console.log(data);
  }
  handleRemove = (id) => {
    const { information } = this.state;
    this.setState({
      information: information.filter(info => info.id !== id)
    })
  }
  handleUpdate = (id, data) => {
    const {information} = this.state;
    this.setState({
      information : information.map(
        info=>id ===info.id 
        ? {...info, ... data} // 새 객체를 만들어서 기존의 값고 전달 받은 data를 덮어씀.
        : info // 기존의 값을 그대로 유지 
        )
    })
  }
  render() {
    const { information } = this.state;
    return (
      <div>
        <PhoneForm onCreate={this.handleCreate} />
        <PhoneInfoList 
          data={information} 
          onRemove={this.handleRemove} 
          onUpdate= {this.handleUpdate}
        />
        {/* {JSON.stringify(information)}
        string 값으로 반환하여 화면에 출력한다  */}
      </div>
    );
  }
}

export default App;