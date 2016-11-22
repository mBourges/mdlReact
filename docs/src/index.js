import React from 'react';
import ReactDOM from 'react-dom';
import 'material-design-lite/dist/material.min.css';

import { Button }  from '../../dist/index.min.js'

ReactDOM.render(
    <div>
        Hello World
        <Button
            fab
              icon
              value="add"
              accent
              ripple
        />
    </div>,
    document.getElementById('app')
);