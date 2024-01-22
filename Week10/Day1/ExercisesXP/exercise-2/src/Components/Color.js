import React from 'react';

class Color extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    shouldComponentUpdate = () => {
        return true;
    }

    componentDidMount = () => {
        this.setState({favoriteColor: "red"});
    }

    componentDidUpdate = (prevProps, prevState) => {
        console.log('after update');
        if (prevState.favoriteColor === 'red') {
            setTimeout(() => this.setState({favoriteColor: "yellow"}), 2000);
        }
    }

    getSnapshotBeforeUpdate = () => {
        console.log("in getSnapshotBeforeUpdate");
    }

    changeColor = () => {
        this.setState({favoriteColor: "blue"});
    }

    render() {
        return (
            <>
            <h2>My favorite color is {this.state.favoriteColor}</h2>
            <button onClick={this.changeColor}>Change Color</button>
            </>
    )};
}

export default Color;