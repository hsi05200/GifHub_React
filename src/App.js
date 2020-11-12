import { Component } from 'react';
import Toc from "./components/Toc";
import Content from "./components/Content";
import Subject from "./components/Subject";
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mode:'read',
      selected_content_id:2,
      subject:{title:'WEB', sub:'World Wide Web!'},
      welcome:{title:'Welcome', desc:'Hello, React!!'},
      contents:[
        {id:1, title:'HTML', desc:'HTML is for information'},
        {id:2, title:'CSS', desc:'CSS is for design'},
        {id:3, title:'JavaScript', desc:'JavaScript is for interactive'},
        {id:4, title:'React', desc:'React is for component'},
        {id:5, title:'PHP', desc:'PHP is for programing'}
      ]
    }
  }
  render() { 
    var _title, _desc = null;
    if(this.state.mode === 'welcome'){
      _title = this.state.welcome.title;
      _desc = this.state.welcome.desc;
    } else if(this.state.mode === 'read') {
      var i = 0;
      while(i < this.state.contents.length) {
        var date = this.state.contents[i];
        if(date.id === this.state.selected_content_id) {
          _title = date.title;
          _desc = date.desc;
          break;
        }
        i = i + 1;
      }      
    }
    return (
      <div className="App">       
        <Subject
          title={this.state.subject.title}
          sub={this.state.subject.sub}
          onChangePage={function(){
            this.setState({
              mode:'welcome' 
            })
          }.bind(this)}
        >          
        </Subject>        
        <Toc 
          onChangePage={function(id){
            this.setState({
              mode:'read',
              selected_content_id:Number(id)
            });
          }.bind(this)}
          data={this.state.contents}></Toc>
        <Content title={_title} desc={_desc}></Content> 
      </div>      
    );
  }
}

export default App;