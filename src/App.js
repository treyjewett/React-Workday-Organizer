import React, { Component } from "react";
import Header from "./components/Header";
import Hours from "./components/Hours";
import workday from "./workday.json";

class App extends Component {

    componentDidMount() {
        for(let i = 1; i <= 9; i++) {
            let storageValue = localStorage.getItem(`${i}`);
            if (storageValue !== null) {
                document.getElementById(`${i}`).value = storageValue;
            }
        };
    }

    saveTask(props) {
        let taskValue = document.getElementById(props.id).value;
        localStorage.setItem(`${props.id}`, taskValue);
        alert(`${props.hour} Task Saved!`);
    };

    render() {
        return (
            <>
                <Header />
                {workday.map(hour => (
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