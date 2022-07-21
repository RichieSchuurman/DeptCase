import './App.scss';
import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom';
import WorkView from './view/WorkView';
import CaseView from './view/CaseView';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/work' exact element={ <WorkView/> } />
        <Route path='/case' exact element={ <CaseView/> } />
      </Routes>
    </BrowserRouter>
    
  );
}

export default App;
