import { BrowserRouter } from 'react-router-dom';
import './App.css';
import { AppProvider } from 'providers/app';
import { MyRoutes } from 'lib/routes';

function App() {
  return (
    <AppProvider>
      <BrowserRouter>
        <MyRoutes />
      </BrowserRouter>
    </AppProvider>
  );
}

export default App;
