import React from "react";
import Navbar from "./navbar";

const Layout = ({ children }) => {
  return (
    <>
      <Navbar item1="College Finder" item2="Scholarships" />

      <div
        style={{
          position: 'relative',
          minHeight: '100vh',
          overflow: 'hidden',
        }}
      >
        <div
          style={{
            backgroundImage:
              'url("https://res.cloudinary.com/dmcqcr9ek/image/upload/v1724593922/yfuldv9dgygldkl54wxa.jpg")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            filter: 'blur(2px)',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            zIndex: -1,
          }}
        />
        <main
          style={{
            position: 'relative',
            zIndex: 1,
            backdropFilter: 'blur(0px)',
            width: '100%',
            height: '100%',
          }}
        >
          {children}
        </main>
      </div>
    </>
  );
};

export default Layout;
