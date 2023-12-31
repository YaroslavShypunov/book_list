import React from 'react';
import Container from './container';

const Footer = () => {
  return (
    <footer className="bg-gray-100 p-4">
      <Container>
        <p className="text-sm text-center">Happy New Year 🎉</p>
      </Container>
    </footer>
  );
};

export default React.memo(Footer);
