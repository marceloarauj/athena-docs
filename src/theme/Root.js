import React from 'react';
import DocumentationChat from '@site/src/components/DocumentationChat';

export default function Root({ children }) {
  return (
    <>
      {children}
      <DocumentationChat />
    </>
  );
}
