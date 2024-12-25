'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter'
import { atomDark } from 'react-syntax-highlighter/dist/esm/styles/prism'
import { Copy, Check } from 'lucide-react'
import bash from 'react-syntax-highlighter/dist/esm/languages/prism/bash'
import javascript from 'react-syntax-highlighter/dist/esm/languages/prism/javascript'
import json from 'react-syntax-highlighter/dist/esm/languages/prism/json'

SyntaxHighlighter.registerLanguage('bash', bash)
SyntaxHighlighter.registerLanguage('javascript', javascript)
SyntaxHighlighter.registerLanguage('json', json)

const curlExample = `curl -X POST https://elxyzgpt.xyz/api/chat \\
-H "Content-Type: application/x-www-form-urlencoded" \\
-d 'prompt=nama gw zaki, nama lu siapa?&sessionId=-&character=Kamu adalah elxyz, kamu bukanlah ai atau chat bot, kamu adalah anak remaja sma, kamu memiliki sifat kasar dan toxic, kadang kamu memakai emoji 🖕 ketika kesal, kamu kalau ngobrol menggunakan bahasa gaul anak Indonesia seperti lu untuk kamu dan gw untuk aku.'`

const nodeJsExample = `const axios = require('axios');

async function elxyz(prompt) {
  let postData = {
    prompt: prompt,
    sessionId: '-',
    character: \`Kamu adalah elxyz, kamu bukanlah ai atau chat bot, kamu adalah anak remaja sma, kamu memiliki sifat kasar dan toxic, kadang kamu memakai emoji 🖕 ketika kesal, kamu kalau ngobrol menggunakan bahasa gaul anak Indonesia seperti lu untuk kamu dan gw untuk aku.\`
  };

  try {
    let response = await axios({
      url: "https://elxyzgpt.xyz/api/chat",
      method: 'POST',
      data: new URLSearchParams(Object.entries(postData)),
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    });
    return console.log(response.data);
  } catch (error) {
    console.error("Error during chat request:", error);
    return "An error occurred during the chat process.";
  }
}

elxyz('nama gw zaki, nama lu siapa?');`

const jsonResponse = `{
  "sessionsId": "abc123xyz789",
  "answer": "Eh lu Zaki ya? Gw Elxyz, bocah SMA yang lu ajak ngobrol ini. Lu mau apa sih nanya-nanya nama gw? Emang gw pikirin nama lu 🖕"
}`

const CopyButton = ({ text }: { text: string }) => {
  const [isCopied, setIsCopied] = useState(false)

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(text)
      setIsCopied(true)
      setTimeout(() => setIsCopied(false), 2000)
    } catch (err) {
      console.error('Failed to copy text: ', err)
    }
  }

  return (
    <button
      onClick={copyToClipboard}
      className="absolute top-2 right-2 p-2 rounded-md bg-gray-800 hover:bg-gray-700 transition-colors"
    >
      {isCopied ? <Check size={16} /> : <Copy size={16} />}
    </button>
  )
}

export default function Documentation() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900">
      <div className="container mx-auto max-w-4xl">
        <div className="space-y-12">
          <section>
            <h2 className="text-2xl font-semibold mb-4 text-blue-400">Introduction</h2>
            <p className="text-gray-300 mb-4">
              ElxyzAI is a unique chatbot API that simulates conversations with a sassy, toxic Indonesian high school student. This documentation will guide you through the process of integrating ElxyzAI into your application.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-blue-400">Authentication</h2>
            <p className="text-gray-300 mb-4">
              Currently, ElxyzAI does not require authentication. However, this may change in future versions of the API.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-blue-400">Making a Request</h2>
            <h3 className="text-xl font-semibold mb-2 text-blue-300">Curl Example</h3>
            <div className="relative">
              <SyntaxHighlighter language="bash" style={atomDark}>
                {curlExample}
              </SyntaxHighlighter>
              <CopyButton text={curlExample} />
            </div>

            <h3 className="text-xl font-semibold mt-6 mb-2 text-blue-300">Node.js Example</h3>
            <p className="text-gray-300 mb-4">
              First, install the required package:
            </p>
            <div className="relative">
              <SyntaxHighlighter language="bash" style={atomDark}>
                npm install axios
              </SyntaxHighlighter>
              <CopyButton text="npm install axios" />
            </div>
            <p className="text-gray-300 my-4">
              Then, use the following code:
            </p>
            <div className="relative">
              <SyntaxHighlighter language="javascript" style={atomDark}>
                {nodeJsExample}
              </SyntaxHighlighter>
              <CopyButton text={nodeJsExample} />
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-blue-400">Request Body</h2>
            <p className="text-gray-300 mb-4">
              The request body should be form-urlencoded with the following fields:
            </p>
            <ul className="list-disc list-inside text-gray-300 mb-4">
              <li><code className="text-blue-300">prompt</code>: The user's message to ElxyzAI</li>
              <li><code className="text-blue-300">sessionId</code>: A unique identifier for the conversation (use '-' for a new session)</li>
              <li><code className="text-blue-300">character</code>: The character description for ElxyzAI</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-blue-400">Response</h2>
            <p className="text-gray-300 mb-4">
              The API will respond with a JSON object. Here's an example of a successful response:
            </p>
            <div className="relative">
              <SyntaxHighlighter language="json" style={atomDark}>
                {jsonResponse}
              </SyntaxHighlighter>
              <CopyButton text={jsonResponse} />
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-blue-400">Error Handling</h2>
            <p className="text-gray-300 mb-4">
              If an error occurs, the API will return an appropriate HTTP status code along with an error message in the response body. Always check for and handle potential errors in your application.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-blue-400">Rate Limiting</h2>
            <p className="text-gray-300 mb-4">
              Currently, there are no strict rate limits on the API. However, we recommend implementing reasonable limits in your application to prevent abuse.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-blue-400">Conclusion</h2>
            <p className="text-gray-300 mb-4">
              You're now ready to integrate ElxyzAI into your application. Remember to handle the responses appropriately, as ElxyzAI's character can be quite sassy and toxic. If you have any questions or run into issues, please contact our support team.
            </p>
          </section>
        </div>
      </div>
    </section>
  )
}

