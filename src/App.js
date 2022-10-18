import './App.css';
import Tada from 'react-reveal/Tada';
import Zoom from 'react-reveal/Zoom';



function App() {
  return (
    <div className="App">
      <header className="App-header">

      <br></br>
      <br></br>

      <title>ebsmash.dev</title>

      <Tada>
      <h1>EBS - Dev</h1>
      </Tada>

        <img src={"https://cdn.discordapp.com/avatars/348179779947724830/f4a76db254b76fe3b18efb64f478b1ab.png?size=1024"} className="pfp-logo" alt="logo" />
        
        <div className="about">
          <p>
          Hi, im Elijah, I also go by EBS or EBSmash online. I enjoy coding and look to do it as a career, but for now, im just learning and having fun.
          </p>

        </div>

        <div className="skills">
        
        <Zoom>
          <h2>Skills</h2>
          <p>Python<br></br> I have general knowledge and can write simple or somewhat complex scripts or games</p>
          <br></br>
          <p>Java:<br></br> I am more advanced in Java than any other language, I focused on it from septermber 2021 to August 2022, mainly making minecraft mods.</p>
          <br></br>
          <p>Rust:<br></br> I am currently learning rust and know the basics.</p>
          <br></br>
          <p>React:<br></br> I can make simple sites such as this one</p>
      </Zoom>

      





      </div>


      </header>
    </div>
  );
}

export default App;
