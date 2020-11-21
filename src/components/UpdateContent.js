import { Component } from 'react';

class UpdateContent extends Component {  
  constructor(props){
    super(props);
    this.state = {
      title:this.props.data.title,
      desc:this.props.data.desc
    }
    this.inputFormHandler = this.inputFormHandler.bind(this) //bind(this)의 중복을 없애기 위해 재정의
  }
  inputFormHandler(e) { // state 값을 불러오기 위해 함수로 재정의
    this.setState({[e.target.name]:e.target.value}); //e.target.name: 자신의 name값을 가져온다.
  }
  render() {    
    return (
      <article>
        <h2>수정</h2>
        <form action="/create_process" method="post"
          onSubmit={function(e){
            e.preventDefault();            
            this.props.onSubmit(
              e.target.title.value,
              e.target.desc.value
            );            
          }.bind(this)}
        >
          <p>
            <input 
              type="text"
              name="title"
              placeholder="제목입력"
              style={{width:'342px'}}
              value={this.state.title} // 이렇게 사용하면 읽기전용으로 수정불가
              onChange={this.inputFormHandler} // 정의된 state의 함수를 사용함
              />
          </p>
          <p>
            <textarea
             cols="50"
             rows="5"
             type="text"
             name="desc"
             placeholder="내용입력"
             value={this.state.desc}
             onChange={this.inputFormHandler}
             ></textarea>
          </p>
          <p>
            <input type="submit"/>
          </p>
        </form>
      </article>    
    );
  }
}

export default UpdateContent;