import React, { Component } from "react";

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            number: 1, // va afisa numarul de la care va porni.
        };
    }
    increment = () => {
        this.setState({ number: this.state.number + 1 });
    };
    decrement = () => {
        this.setState({ number: this.state.number - 1 });
    };

    neutral = () => {
        this.setState({ number: 0 });
    };

    render() {
        return (
            <div className="row justify-content-center">
                <div
                    className="col-md-6"
                    style={{ marginTop: "200px", border: "5px solid black" }}
                >
                    <h1>React Counter Numbers</h1>
                    <h1>{this.state.number}</h1>
                    <button
                        className="btn btn-success"
                        onClick={this.increment}
                    >
                        Increase
                    </button>
                    <button className="btn btn-danger" onClick={this.decrement}>
                        Decrease
                    </button>
                    <button className="btn btn-primary" onClick={this.neutral}>
                        Neutral
                    </button>
                </div>
            </div>
        );
    }
}

export default Main;
