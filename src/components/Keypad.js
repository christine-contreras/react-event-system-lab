// Code Keypad Component Here
import React, { Component } from 'react'

export class Keypad extends Component {

    keyup = () => (console.log('Entering password...'))

    render() {
        return (
           <form>
                <input type="password" onKeyUp={this.keyup}/>
           </form>
        )
    }
}

export default Keypad
