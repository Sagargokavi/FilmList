import home from './iconimages/home.png'
import contact  from './iconimages/call.png'
import add from './iconimages/add.png'
import { Link } from 'react-router-dom';
const Navcss = () => {
    return ( 
        <div className="navparent">
        <div className="name">
            <h4>Series center</h4>
        </div>
        <div className="links">
            <ul type='none'>
            <li><Link to="/" className="a1"><img src={home} /></Link></li>
            <li><Link to="/About" className="a2"><img src={contact} /></Link></li>
            <li><Link to="/Addfilm" className="a2"><img src={add} /></Link></li>
            <li><Link to="/Fav" className="a2"><img src={add} /></Link></li>
            </ul>
        </div>
        
    </div>
     );
}
 
export default Navcss;