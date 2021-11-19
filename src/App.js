// import logo from './logo.svg';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './App.css';
import Introduction from './view/introduction/Introduction'
import Experience from './view/experience/Experience'
import Education from './view/education/Education';
import Goal from './view/goal/Goal';

const RouterPage = () => {
  return (
    <Routes>
      <Route exact path="/" element={<Introduction/>} />
      <Route exact path="experience" element={<Experience/>} />
      <Route exact path="education" element={<Education/>} />
      <Route exact path="goal" element={<Goal/>} />
      <Route path="*" element={<Introduction/>} />
    </Routes>
  )
}

function App() {
  return (
    <div className="App">
      <Router>
        <RouterPage />
      </Router>
    </div>
  );
}

export default App;
