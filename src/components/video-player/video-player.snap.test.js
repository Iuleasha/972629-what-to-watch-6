import {render} from '@testing-library/react';
import {createMemoryHistory} from 'history';
import React from 'react';
import {Router} from 'react-router-dom';
import VideoPlayer from './video-player';


describe(`Test VideoPlayer`, () => {
  const history = createMemoryHistory();

  test(`Should video preview render correctly`, () => {
    const {container} = render(
        <Router ver history={history}>
          <VideoPlayer hasCustomControls={false} isAutoPlay={true} isMuted={true} src={``} filmId={`1`}/>
        </Router>,
    );

    expect(container).toMatchSnapshot();
  });

  test(`Should video page render correctly with custom controls`, () => {

    const {container} = render(
        <Router history={history}>
          <VideoPlayer hasCustomControls={false} isAutoPlay={true} isMuted={true} src={``} filmId={`1`}/>
        </Router>,
    );

    expect(container).toMatchSnapshot();
  });
});
