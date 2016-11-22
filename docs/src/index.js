import React from 'react';
import ReactDOM from 'react-dom';
import 'material-design-lite/dist/material.min.css';

import '../../dist/style.css'
import { Avatar, Button, Dropdown, IconAvatar, Pagination, Spinner, TextArea }  from '../../dist/index.min.js'

ReactDOM.render(
    <div>
        Hello World
        <IconAvatar icon="add" onClick={ () => console.log('Clicked') } />
        <Avatar image="https://s.gravatar.com/avatar/f548ad670a04573308aa7138a5e6f04c?s=480&r=pg&d=https%3A%2F%2Fcdn.auth0.com%2Favatars%2Ffo.png" />
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
<Spinner />
<TextArea
    id="textArea"
    label="Text"
    onChange={ (name, value) => console.log(name, value) }
/>
<Pagination
    currentPage={ 1 }
  hasNext
  hasPrevious
  onPrevious={ () => console.log('PREV')}
  onNext={ () => console.log('NEXT')}
  pageNumber={ 13 }
  count={ 32 }
/>
    </div>,
    document.getElementById('app')
);