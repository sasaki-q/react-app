import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { MyLayout } from 'utils/views/Layout';
import { MainAuth } from 'features/auth/component/Main';
import { MainTodo } from 'features/todo/components/Main';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<MyLayout children={<MainAuth/>}/>}/>
        <Route path='/todo' element={<MyLayout children={<MainTodo/>}/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
