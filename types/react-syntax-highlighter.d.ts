declare module 'react-syntax-highlighter' {
  import React from 'react';
  
  export const Prism: React.ComponentType<{
    children: string;
    language: string;
    style?: any;
  }>;
}

declare module 'react-syntax-highlighter/dist/esm/styles/prism' {
  export const atomDark: any;
}

