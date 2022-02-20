import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './App.css'
import Introduction from './view/introduction/Introduction'
import Experience from './view/experience/Experience'
import Family from './view/family/Family'
import Kyushu from './view/kyushu/Kyushu'
import HandMade from './view/handMade/HandMade'
import Goal from './view/goal/Goal'
import TestView from './view/testView/TestView'
import Header from './component/header/Header'

const RouterPage = () => {
  return (
    <Routes>
      <Route exact path="/" element={<Introduction/>} />
      <Route exact path="experience" element={<Experience/>} />
      <Route exact path="family" element={<Family/>} />
      <Route exact path="handMade" element={<HandMade/>} />
      <Route exact path="goal" element={<Goal/>} />
      <Route exact path="kyushu" element={<Kyushu/>} />
      <Route exact path="test" element={<TestView/>} />
      <Route path="*" element={<Introduction/>} />
    </Routes>
  )
}

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <RouterPage />
      </Router>
    </div>
  );
}

export default App;
