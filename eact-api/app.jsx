import React from 'react';

// react Api 복습
class ApiExample extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data:''
    }
  }
  callApi = () => {
    fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(res => res.json())
    .then(json => {
      this.setState({
        data: json.title
      })
    })
  }
  componentDidMount() {
    this.callApi();
  }
  render() {
    return (
        <h3>
          {this.state.data ? this.state.data : '데이터를 불러오는 중입니다.'}
        </h3>
    )
  }
}
export default ApiExample;