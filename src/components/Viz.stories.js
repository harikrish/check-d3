// src/components/Task.stories.js

import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import Viz from "./Viz";

storiesOf('Viz', module)
  .add('default', () => <Viz shapes={{color: 'green', width: 100, "radius": 20}} />)