import logo from './logo.svg';
import './App.css';
import Navbar from './Navbar';
import Homepage from './Homepage';


function App() {
  const subs = 1000;
  const blogTitle = "Best games of 2023";
  const blogLikes = 100;
  // const author = {name:'onkar',Age:20,blogWritten:40}
  return (
    <div className="App">
      <Navbar />
      <Homepage />
      <div className='content'>
        <h2>App Component</h2>
      </div>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <span>Learn React</span>

        <div className="content">
         
             <p>{blogTitle}</p>
             <p>Hurrah!, You have got { subs }  subscribers and { blogLikes }  likes.</p>
             <p>[1,2,3,4,5,6,7,8,9,10]</p>
             <p>{Math.random*10}</p>
             {/* {<p>{author}</p>} */}
             <a href="https://react.dev/learn">Learn React</a> 
                 <br />
             <a href="{link}">Learn React</a>
             
        </div>
        
      </header>
    </div>
  );
}

export default App;
