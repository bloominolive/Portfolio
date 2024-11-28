import React from 'react';

//sets styles for main on website
export default function MainContent({ children }) {
  return (
    <main className="flex-grow-1 mb-5 pb-5"  style={{
        paddingTop: '190px', // Adjust to match the height of your navbar
      }}>
      {children}
    </main>
  );
}
