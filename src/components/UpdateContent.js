import { Component } from 'react';

class UpdateContent extends Component {  
  constructor(props){
    super(props);
    this.state = {
      title:this.props.data.title,
      desc:this.props.data.desc
    }
    this.inputFormHandler = this.inputFormHandler.bind(this)
  }
  inputFormHandler(e) {
    this.setState({[e.target.name]:e.target.value});
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
              value={this.state.title}
              onChange={this.inputFormHandler}
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