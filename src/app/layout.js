import Navbar from "@/components/navbar/Navbar"
import Footer from "@/components/footer/Footer"

export const metadata = {
  title: 'Full Stack App',
  description: 'Generated by Next.js',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
      <Navbar/>
        {children}
      <Footer/>
      </body>
    </html>
  )
}
