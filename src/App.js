import { Component } from 'react';
import Toc from "./components/Toc";
import Content from "./components/Content";
import Subject from "./components/Subject";
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      subject:{title:'WEB', sub:'World Wide Web!'},
      contents:[
        {id:1, title:'HTML', desc:'HTML is for information'},
        {id:2, title:'CSS', desc:'CSS is for design'},
        {id:3, title:'JavaScript', desc:'JavaScript is for interactive'},
        {id:4, title:'React', desc:'React is for component'}
      ]
    }
  }
  render() {    
    return (
      <div className="App">       
        <Subject
          title={this.state.subject.title}
          sub={this.state.subject.sub}>
        </Subject>        
        <Toc data={this.state.contents}></Toc>
        <Content title="HTML" desc="HTML is HyperText Markup Language"></Content>
      </div>      
    );
  }
}

export default App;