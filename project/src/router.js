import React from 'react';
import {Route, Switch} from 'react-router-dom';
import {Provider} from 'react-redux';

import Editor from './components/Editor/Editor';
import Home from './components/Home/Home';
import Influence from './components/Influence/Influence';
import Newpost from './components/NewPost/NewPost'
import Yourpage from './components/Yourpage/Yourpage'
import Comments from './components/Comments/Comments'
import store from './store'

export default(
<Provider store={store}>
<Switch>
<Route exact path="/" component={Home}/>
<Route path="/influence" component={Influence}/>
<Route path="/newpost" component={Newpost}/>
<Route path="/yourpage" component={Yourpage}/>
<Route path="/comments" component={Comments}/> 
<Route path="/editor" component={Editor}/>
    </Switch>
</Provider>
)