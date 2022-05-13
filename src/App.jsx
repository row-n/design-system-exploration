import classNames from 'classnames';

import Box from './components/Box/Box';
import Button from './components/Button/Button';
import Heading from './components/Heading/Heading';
import sprinklesCss from './tokens/sprinkles.css.ts';

function App() {
  return (
    <Box as="main">
      <Box
        className={classNames(
          sprinklesCss({
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
          })
        )}
      >
        <Heading>Page heading</Heading>
        <Button>Testing position</Button>
      </Box>
    </Box>
  );
}

export default App;
