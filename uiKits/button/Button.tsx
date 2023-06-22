import { styled } from '@mui/material/styles';
import { LoadingButton, LoadingButtonProps } from '@mui/lab';

export interface ButtonProps {
    backgroundColor?: string,
    LabelColor?: string,
    borderColor?: string,
    borderWidth?: string,
}

const Button: any = styled(LoadingButton, {
    shouldForwardProp: (prop) =>
        prop !== 'backgroundColor' && prop !== 'LabelColor' && prop !== 'borderColor' && prop !== 'borderWidth',
})<ButtonProps & LoadingButtonProps>(({ backgroundColor, LabelColor, borderColor, borderWidth }) => ({
    backgroundColor,
    color: LabelColor,
    borderColor,
    height: 40,
    borderRadius: 148,
    fontSize: 14,
    fontWeight: 600,
    textTransform: 'inherit',
    boxShadow: 'none',
    borderWidth,
    paddingRight: '24px',
    paddingLeft: '24px',
    '&:hover': {
        backgroundColor,
        borderColor,
        boxShadow: 'none',
        borderWidth
    },

}));

export default Button;