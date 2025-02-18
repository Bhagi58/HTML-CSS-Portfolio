
import './Navbar.css';
// import Anime from '../NavbarPage/Anime.jpg'

export default function Navbar() {
   
    return(
       
        <>
        <header class='all'>

         <div className='image-anime'>
          {/* <img src={Anime} alt='' className='anime'></img>             */}
         </div>
         <nav>
         <ul>
           
            <div class="items">
               <li><a href="home">HOME</a></li>
               <li><a href="about">ABOUT</a></li>
               <li><a href="skills">SKILLS</a></li>
               <li><a href="academics">ACADEMICS</a></li>
            </div>
        
         </ul>
      </nav>
      <nav className='nav-2'>
         <ul>
           
            <div className="items-2">
               <li><a href="contact">CONTACT</a></li>
            
            </div>
        
         </ul>
      </nav>
        </header>
      

        </>
       
       )
    
    }
 