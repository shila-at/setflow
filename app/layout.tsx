
import Head from 'next/head';
import ItemsProvider from '@/provider';


export default function ItemsLayout({
  children,
}: {
  children: React.ReactNode
}) {

  return (
    <ItemsProvider>
      <Head>
        <title>Items</title>
      </Head>

      {children}
    </ItemsProvider>

  )
}
