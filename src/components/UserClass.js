import React from "react";
class UserClass extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            count:0,
            count1:2
        }
        
    }
    
    render(){
        const {count,count1} = this.state
        return <>
        <div className="user_card_main_con">
        <h1>Count = {count}</h1>
        <button onClick={()=>{
            this.setState({
                count: this.state.count + 1
            });
        }}>Count Increment</button>
            <h2>{this.props.name}</h2>
            <h3>{this.props.location}</h3>
            <h4>{this.props.profession}</h4>
        </div>
        </>
    }
        
}

export default UserClass;