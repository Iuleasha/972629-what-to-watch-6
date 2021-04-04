import {render} from '@testing-library/react';
import React from 'react';
import {ButtonIcon} from '../../constants/constant';
import MovieCardButton from './movie-card-button';

describe(`Test MovieCardButton`, () => {
  test(`Should render correctly with text`, () => {
    const {container} = render(<MovieCardButton buttonText="Test"/>);
    expect(container).toMatchSnapshot();
  });

  test(`Should render correctly with icon`, () => {
    const {container} = render(<MovieCardButton icon={ButtonIcon.PLAY}/>);
    expect(container).toMatchSnapshot();
  });

  test(`Should render correctly with text and icon`, () => {
    const {container} = render(<MovieCardButton buttonText="Test" icon={ButtonIcon.PLAY}/>);
    expect(container).toMatchSnapshot();
  });
});
