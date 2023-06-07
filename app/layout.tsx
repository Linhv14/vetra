import "@/style/global.css"
import { ReactNode } from "react"
import Sidebar from "@/components/Sidebar"
import Header from "@/components/Header"
import Notification from "@/components/Notification"
import Setting from "@/components/Setting"
import Footer from "@/components/Footer"

export const metadata = {
  title: "Vetra",
  description: "E-commerce Dashboard App"
}

const RootLayout = ({ children }: { children: ReactNode }) => {
  return (
    <html lang="en">
      <body>
        <main className="vetra">
          <Sidebar />

          <section className="container">
            <div className="main">
              <Header />

              {children}
            </div>

            <Footer />
          </section>

          <Notification />

          <Setting />

        </main>
      </body>
    </html>
  )
}

export default RootLayout