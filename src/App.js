import React from 'react';
import ReactDOM from 'react-dom';
import logo from './logo.svg';
import './App.css';

const TodoItem = (props) => <li onClick={props.onClick}>{props.item.text}</li>

class TodoList extends React.Component {
  render() {
    const { items, onClick } = this.props;
    return (<ul onClick={onClick}>
      {items.map((item, index) =>
          <TodoItem item={item} key={index} onClick={this.handleItemClick.bind(this, item)}/>)}
    </ul>);
  }

  handleItemClick(item, event) {
    // Write your code here
    const { onItemClick } = this.props
    if (!item.done) {
      onItemClick(item, event)
    } else
      event.stopPropagation()
  }
}


const items = [ { text: 'Buy grocery', done: true },
  { text: 'Play guitar', done: false },
  { text: 'Romantic dinner', done: false }
];

const App = (props) => <TodoList
    items={props.items}
    onItemClick={(item, event) => { console.log(item, event) }}
/>;

export default App;


ReactDOM.render(<App items={items} />, document.getElementById('root'));
