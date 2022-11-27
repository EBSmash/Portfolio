import './App.css';
import Zoom from 'react-reveal/Zoom';


function App() {
    return (
        <div className="App">
            <header className="App-header">

                <br></br>
                <br></br>

                <title>ebsmash.dev</title>


                <h1>EBS - Dev</h1>


                <img src={"https://avatars.githubusercontent.com/u/53373788?v=4"} className="pfp-logo" alt="logo"/>

                <div className="about">
                    <p>
                        Hi, i'm Elijah, I also go by EBS or EBSmash online. I enjoy coding and look to do it as a career,
                        but for now, i'm just learning and having fun.
                    </p>

                </div>

                <div className="skills">

                    <Zoom>
                        <h2>Skills</h2>
                        <p>Python<br></br> I have general knowledge and can write simple or somewhat complex scripts or
                            games</p>
                        <br></br>
                        <p>Java:<br></br> I am more advanced in Java than any other language, I focused on it from
                            septermber 2021 to August 2022, mainly making minecraft mods.</p>
                        <br></br>
                        <p>Rust:<br></br> I am currently learning rust and know the basics.</p>
                        <br></br>
                        <p>React:<br></br> I can make simple sites such as this one</p>
                        <br></br>
                        <p>NodeJs:<br></br> I can make simple projects</p>
                    </Zoom>


                </div>
                <br/>
                <br/>
                <div id={"contact"}>
                    <h1>Contact me</h1>
                    <p>Reach me quick on discord at:</p>
                    <p><code>EBS#2574</code></p>
                    <p>or wait for me to take 8 years to check my email at:
                    ebsmash328@gmail.com</p>
                </div>
            </header>
        </div>
    );

}

export default App;
