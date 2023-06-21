import { styled } from '@mui/material/styles';
import MuiSelect from '@mui/material/Select';
import { colorPalette } from '../colors';

export const Select = styled(MuiSelect)(() => ({
    height: 40,
    fontSize: 14,
    fontWeight: 500,
    color: '#000',
    backgroundColor: '#fff',
    '& .tick-icon': {
        display: 'none',
    },
    fieldset: {
        border: '1px solid rgba(0, 0, 0, 0.18)',
        borderRadius: 148,
    },
    '.MuiSelect-icon': {
        right: '16px !important'
    },
    '.MuiOutlinedInput-notchedOutline': {
        borderWidth: '1px !important',
        borderColor: `${colorPalette.black} !important`,
    },

    '.Mui-focused .MuiOutlinedInput-notchedOutline': {
        borderWidth: '1px !important',
        borderColor: `${colorPalette.black} !important`,
    },
    '.MuiSelect-nativeInput': {
        paddingLeft: '16px',
        marginBottom: '11px',
        opacity: 1,
        border: 'none',
        '::placeholder': {
            fontSize: '12px',
            paddingLeft: '20px',
            fontWeight: 400,
        }
    }
}));

export default Select;