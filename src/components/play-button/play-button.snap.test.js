import {render} from '@testing-library/react';
import React from 'react';
import PlayButton from './play-button';

test(`Should PlayButton render correctly`, () => {
  const {container} = render(<PlayButton id={`1`}/>);
  expect(container).toMatchSnapshot();
});
