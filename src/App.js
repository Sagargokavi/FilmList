//assignment


import './App.css';

import Home from './home';
import Navcss from './navcss';
import Footer from './footer';
import About from './about';
import {BrowserRouter  as Router, Switch, Route  } from "react-router-dom"//to import routers in that router--> 
import Addfilm from './addfilm';
import Fav from './fav';
import Fnf from './404';

function App(){  
 

 return ( 
   <Router>
    <div className="App">
      <Navcss/>
       <Switch>
         <Route exact path="/">
           <Home/>
         </Route>
         <Route exact path='/About'>
            <About/>
         </Route>
        <Route exact path='/Addfilm'>
          <Addfilm/>
          </Route>
          <Route exact path='/Fav'>
            <Fav/>
          </Route>
        <Route path='*'>
          <Fnf/>
        </Route>

        </Switch> 

      <Footer/>  
    </div>
   </Router>
  );
}

export default App;

