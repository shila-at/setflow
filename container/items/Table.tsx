
import { FC, useEffect, useState, useContext } from 'react';
import { FilterContext } from '@context/FilterContext';
import Image from 'next/image';

import {
    createColumnHelper,
    flexRender,
    getCoreRowModel,
    useReactTable,
} from '@tanstack/react-table';
import {
    TableRow,
    TableBody,
    TableCell,
    TableHead,
    Stack,
    Typography
} from '@mui/material';
import { colorPalette } from '@uiKits/colors';
import { GetItems } from '@api/dataApi';
import { UtilsHelper } from '@utils/UtilsHelper';
import MuiTable from '@mui/material/Table';
import arrowRightIcon from '@icons/arrowRight.svg';
import TableContainer from '@mui/material/TableContainer';

interface Item {
    Set: string,
    Type: string,
    SetLocation: string,
    Category: string,
    NextAvailability: string,
}

const columnHelper = createColumnHelper<Item>()

const columns = [
    columnHelper.accessor('Set', {
        cell: info => info.getValue(),
    }),
    columnHelper.accessor('Type', {
        cell: info => <Typography
            fontSize={11}
            fontWeight={400}
            component={'span'}
            p={'3px 5px'}
            color={info.getValue() === UtilsHelper.TypeFilter[0] ? colorPalette.blue : colorPalette.green}
            bgcolor={info.getValue() === UtilsHelper.TypeFilter[0] ? colorPalette.blue10 : colorPalette.green10}
        >
            {info.getValue()}
        </Typography>,
    }),
    columnHelper.accessor('SetLocation', {
        header: () => <span>Set location</span>,
        cell: info => info.getValue(),
    }),
    columnHelper.accessor('Category', {
        cell: info => info.getValue(),
    }),
    columnHelper.accessor('NextAvailability', {
        header: () => <span>Next availability</span>,
        cell: info => <Stack flex={1} flexDirection={'row'} justifyContent={'space-between'}>
            {info.getValue()}

            <Image
                src={arrowRightIcon}
                priority={true}
                alt={'arrow'}
                width={36}
                height={36}
                style={{
                    cursor: 'pointer',
                }}
            /></Stack>
    }),

]
const Table: FC<any> = () => {

    const [data, setData] = useState<any>(() => []);
    const [filters, setFilters] = useState({ type: '', sort: '', category: '' });
    const { type, sort, category } = useContext(FilterContext);
    const { status, data: apiData, error, isFetching } = GetItems(filters);

    const table = useReactTable({
        data,
        columns,
        getCoreRowModel: getCoreRowModel(),
    });

    useEffect(() => {

        setFilters({ type: type, sort: sort, category: category })
        setData(apiData);

    }, [type, sort, category, apiData]);

    return (
        <TableContainer sx={{ minWidth: 800 }}>

            <MuiTable>

                <TableHead
                    sx={{
                        '& th': {
                            padding: '20px 0',
                            borderBottom: `2px solid ${colorPalette.gray20}`
                        }
                    }}
                >
                    {table.getHeaderGroups().map(headerGroup => (
                        <TableRow key={headerGroup.id}>
                            {headerGroup.headers.map(header => (
                                <TableCell
                                    key={header.id}
                                    align='left'
                                >
                                    {header.isPlaceholder
                                        ? null
                                        : flexRender(
                                            header.column.columnDef.header,
                                            header.getContext()
                                        )}
                                </TableCell>
                            ))}
                        </TableRow>
                    ))}

                </TableHead>

                <TableBody>
                    {table.getRowModel().rows.map(row => (
                        <TableRow
                            key={row.id} hover={true}
                            sx={{
                                '& td': {
                                    padding: '30px 0',
                                    borderBottom: `2px solid ${colorPalette.gray20}`
                                }
                            }}
                        >
                            {row.getVisibleCells().map(cell => (
                                <TableCell align='left' key={cell.id}>
                                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                                </TableCell>
                            ))}
                        </TableRow>
                    ))}

                </TableBody>

            </MuiTable>

        </TableContainer>
    );
};

export default Table;