// import logo from './logo.svg';
import './App.css';
import Logpage from './Logpage';
import About from './about';
import Services from './service';
import Footer from './footer';
import res from './km.png'


function App() {
  return (
    <>
    <>
    <> 
    <>
    

    <div class="Navbar">
    <img className='logoL' src={res}/>
     <ul>
     <div >
     
        </div>
           
           <li className='item'> <a href='#'>Home</a> </li>
          <li  className='item'>  <a href='#About'>About us</a> </li>
          <li  className='item'>  <a href='#Service'>Service</a> </li>
          
         
     </ul>

     <button className='navbtn'>LOGIN</button>
    
     
  <div className='content'> 
     <h1>"Unlock Your Dreams with a Click <br></br> - Your Financial Journey Starts Here!"</h1>
     </div>  
</div>
<Logpage/> </>
<About/></>
<Services/></>
<Footer/></>
  );
}

export default App;
