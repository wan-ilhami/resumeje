'use client';

import { Provider } from 'react-redux';
import { ThemeProvider } from 'next-themes'
import { setupStore } from "@/store/store";
import LayoutWrapper from '@/components/layout/wrapper'
import { GoogleOAuthProvider } from '@react-oauth/google'

export function Providers({ children }) {
  const store = setupStore({});
  if (!store) console.error('Store not initialized');


  return (
    <GoogleOAuthProvider clientId={process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID}>
      <Provider store={store}>
        <ThemeProvider attribute="class">
          <LayoutWrapper>
            {children}
          </LayoutWrapper>
        </ThemeProvider>
      </Provider>
    </GoogleOAuthProvider>
  );
}