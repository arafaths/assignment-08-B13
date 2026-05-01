import Footer from '@/components/share/footer';
import Navbar from '@/components/share/navbar';
import React from 'react';

const LayoutPage = ({children}) => {
  return (
    <>
      <Navbar/>
      <main>{children}</main>
      <Footer/>
    </>
  );
};

export default LayoutPage;