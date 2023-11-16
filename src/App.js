import './App.css';
import Landing from "./components/Landing.js";
import Profile from "./components/Profile.js";
import Preloader from "./components/Preloader.js";
import Experience from "./components/Experience.js";

window.addEventListener("scroll", setScrollVar);
window.addEventListener("resize", setScrollVar);

function setScrollVar() {
  const htmlElement = document.documentElement;
  const percentScrolled = htmlElement.scrollTop / htmlElement.clientHeight;
  htmlElement.style.setProperty("--scroll", Math.min(percentScrolled * 100, 100));
  console.log(Math.min(percentScrolled * 100, 100));
}

setScrollVar();

function App() {
  return (
    <div id="app">
      <Preloader/>
      <Landing/>
      <Profile/>
      <Experience/>
    </div>
  );
}

export default App;
