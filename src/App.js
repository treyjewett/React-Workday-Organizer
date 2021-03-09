import React, { Component } from "react";
import Header from "./components/Header";
import Hours from "./components/Hours";
import workday from "./workday.json";
import moment from "moment";

class App extends Component {

    componentDidMount() {
        for (let i = 9; i <= 17; i++) {
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

    determineTense = (timeSlot, time) => (time === timeSlot ? "present" : "future");

    colorCode = ({ id: timeSlot }) => {
        const currentTime = Number(moment().format("H"));
        return currentTime > timeSlot
            ? "past"
            : this.determineTense(timeSlot, currentTime);
    };

    render() {
        return (
            <>
                <Header />
                {workday.map(hour => {
                    return (
                        <Hours
                            saveTask={this.saveTask}
                            tense={this.colorCode(hour)}
                            id={hour.id}
                            key={hour.id}
                            hour={hour.hour}
                            value={hour.value}
                        />
                    )
                })}
            </>
        );
    }
};

export default App;