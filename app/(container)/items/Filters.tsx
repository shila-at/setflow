
import { Stack, Divider } from '@mui/material';
import { colorPalette } from '@components/colors';
import Sort from './Sort';
import SetFilter from './TypeFilter';
import CategoryFilter from './CategoryFilter';


const Filters = () => {

    return (
        <Stack
            flexDirection={'row'}
            justifyContent={'space-between'}
            p={'25px 0'}
        >
            <Stack
                flexDirection={'row'}
                alignItems={'center'}
                gap={'16px'}
            >
                <SetFilter />
                <Divider orientation='vertical' sx={{ height: '70%', borderColor: colorPalette.gray }} />
                <CategoryFilter />
            </Stack>
            <Sort />
        </Stack>
    );
};

export default Filters;