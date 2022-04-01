import { useState } from 'react';
const MoviesData = () => {
   let [moviesList,setData]=useState(
       [
           {
               mname:"Drama"
           },
           {
            mname:"Paramatma" 
           },
           {
            mname:"one cut two cut"
           },
           {
            mname:"humble politician nogaraj"
           }
       ]
   )
    return ( 
        <div className="data">
            {moviesList.map((value)=>{  
               return(
                   <div className="display">
                       <h1>Movie Name:{value.mname}</h1>
                   </div>
               )
           }
            )
            }
        </div>
     );
}
 
export default MoviesData;