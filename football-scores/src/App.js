import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Main from './components/Main';
import ManchesterUnited from './components/ManchesterUnited';
import AddData from './components/AddData';
function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route path='/' element = {<Main/>}></Route>
        <Route path='/ManchesterUnited' element = {<ManchesterUnited/>}></Route>
        <Route path='/addMatch' element = {<AddData/>}></Route>
      </Routes>
    </Router>
    </>
  );
}

export default App;
