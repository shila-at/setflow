import { FC, useState } from 'react';

import { colorPalette } from '@uiKits/colors';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

export const ToggleButton: FC<IToggleButton> = ({ leftName, rightName, width, height, onChange }) => {

    const [active, setActive] = useState<string>(leftName);

    const handleToggle = (name: string) => {
        setActive(name);
        onChange(name);
    }

    return (
        <Stack
            flexDirection={'row'}
            height={height ?? 40}
            width={width ?? 300}
            borderRadius={148}
            border={`2px solid ${colorPalette.black}`}
            bgcolor={colorPalette.white}
            overflow={'hidden'}
        >
            <Stack
                onClick={() => handleToggle(leftName)}
                flex={active === leftName ? 1 : 0.8}
                height={'100%'}
                alignItems={'center'}
                justifyContent={'center'}
                bgcolor={active === leftName ? colorPalette.black : colorPalette.white}
                borderRadius={active === leftName ? 148 : 'none'}
                sx={{ cursor: 'pointer', transition: '0.3s' }}
            >
                <Typography
                    fontSize={14}
                    fontWeight={600}
                    color={active === leftName ? colorPalette.white : colorPalette.black}
                >
                    {leftName}
                </Typography>

            </Stack>
            <Stack
                onClick={() => handleToggle(rightName)}
                flex={active === rightName ? 1 : 0.8}
                height={'100%'}
                alignItems={'center'}
                justifyContent={'center'}
                bgcolor={active === rightName ? colorPalette.black : colorPalette.white}
                borderRadius={active === rightName ? 148 : 'none'}
                sx={{ cursor: 'pointer', transition: '0.3s' }}
            >
                <Typography
                    fontSize={14}
                    fontWeight={600}
                    color={active === rightName ? colorPalette.white : colorPalette.black}
                >
                    {rightName}
                </Typography>
            </Stack>
        </Stack>
    );
};
export interface IToggleButton {
    width?: string;
    height?: string;
    leftName: string;
    rightName: string;
    onChange: (file: any) => void;
}
export default ToggleButton;