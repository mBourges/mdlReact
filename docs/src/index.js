import React from 'react';
import ReactDOM from 'react-dom';
import 'material-design-lite/dist/material.min.css';

import '../../dist/style.css'
import { Button, Dropdown }  from '../../dist/index.min.js'

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
        <Dropdown
  label="Country"
  onChange={ (item) => console.log(item)  }
  source={ [{
      label: 'France',
      value: 'france'
  }, {
      label: 'UK',
      value: 'uk'
  }] }
  canBeEmpty
/>
    </div>,
    document.getElementById('app')
);