
'use client'
import Head from 'next/head';
import {
  QueryClientProvider,
} from '@tanstack/react-query';
import { ItemContext } from '@context/ItemContext';
import { useFilters } from '@hooks/useFilters';
import {
  Stack,
} from '@mui/material';
import useQuery from '@hooks/useQuery';

export const metadata = {
  title: 'Items',
  description: 'items list',
}
export default function ItemsLayout({
  children,
}: {
  children: React.ReactNode
}) {

  const queryClient = useQuery();
  const options: any = useFilters();

  return (
    <QueryClientProvider client={queryClient}>
      <ItemContext.Provider value={options}>
        <Head>
          <title>Items</title>
        </Head>

        {children}
      </ItemContext.Provider>
    </QueryClientProvider>

  )
}
