// Code DigitalClicker Component Here
import React from "react"

export default class DigitalClicker extends React.Component {

    constructor() {
        super()
        this.state = {
            timesClicked: 0
        }
    }

    handleClick = (e) => {
        let newClicks = this.state.timesClicked + 1
        this.setState({
            timesClicked: newClicks
        })
    }

    timesClicked = () => {
        return this.state.timesClicked
    }

    render() {
        return (
            <div>
                <button onClick={this.handleClick}>{this.timesClicked()}</button>
            </div>
        )
    }

}