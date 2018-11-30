import React, { Component } from 'react';
import { BrowserRouter, Route, NavLink as Link, Redirect, Switch  } from 'react-router-dom'

import Dazhe from './page/Dazhe/Dazhe'
import Mine from './page/Mine/Mine'
import Movie from './page/Movie/Movie'
import Cinemas from './page/Cinemas/Cinemas'
import './App.css';
export default class App extends Component{
    render(){
      return(
        <BrowserRouter>
        {/*如果项目要用路由管理，需要用这个包裹*/}
          <div className='app'>
          <Switch>
          <Route path="/" exact render={()=>{
                            //对'/'重定向
                            return <Redirect to="/movie"/>
                        }}/>
               <Route path='/movie' component={Movie}/> 
               <Route path='/cinemas' component={Cinemas}/>           
               <Route path='/dazhe' component={Dazhe}/>           
               <Route path='/mine' component={Mine}/>           
             </Switch>
            <nav className='tabs'>
                 <Link className='tab' to='/movie'>电影</Link>
                 <Link className='tab' to='/cinemas'>影院</Link> 
                 <Link className='tab' to='/dazhe'>9.9拼团</Link> 
                 <Link className='tab' to='/mine'>我的</Link> 
            </nav>


          </div>
           
        </BrowserRouter>
      )
    } 
}