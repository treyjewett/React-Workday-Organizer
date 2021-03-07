import React, { Component } from "react";
import Header from "./components/Header";
import Hours from "./components/Hours";
import workday from "./workday.json";
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {

    componentWillMount() {
        if (!localStorage.getItem("localStorage Generated")) {
            for(let i = 1; i <= 9; i++) {
                localStorage.setItem(`${i}`, "");
            };
            localStorage.setItem("localStorage Generated", true)
        };
        // for(let i = 1; i <= 9; i++) {
        //     let storageValue = localStorage.getItem(`${i}`);
        //     if (storageValue !== null) {
        //         document.getElementById(`${i}`).value = storageValue;
        //     }
        //     console.log(storageValue);
        // };
        // JSON.parse(document.getElementById("4").value = "cash money");
    };

    // const assignTasks = () => {
    //     for(let i = 1; i <= 9; i++) {
    //         let storageValue = localStorage.getItem(`${i}`);
    //         document.getElementById(`${i}`).value = storageValue;
    //     };
    // };

    componentDidMount() {
        const dailytasks = localStorage.getItem('task');
        console.log("localStorage pull: ", dailytasks)
    }

    saveTask(props) {
        // let time = workday.find(x => x.id === props.id);
        // console.log("object: ", time.hour);
        // setHour(time)
        console.log("workday: ", workday);
        // const task = this.state.hour.filter(hour => hour.props === props.id);
        // alert(task.hour);
        console.log("props: ", props.hour);
        // console.log("task: ", task);
        let taskValue = document.getElementById(props.id).value;
        console.log("value: ", taskValue);
        localStorage.setItem(`${props.id}`, taskValue);
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