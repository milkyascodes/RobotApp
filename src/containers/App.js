import React, {Component} from 'react';
import Cardlist from '../components/Cardlist';
import Searchbox from '../components/Searchbox';
import Scroll from '../components/Scroll';
import ErrorBoundary from '../components/ErrorBoundary';
import './App.css';



class App extends Component{
    constructor(){
        super()
        this.state ={
            robots: [],
            searchfield: '' 
        }
    }
    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(users => this.setState({robots: users})) 
    }
    onsearchChange = (e) =>{
        this.setState({searchfield: e.target.value})  
    }

    render(){
        const {robots, searchfield} = this.state;
        const filtered = robots.filter(robot  =>{
            return robot.name.toLowerCase().includes(searchfield.toLowerCase());
        })
        return !robots.length?
        <h1>Loading..</h1>:
        (
            <div className='tc'>
                <h1 className='f1'>Robofriends</h1>
                <Searchbox searchChange={this.onsearchChange} />
                <Scroll>
                    <ErrorBoundary>
                        <Cardlist robots={filtered} />
                    </ErrorBoundary>
                    
                </Scroll>
            </div>  
        )
    }
    
}
export default App