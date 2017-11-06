import React from 'react';
import {Route, Switch} from 'react-router-dom'

import Home from './components/Home/Home'
import Influence from './components/Influence/Influence'
import Login from './components/Login/Login'
import Yourpage from './components/Yourpage/Yourpage'
import Comments from './components/Comments/Comments'

export default(
<Switch>
<Route exact path="/" component={Home}/>
<Route path="/influence" component={Influence}/>
<Route path="/login" component={Login}/>
<Route path="/yourpage" component={Yourpage}/>
<Route path="/comments" component={Comments}/> 
    </Switch>

)