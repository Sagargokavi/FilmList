import './green.css'
import glass from './iconimages/glass.png'
const Green = () => {
    return ( 
        <div className="parent">
            <div className="head">
                <h1>Quality support <br /> crafted for you</h1>
                <p>Resources for Starbucks students at ASU Online</p>
            </div>
            <div className="image">
                 <img src={glass} alt="" />
            </div>
        </div>
     );
}
 
export default Green;