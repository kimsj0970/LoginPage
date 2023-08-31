import './globals.css'

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className = 'mainbody'>{children}</body>
    </html>
  )
}
