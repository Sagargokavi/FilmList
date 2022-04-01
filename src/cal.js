import './cal.css'
import cal from './iconimages/calendar.png'
const Calender = () => {
    return (
        <div className='cal'>
            
        <p>Work for Starbucks? </p>
       <p id='paragraph'>   Chat with current scholars and ASU representatives at our next Virtual Open House on</p>
     <p> <img src={cal} alt="" /> March 23rd from 9:30 to 11 a.m. PST</p>
       <a id='anker'>Register now!</a>
      
        
    </div>
      );
}
 
export default Calender;