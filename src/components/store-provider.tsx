'use client';
import { AppStore, setupStore } from '@/store';
import React, { ReactNode, useRef } from 'react';
import { Provider } from 'react-redux';

interface IStoreProvider {
  children: ReactNode;
}

const StoreProvider = ({ children }: IStoreProvider) => {
  const storeRef = useRef<AppStore>();

  if (!storeRef.current) {
    storeRef.current = setupStore();
  }

  return <Provider store={storeRef.current}>{children}</Provider>;
};

export default React.memo(StoreProvider);
