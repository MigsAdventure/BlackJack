import React from 'react';
import {render} from 'react-dom';
import './stores/CardsStore';
import Table from './components/Table';

render(
  <Table/>, document.getElementById('root')
  )