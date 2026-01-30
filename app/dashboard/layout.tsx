import SideNav from "../ui/dashboard/sidenav"
import "../ui/global.css"

import { baloo } from "@/app/ui/fonts"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
      <div className="w-full flex-none md:w-64">
        <SideNav />
      </div>
      <div className={`grow p-6 md:overflow-y-auto md:p-12 ${baloo.className}`}>
        {children}
      </div>
    </div>
  )
}
