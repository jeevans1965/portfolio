import Navbar from "./components/NavBar/navbar";
import Intro from "./components/Intro/intro";
import Skill from "./components/skills/skill";
import Project from "./components/projects/project";

function App() {
  return (
    <div className="App">
     <Navbar/>
     <Intro/>
     <Skill/>
     <Project/>
    </div>
  );
}

export default App;
