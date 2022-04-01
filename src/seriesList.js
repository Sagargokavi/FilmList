import bin from './iconimages/bin.png'
const SeriesList = (props) => {
    let seriesData=props.data;
    let title =props.pageTitle;
    let clickImage=props.delete;
    return (  
        <div className="SeriesList">
            <h1 style={{color:"midnightblue",textAlign:"center"}}>{title}</h1>
             {seriesData.map((value)=>{
          return(
            <div className='display'>
              <h6>{value.id}</h6>
              <h1>Title:{value.title}</h1>
              <h2>Genre:{value.genre}</h2>
              <h4>Famous quote:{value.quote}</h4>
              <img src={bin}   height="40px" width="40px" onClick={()=> clickImage(value.id)} />
            </div>
          )
        }
        )}
        </div>
    );
}
 
export default SeriesList;