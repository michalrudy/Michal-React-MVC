import React from 'react';
import Counter from './Counter';
import Toggle from './Toggle';
import FormInput from './FormInput';
import ListComponent from './ListComponent';

function MainContent({ user }) {
  if (!user) {
    return <h2>Please log in to see the content</h2>;
  }

  return (
    <main>
      <h2>Welcome to My React App</h2>
      <p>This is Michał's App.</p>
      <Counter />
      <Toggle />
      <FormInput />
      <ListComponent />
    </main>
  );
}

export default MainContent;
