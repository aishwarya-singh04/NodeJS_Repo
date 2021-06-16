import React, { Component } from 'react'

export default class ReactState extends Component {
    constructor(props){
        super(props);
        this.state={
            count: this.props.count
        };

        this.increament = this.increament.bind(this)
        this.decreament = this.decreament.bind(this)
        this.reset = this.reset.bind(this)
    }
    increament(){
        this.setState({
            count: this.state.count + 1
          });
    };
    decreament(){
        /*this.setState({
            count: this.state.count - 1
          });*/
          if(this.state.count < 0){
            this.setState({
                count:0
            });
          }else {
            this.setState({
                count: this.state.count - 1
            });
          }
    };
    reset(){
        this.setState({
            count: this.state.count -this.state.count
          });
    };
    render() {
        return (
            <div>
                <h1>{this.state.count}</h1>
                <button type="button" class="btn btn-primary " onClick={this.increament}>Increase</button>
                <button type="button" class="btn btn-primary " onClick={this.reset}>Reset</button>
                <button type="button" class="btn btn-primary " onClick={this.decreament}>Decrease</button>
            </div>
        );
    }
}