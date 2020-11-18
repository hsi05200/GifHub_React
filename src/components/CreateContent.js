import { Component } from 'react';

class CreateContent extends Component {  
  render() {    
    return (
      <article>
        <h2>추가</h2>
        <form action="/create_process" method="post"
          onSubmit={function(e){
            e.preventDefault();            
            this.props.onSubmit(
              e.target.title.value,
              e.target.desc.value
            );
            // alert('목록추가완료!!');
          }.bind(this)}
        >
          <p>
            <input type="text" name="title" placeholder="제목입력" style={{width:'342px'}}/>
          </p>
          <p>
            <textarea cols="50" rows="5" type="text" name="desc" placeholder="내용입력"/>
          </p>
          <p>
            <input type="submit"/>
          </p>
        </form>
      </article>    
    );
  }
}

export default CreateContent;