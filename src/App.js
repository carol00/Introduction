// import logo from './logo.svg';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './App.css';
import IntroductionPage from './component/IntroductionPage'
import ExperiencePage from './component/ExperiencePage'
import EducationPage from './component/EducationPage';
import GoalPage from './component/GoalPage';

const RouterPage = () => {
  return (
    <Routes>
      <Route exact path="/" element={<IntroductionPage/>} />
      <Route exact path="experience" element={<ExperiencePage/>} />
      <Route exact path="education" element={<EducationPage/>} />
      <Route exact path="goal" element={<GoalPage/>} />
      <Route path="*" element={<IntroductionPage/>} />
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
