import { ROUTES } from '@/constants/routes';
import React from 'react';
import NavItem from './nav-item';
import Container from './container';

const Header = () => {
  return (
    <header className="bg-primary text-white">
      <Container>
        <nav>
          <ul className="flex h-16 items-center justify-between">
            <NavItem name={'Home'} href={ROUTES.HOME} />
          </ul>
        </nav>
      </Container>
    </header>
  );
};

export default React.memo(Header);
