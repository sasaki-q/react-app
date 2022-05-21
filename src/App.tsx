import './App.css';
import { TodoView } from 'features/todo/components/Main';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <TodoView />
      </header>
    </div>
  );
}

export default App;
