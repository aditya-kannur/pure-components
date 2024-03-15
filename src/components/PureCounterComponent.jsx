import React, { PureComponent } from 'react';

class PureCounterComponent extends PureComponent {

    constructor() {
        super();
        this.state = {
            count : 0,
            toggle : false
        }
    }

    Increament = () => {
        if (this.state.toggle){
            this.setState({
                count : this.state.count + 1 
            })
        }else {
            this.setState({
                count : this.state.count  
            })
            
        }
        
    }
    Toggle = () => {
        this.setState({toggle: !this.state.toggle})
    }
    

    render() {
        console.log("This is Pure Component")
        return (
            <>
              <div>
                    <h2>Pure Componenet</h2>
                    <h2>{this.state.count}</h2>
                    <button onClick={this.Toggle}>Toggle</button>
                    <button onClick={this.Increament}>Counter</button>
            </div>
            </>
          
        );
    }
}


export default PureCounterComponent;