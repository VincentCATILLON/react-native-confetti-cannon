import * as React from 'react';
import { storiesOf, addDecorator } from '@storybook/react-native';
import { withKnobs, boolean, number, array, button } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import ConfettiCannon, {DEFAULT_COLORS, DEFAULT_EXPLOSION_SPEED, DEFAULT_FALL_SPEED} from 'react-native-confetti-cannon';

import ScreenSimulator from './components/screen-simulator';

storiesOf('Demo', module)
  .addDecorator(withKnobs)
  .addDecorator(ScreenSimulator)
  .add('Default', () => {
    let ref;

    const result = (
      <ConfettiCannon
        count={number('count', 200, {}, 'Props')}
        origin={{
          x: number('origin.x', -10, {}, 'Props'),
          y: number('origin.y', -10, {}, 'Props')
        }}
        explosionSpeed={number('explosionSpeed', DEFAULT_EXPLOSION_SPEED, {}, 'Props')}
        fallSpeed={number('fallSpeed', DEFAULT_FALL_SPEED, {}, 'Props')}
        fadeOut={boolean('fadeOut', false, 'Props')}
        colors={array('colors', DEFAULT_COLORS, ',', 'Props')}
        autoStart={boolean('autoStart', true, 'Props')}
        onAnimationStart={action('onAnimationStart')}
        onAnimationStop={action('onAnimationStop')}
        onAnimationResume={action('onAnimationResume')}
        onAnimationEnd={action('onAnimationEnd')}
        ref={_ref => ref = _ref}
      />
    );

    button('Start', () => ref.start(), 'Methods');
    button('Stop', () => ref.stop(), 'Methods');
    button('Resume', () => ref.resume(), 'Methods');

    return result;
  });
