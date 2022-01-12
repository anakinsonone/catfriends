import React, { Component } from "react";
import CardList from "../components/CardList";
import SearchBox from "../components/SearchBox";
import Scroll from "../components/Scroll";
import './App.css';

class App extends Component {
    constructor() {
        super()
        this.state = {
            cats: [],
            searchfield: ''
        }
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response=> response.json())
            .then(users=> this.setState({cats: users}))
    }

    onSearchChange = (event) => {
        this.setState({searchfield: event.target.value})        
    }

    render() {
        const filteredCats = this.state.cats.filter(cats => {
            return cats.name.toLowerCase().includes(this.state.searchfield.toLowerCase())
            }
        )

        if(this.state.cats.length === 0) {
            return <h1 className="tc">Loading</h1>
        } else {

            return (
                <div className="tc">
                    <h1 className="f1">Cat Friends!</h1>
                    <SearchBox searchChange={ this.onSearchChange }/>
                    <Scroll>
                        <CardList cats = { filteredCats }/>
                    </Scroll>                        
                </div>
            );
        }
    }
    
}

export default App;