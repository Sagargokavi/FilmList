import './filmList.css'

import drama from './iconimages/drama1.png'
import param from './iconimages/paramatma.png'
import gvh from './iconimages/gvh.png'
import ulik from './iconimages/ulik.png'




const Home = () => {
   

    return ( 
        <div className='data'>
          <div className="populerSeies">
           <a href="https://www.youtube.com/watch?v=3pQuOJSxC1o" target="_blank"> <img src={drama} alt="" /></a>
           <a href="https://www.youtube.com/watch?v=fJbl08pV0p0" target="_blank"> <img src={param} alt="" /></a>
           <a href="https://www.youtube.com/watch?v=BnuDHJcSd0Q&t=6s" target="_blank"> <img src={gvh} alt="" /></a>
           <a href="https://www.youtube.com/watch?v=1VwZ1tnDZbs" target="_blank">  <img src={ulik} alt="" /></a>
          </div>
          
         
       


      </div>
     );
}
 
export default Home;