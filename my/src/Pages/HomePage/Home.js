import './Home.css';
import Myimg from '../HomePage/Myimg.jpg'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { fagithub } from '@fortawesome/react-fontawesome'
export default function Home() {
   
return(
   
    <div className='home'>
  

     <div className='w-m-s'>

     <div>
     <p className='f-1'>Web developer / Student</p>
     <div className='letter'>
   <p className='f-2'>Hi,I'm </p>
   <p className='f-3'> Bhagiram Oli</p>
   </div>
   <p className='f-4'> from Dang,Tulsipur</p>

     </div>


    <div class='myimg'>
       <img src={Myimg} alt='' className='Myimg'></img>            

    </div>
    {/* <div>
    <FontAwesomeIcon icon={fagithub} />
    </div> */}



    </div>
    </div>
   
   )

}
