import React from 'react';
import * as Model from './Model';
import {dec, inc} from './Model';
import observe from 'mvsplit-react';

function Counter({mvsplit: {model, notify, handle}}) {
    return (
        <div>
            <p>
                <strong>Counter is {model.counter}</strong>
            </p>
            <p>
                <button onClick={notify(dec)}>Decrement</button>
                <button onClick={notify(inc)}>Increment</button>
            </p>
        </div>
    );
}

export default observe(Model.create(), Counter);
