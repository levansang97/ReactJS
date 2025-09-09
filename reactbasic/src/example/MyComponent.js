import React from 'react';
class MyComponent extends React.Component {
    state = {
        IdleDeadline: null,
        name: "Bin",
        age: 20
    };
    onChangeValue = (event) => {
        this.setState({ name: event.target.value, age: 21 });
    }
    render() {
        let name = "Bin";
        return (
            <>
                <div className='MyComponent'>
                    <input value={this.state.name} type="text" onChange={(event) => this.onChangeValue(event)} />
                    <h2>Hi, My name is {this.state.name}!</h2>
                    <h3>My age is {this.state.age}!</h3>
                </div>
                <div className='ABC'>{name}</div>
            </>)
            ;
    }
}
export default MyComponent;