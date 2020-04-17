import React from 'react'
class Click extends React.Component{
    constructor(props){
        super(props);
        this.state={
            num:1
        }
    }
    change = () =>{
        let random=Math.floor(Math.random()*this.props.maxNum)+1;
        this.setState({num:random});
    }
    render(){
        return(
            <div>
                <h1>Number is: {this.state.num}</h1>
                {this.state.num===7?<h2>YOU WIN!</h2>:<button onClick={this.change}>Random Number</button>}
            </div>
        )
    }
}
export default Click;