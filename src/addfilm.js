import './addfilm.css'
import { useState } from 'react';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';

const Addfilm = (e) => {
    let history=useHistory();
    let[title,settitle]=useState();
    let[cast,setcast]=useState('');
    // let[genre,setgenre]=useState('');
    let[quote,setquote]=useState('');
    // let[language,setlanguage]=useState('');
    // let[id,setid]=useState('');
    let handleSubmit=(e)=>{
       e.preventDefault();
       let data={title,cast,quote}
       fetch("http://localhost:4000/series",{
           method:'POST',
           headers:{'Content-Type':'application/json'},
           body:JSON.stringify(data)
       })
       .then(()=>{
           alert('Data Added Successfully')
           history.push('/Fav')
       })

    }
    return ( 
        <div className="parentaddfilm">
            <br />
            <form onSubmit={handleSubmit}>
            <div className="text">
                <h1>Enter Movie Details</h1>
                <label htmlFor="">Title</label><br />
             <input type="text" placeholder=' Enter Title' required value={title} onChange={(e)=>{settitle(e.target.value)}} /><br /><br />
             <label htmlFor="">Cast</label><br />
             <input type="text" placeholder=' Eneter Cast'required value={cast } onChange={(e)=>{setcast(e.target.value)}} /><br /><br />
             {/* <label htmlFor="">Genre</label><br />
             <input type="text" placeholder='Enter Genre' required value={genre } onChange={(e)=>{setgenre(e.target.value)}} /><br /><br /> */}
             <label htmlFor="">Quote</label><br />
             <input type="text" placeholder='Enter Quote' required value={quote} onChange={(e)=>{setquote(e.target.value)}} /><br /><br />
             {/* <label htmlFor="">Language</label><br />
             <input type="text" placeholder='Enter Quote' required value={language} onChange={(e)=>{setlanguage(e.target.value)}} /><br /><br />
             <label htmlFor="">Id</label><br />
             <input type="text" placeholder='Enter Quote' required value={id} onChange={(e)=>{setid(e.target.value)}} /><br /><br /> */}
             </div>
             <div className="btn">
            <button >Add Film Details</button>
        </div>
        </form>
        </div>
        
     );
}
 
export default Addfilm;