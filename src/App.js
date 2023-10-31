import Navbar from "./components/NavBar/navbar";
import Intro from "./components/Intro/intro";
import Skill from "./components/skills/skill";
import Project from "./components/projects/project";
import Education from "./components/Education/edu";
import ContactMe from "./components/contactMe/ContactMe";



function App() {
  return (
    <div className="App">
     <Navbar/>
     <Intro/>
     <Skill/>
     <Project/>
     <Education/>
    <ContactMe/>
    </div>
  );
}

export default App;
