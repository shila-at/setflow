
import { useState, useContext } from 'react';
import Image from 'next/image';
import { FilterContext } from '@context/FilterContext';
import { SelectChangeEvent } from '@mui/material';
import { UtilsHelper } from '@utils/UtilsHelper';
import arrowDownIcon from '@icons/downArrow.svg';
import MenuItem from '@mui/material/MenuItem';
import Select from '@uiKits/select/Select';
import Stack from '@mui/material/Stack';

const PopoverPaperStyle = {
    background: '#fff',
    border: '1.5px solid rgba(198, 198, 199, 0.6)',
    boxShadow: 'unset',
    borderRadius: '10px',
    maxHeight: 200,
    top: 115
};

const DropDownIcon = ({ ...other }) => (
    <Image
        src={arrowDownIcon}
        priority={true}
        alt={'arrow'}
        width={12}
        height={12}
        style={{
            right: '16px',

        }}
        {...other}
    />
);

const CategoryFilter = () => {

    const [filter, setFilter] = useState('Category: none');
    const { changeCategoryFilter } = useContext(FilterContext);

    const handleChangeType = (event: SelectChangeEvent<any>) => {

        if (event.target.value === 'none') {
            setFilter('Category: none');
            changeCategoryFilter('');
        } else {
            setFilter(`Category: ${event.target.value as string}`);
            changeCategoryFilter(event.target.value as string);
        }

    };

    return (
        <Stack width={'170px'}>
            <Select
                fullWidth={true}
                value={filter ?? ''}
                label={''}
                onChange={(e) => handleChangeType(e)}
                IconComponent={(props) => <DropDownIcon {...props} />}
                color={'success'}
                MenuProps={{
                    sx: {
                        '& .MuiPaper-root': PopoverPaperStyle,
                    },
                    anchorOrigin: {
                        vertical: 'top',
                        horizontal: 'left',
                    },
                    transformOrigin: {
                        vertical: 'top',
                        horizontal: 'left',
                    },

                }}
                sx={{
                    height: 40,
                    '.MuiOutlinedInput-notchedOutline': {
                        border: 'none !important'
                    },
                    '.MuiSelect-icon': {
                        top: '14px !important'
                    },
                    '.MuiSelect-nativeInput': {
                        marginBottom: '13px',
                    }
                }}
            >
                {
                    UtilsHelper.CategoryFilter.map((_el: any, _idx: number) => {

                        return <MenuItem key={_idx} value={_el}>{_el}</MenuItem>;

                    })
                }
            </Select>
        </Stack>
    );
};

export default CategoryFilter;