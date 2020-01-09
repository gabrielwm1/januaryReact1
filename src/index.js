import React, { Component } from "react";
import ReactDOM, { render } from "react-dom";
import Player from "./Player";
import PropTypes from "prop-types";
class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            players: [
                {
                    name: "gabriel",
                    id: "1"
                }
            ]
        };
    }

    // static propTypes = {
    //     handleAddName: PropTypes.func
    // };

    playerInput = React.createRef();

    handleAddName = name => {
        console.log(name);
        this.setState(prevState => {
            return {
                players: [
                    ...prevState.players,
                    {
                        name,
                        id: 9
                    }
                ]
            };
        });
    };

    handleSubmit = e => {
        e.preventDefault();
        console.log("test");
        console.log(this.playerInput.current.value);
        // let name = this.playerInput.current.value;
        // this.handleAddName(this.playerInput.current.value);
        // e.currentTarget.reset();
    };

    render() {
        return (
            <div>
                <div className="ui container comments">
                    {this.state.players.map(player => (
                        <Player
                            name={player.name}
                            id={player.id}
                            key={player.id.toString()}
                        />
                    ))}
                </div>

                <form onSubmit={this.handleSubmit}>
                    <div className="ui form">
                        <div className="fields">
                            <div className="field">
                                <label>First name</label>
                                <input
                                    type="text"
                                    placeholder="First name"
                                ></input>
                                <button className="ui button" type="submit">
                                    Submit
                                </button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        );
    }
}

ReactDOM.render(<App />, document.querySelector("#root"));
