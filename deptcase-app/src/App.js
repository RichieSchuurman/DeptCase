import './App.scss';
import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom';
import HomeView from './view/HomeView';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' exact element={ <HomeView/> } />
      </Routes>
    </BrowserRouter>
    
  );
}

export default App;
