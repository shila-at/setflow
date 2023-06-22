'use client'
import {
    QueryClient,
} from '@tanstack/react-query';

const useQuery = () => {
    const queryClient = new QueryClient();
    return queryClient;
};

export default useQuery;