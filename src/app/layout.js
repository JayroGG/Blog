import '../styles/globals.css'
import Navigation from '../components/Navigation'

export default function RootLayout ({ children }) {
  // Main Layout
  // Contains Navigation and the entire App as children
  return (
    <html>
      <body>
        <Navigation />
        {children}
      </body>
    </html>
  )
}
