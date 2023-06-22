import { useState, useContext } from 'react';
import { FilterContext } from '@/context/FilterContext';
import Image from 'next/image';

import { UtilsHelper } from '@utils/UtilsHelper';
import { SelectChangeEvent } from '@mui/material';
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

const TypeFilter = () => {

    const [filter, setFilter] = useState('Type: none');
    const { changeTypeFilter } = useContext(FilterContext);

    const handleChangeType = (event: SelectChangeEvent<any>) => {

        if (event.target.value === 'none') {
            setFilter('Type: none');
            changeTypeFilter('');
        } else {
            setFilter(`Type: ${event.target.value as string}`);
            changeTypeFilter(event.target.value as string);
        }

    };

    return (
        <Stack width={'150px'}>
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
                    UtilsHelper.TypeFilter.map((_el: any, _idx: number) => {

                        return <MenuItem key={_idx} value={_el}>{_el}</MenuItem>;

                    })
                }
            </Select>
        </Stack>
    );
};

export default TypeFilter;