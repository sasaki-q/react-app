import './App.css';
import { TodoView } from 'features/todo/components/Main';
import { MyToast } from "utils/views/Toast"

function App() {
  return (
    <div className="App">
      <MyToast />
      <header className="App-header">
        <TodoView />
      </header>
    </div>
  );
}

export default App;
