import MainProvider from '@provider/index';

export default function ItemsLayout({
  children,
}: {
  children: React.ReactNode
}) {

  return (
    <html lang="en">
      <body>
        <MainProvider>
          {children}
        </MainProvider>
      </body>
    </html>


  )
}
