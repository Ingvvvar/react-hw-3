import './App.css';
import { ClickCounter } from './components/ClickCounter';
import { List } from './components/List';
import { NameForm } from './components/NameForm';

const Unique = (props) => {
  return <h2>Уникальные имена из массива имён: <span><ul>{ props.name }</ul></span></h2>;
}

const names = ['misha', 'grisha', 'dasha', 'misha', 'grisha', 'dasha','misha', 'grisha', 'dasha'];
const uniqueNames = [...new Set(names)];




const App = () => {
  return (
    <div className="App">
      <ClickCounter />
      <hr/>
      <List items= { names }/>
      <Unique name = { uniqueNames.map(item => <li key={item.toString()}>{item}</li>) } />
      <hr/>
      <NameForm />

    </div>
  );
}

export default App;
