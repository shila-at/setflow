'use client'
import { QueryClientProvider } from '@tanstack/react-query';
import { FilterContext } from '@context/FilterContext';
import { useFilters } from '@hooks/useFilters';
import useQuery from '@hooks/useQuery';


export default function MainProvider({
    children,
}: {
    children: React.ReactNode
}) {

    const queryClient = useQuery();
    const options: any = useFilters();

    return (
        <QueryClientProvider client={queryClient}>
            <FilterContext.Provider value={options}>

                {children}
            </FilterContext.Provider>
        </QueryClientProvider>

    )
}
