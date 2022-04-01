import { useState ,useEffect} from 'react'

import SeriesList from './seriesList'
const Fav = () => {
    let [seriesData,setData]=useState([])
    useEffect (()=>{
      fetch(" http://localhost:4000/series")
      .then(res =>{
        return res.json();
      })
      .then(data=>{
        setData(data)
      })
        
    },[])
 
      let clickImage=(id)=>{
        var newData=seriesData.filter((value)=>value.id !=id)
        setData(newData)
        
      }
    useEffect(()=>{
      console.log("it Worked...");
    },[])
    return (
        <div className="favparent">
             <div className='header'>
          <h1>Movies Center</h1>
          <h3>Favourite Movies</h3>
          </div>
          <SeriesList  data={seriesData} pageTitle="Popular Movies" delete={clickImage}/>
          <SeriesList  data={seriesData.filter((value)=>value.language=="Kannada")} pageTitle="Popular kannada Movies"/>
          <SeriesList  data={seriesData.filter((value)=>value.language=="English")} pageTitle="Popular kannada Movies"/>
        </div>
      );
}
 
export default Fav;