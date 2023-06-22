
import itemsData from '@public/itemsData.json';
import { useQuery } from '@tanstack/react-query';
import { UtilsHelper } from '@utils/UtilsHelper';
interface Filters {
    type: string,
    sort: string,
    category: string
}
const fetchItems = async ({ type, sort, category }: Filters) => {

    const _data = itemsData.filter((_el: any) => !!category ? _el.Category === category : _el)
        .filter((_el: any) => !!type ? _el.Type === type : _el);

    return !!sort && sort === UtilsHelper.Sort[1] ? _data.reverse() : _data
}

const GetItems = ({ type, sort, category }: Filters) => {
    return useQuery({
        queryKey: ['items', { type, sort, category }],
        queryFn: () => fetchItems({ type, sort, category }),
    })
}

export { GetItems, fetchItems }