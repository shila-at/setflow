"use client";
import { useState } from 'react';

import { Container, Divider, Stack } from '@mui/material';
import { colorPalette } from '@components/colors';
import Button from '@components/button/Button';
import ToggleButton from '@components/toggleButton/ToggleButton';
import Filters from './Filters';
import Table from './Table';

const Items = () => {

    return (
      
            <Stack
                minHeight={'100vh'}
                bgcolor={colorPalette.white}
            >
                <Container maxWidth='lg'>
                    <Stack
                        flexDirection={'row'}
                        justifyContent={'space-between'}
                        p={'25px 0'}
                    >
                        <ToggleButton leftName='Sets' rightName='Lights' onChange={(val: string) => console.log(val)} />
                        <Button
                            type='button'
                            variant='contained'
                            backgroundColor={colorPalette.yellow}
                            LabelColor={colorPalette.black}
                        >
                            Create set
                        </Button>

                    </Stack>
                    <Divider sx={{ borderColor: colorPalette.black }} />
                    <Filters />
                    <Divider sx={{ borderColor: colorPalette.black }} />
                    <Stack>
                        <Table />
                    </Stack>
                </Container>
            </Stack>
    )
}

export default Items;

