declare module 'react-syntax-highlighter' {
  import React from 'react'
  export const PrismLight: React.ComponentType<{
    children: string
    style?: any
    language?: string
    showLineNumbers?: boolean
  }>
}

declare module 'react-syntax-highlighter/dist/esm/styles/prism' {
  export const atomDark: any
}

declare module 'react-syntax-highlighter/dist/esm/languages/prism/bash' {
  const language: any
  export default language
}

declare module 'react-syntax-highlighter/dist/esm/languages/prism/javascript' {
  const language: any
  export default language
}

declare module 'react-syntax-highlighter/dist/esm/languages/prism/json' {
  const language: any
  export default language
}

