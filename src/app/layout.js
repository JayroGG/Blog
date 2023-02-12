import Link from 'next/link'

const links = [{
  label: 'Home',
  route: '/'
}, {
  label: 'About',
  route: '/about'
}]

export default function RootLayout ({ children }) {
  return (
    <html>
      <body>
        <header>
          <nav>
            <ul>
              {links.map(({ label, route }) => {
                return (
                  <li key={route}>
                    <Link href={route}>
                      {label}
                    </Link>
                  </li>
                )
              })}
            </ul>
          </nav>
        </header>
        {children}
      </body>
    </html>
  )
}
