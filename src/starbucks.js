import './starbucks.css'
import stlogo from './iconimages/stlogo.svg'
const Starbucks = () => {
    return (
        <div className="pnav">
            <div className="logonav">
            <img src={stlogo}/>
            </div>
            <div className="anav">
            <ul type="none">
                
                <a > Home</a>
                <a > Student Support</a>
                <a > Degree Search</a>
                <a > FAQ</a>
                <a >Work for StarBicks</a>
                </ul>
                <ul type="none" id='ul2'>  
                <button className='b1'>Get Info</button>
                <button className='b2'>Apply Now</button>
                </ul>
            </div>
      
          
        </div>
      );
}
 
export default Starbucks;