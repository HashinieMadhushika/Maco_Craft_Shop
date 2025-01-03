import logo from './logo.svg';
import './App.css';
import { Link } from 'react-router-dom';


function App() {
  return (
    <div className = 'nav bar'>
    <title>Maco Craft - Home</title>
    <h1 className='nav header'>Maco Craft</h1>
    <ul className='nav-Link'>
      <li><Link to ="/" className='Home'>Home</Link></li>
      <li><Link to ="/about me" className='About Me'>About Me</Link></li>
      <li><Link to ="/contact us" className='Contact Us'>Contact Us</Link></li>
      <li><Link to ="/profile" className='Profile'>Profile</Link></li>
    </ul>
    </div>
  )
}

export default App;
