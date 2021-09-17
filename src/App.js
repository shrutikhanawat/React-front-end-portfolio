import './App.css';
import ProfilePage from "./components/profile";
import About from "./components/about";
import Footer from './components/footer';
import Skills from './components/skills';
function App() {
  return (
    <div>
      <ProfilePage></ProfilePage>
       <About></About> 
       <Skills/>
      <Footer/>
    </div>
  );
  }

export default App;
