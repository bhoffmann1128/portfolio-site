import '@/app/globals.css'
import '@fontsource-variable/overpass'

export const metadata = {
  title: 'B.HOFFMANN',
  description: 'Lead Web Developer / Creative Director',
  viewport: "width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0"
}

export default function BasicLayout({
  children,
}: {
  children: React.ReactNode
}) {
  

  return (
        <>
          {children}
        </>
  )
}
