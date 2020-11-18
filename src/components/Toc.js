import { Component } from 'react';

class Toc extends Component {  
  shouldComponentUpdate(NewProps, NewState) {
    console.log('TOC render shouldComponentUpdate',
    NewProps.data,
    this.props.data
    );
    if(this.props.data === NewProps.data) {
      return false;
    }
    return true;
  }
  render() {
    var lists = [];
    var data = this.props.data;
    var i = 0;
    while(i < data.length) {
      lists.push(<li key={data[i].id}>
        <a 
          href={"/content/"+data[i].id}
          //data-id = {data[i].id} <-- 방법1
          //onClick={function(e){  <-- 방법1
          onClick={function(id, e){          
            e.preventDefault();
           // this.props.onChangePage(e.target.dataset.id); <-- 방법1
            this.props.onChangePage(id);
            //}.bind(this)} <-- 방법1
          }.bind(this, data[i].id)}
        >{data[i].title}</a></li>)
      i = i + 1;
    }
    return (
      <nav>
        <ul>
          {lists}
        </ul>  
      </nav>     
    );
  }
}

export default Toc;