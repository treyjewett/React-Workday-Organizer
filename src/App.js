import React, { Component } from "react";
import Header from "./components/Header";
import Hours from "./components/Hours";
import hour from "./workday.json";
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
    state = {
        hour
    };

    saveTask = () => {
        alert("Button Works!");
    }

    render() {
        return (
            <>
                <Header />
                {this.state.hour.map(hour => (
                    <Hours
                        saveTask={this.saveTask}
                        id={hour.id}
                        key={hour.id}
                        hour={hour.hour}
                        value={hour.value}
                    />
                ))}
            </>
        );
    }
};

export default App;