import { Component } from 'react';
import Toc from "./components/Toc";
import Content from "./components/Content";
import Subject from "./components/Subject";
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      subject:{title:'WEB', sub:'World Wide Web!'}
    }
  }
  render() {    
    return (
      <div className="App">       
        <Subject
          title={this.state.subject.title}
          sub={this.state.subject.sub}>
        </Subject>        
        <Toc></Toc>
        <Content title="HTML" desc="HTML is HyperText Markup Language"></Content>
      </div>      
    );
  }
}

export default App;