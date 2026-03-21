import { ReactNode } from 'react';
import { Navbar } from './Navbar';
import { Footer } from './Footer';
import { CustomCursor } from './CustomCursor';

export function Layout({ children }: { children: ReactNode }) {
  return (
    <>
      <CustomCursor />
      <Navbar />
      <main className="pt-[60px] md:pt-[72px]">{children}</main>
      <Footer />
    </>
  );
}
