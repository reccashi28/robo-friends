import React, { useState, useEffect} from 'react';
import CardList from '../component/CardList';
import SearchBox from '../component/SearchBox';
import './App.css';
import Scroll from '../component/Scroll';

function App() {
    const [robots, setRobots] = useState([]);
    const [searchField, setSearchField] = useState('');

    // componentDidMount() {
    //     fetch('https://jsonplaceholder.typicode.com/users')
    //         .then( response => {
    //            return response.json();
    //         })
    //         .then( users => {
    //             this.setState({ robots: users})
    //         })
        
    // }

    useEffect( () => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then( response => {
                return response.json();
            })
            .then( users => {
                setRobots(users)
            })
    }, [])

    const onSearchChange = event => {
            setSearchField(event.target.value)
        }
    
        const filteredRobots = robots.filter(robot =>{
            return robot.name.toLowerCase().includes(searchField.toLowerCase());
          })
        
          return !robots.length ?
            <h1>Loading</h1> :
            (
              <div className='tc'>
                <h1 className='f1'>RoboFriends</h1>
                <SearchBox searchChange={onSearchChange}/>
                <Scroll>
                  <CardList robots={filteredRobots} />
                </Scroll>
              </div>
            );
}

export default App;