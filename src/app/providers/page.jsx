'use client';

import { Provider } from 'react-redux';
import { ThemeProvider } from 'next-themes'
import { setupStore } from "../store/page";
import LayoutWrapper from '../components/layout/wrapper'

export function Providers({ children }) {
  const store = setupStore({});
  if (!store) console.error('Store not initialized');

  return (
      <Provider store={store}>
        <ThemeProvider attribute="class">
          <LayoutWrapper>
            {children}
          </LayoutWrapper>
        </ThemeProvider>
      </Provider>
  );
}
