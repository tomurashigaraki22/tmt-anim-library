// src/App.js
import React from 'react';
import { FadeIn, SlideIn, Bounce } from './index';

const App = () => {
  return (
    <div>
      <FadeIn duration={1} delay={0.5}>
        <h1>Welcome to My Animation Library</h1>
      </FadeIn>

      <SlideIn direction="right" duration={1} delay={0.3}>
        <p>This text slides in from the right!</p>
      </SlideIn>

      <Bounce duration={0.7}>
        <button>Click me</button>
      </Bounce>
    </div>
  );
};

export default App;
