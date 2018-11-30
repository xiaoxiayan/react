import React,{Component} from 'react'
import './Movie.scss'
import 'whatwg-fetch'
import API from '../../api'
export default class Movie extends Component{
        render(){
            return(
                <div className='page' id='Movie' >
                    <h1>这个是电影组件</h1>
                    
                </div>
            )
        }
        componentDidMount(){
            //请求的url
            fetch(API.BANNER_API,{
                method:'GET',
                data:{
                    type:2,
                    k :2712396 
                }
            })
            //获得请求的响应对象
            .then((response)=>{
                //以json的形式解析请求得到的json数据
                return response.json();
            })
            //请求得到结果，解析完成
            .then((json)=>{
                this.setState({channelsData: json.data});
            })
            .catch((ex)=>{
                console.log('parsing failed', ex)
            })
        }
}