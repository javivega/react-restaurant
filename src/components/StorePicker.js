import React, { Component } from 'react';
import { getFunName } from '../helpers';

class StorePicker extends Component {

    goToStore(event){
        event.preventDefault();
        console.log(this.storeInput.value);
    }

    render() {
        return (
            <form className="store-selector" onSubmit={(e) => this.goToStore(e)} >
                <h2>Please Enter a Store</h2>
                <input ref={input => this.storeInput = input} type="text" required placeholder="Store Name" defaultValue={getFunName()} />
                <button type="submit">Visit Store</button>
            </form>
        )
    }

}

export default StorePicker;