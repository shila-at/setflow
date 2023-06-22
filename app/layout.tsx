
import Head from 'next/head';
import MainProvider from '@/provider';


export default function ItemsLayout({
  children,
}: {
  children: React.ReactNode
}) {

  return (
    <MainProvider>
      <Head>
        <title>Items</title>
      </Head>

      {children}
    </MainProvider>

  )
}
