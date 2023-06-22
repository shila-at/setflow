
import { useState } from 'react';


export const useFilters = () => {

    const [sort, setSort] = useState<string>('');
    const [category, setCategory] = useState<string>('');
    const [type, setType] = useState<string>('');

    const changeSortFilter = (name: string) => {
        setSort(name);
    };
    const changeCategoryFilter = (name: string) => {
        setCategory(name);
    };
    const changeTypeFilter = (name: string) => {
        setType(name);
    };





    return {
        changeCategoryFilter,
        changeSortFilter,
        changeTypeFilter,
        sort,
        category,
        type
    };
};
