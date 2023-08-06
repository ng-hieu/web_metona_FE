import * as React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import { Button } from '@mui/material';
import Typography from "@mui/material/Typography";
import { useTheme } from '@emotion/react';


const columns = [
    { id: 'id', label: 'ID', minWidth: 50 },
    { id: 'name', label: 'Tên sản phẩm', minWidth: 120 },
    {
        id: 'price',
        label: 'Giá sản phẩm',
        minWidth: 100,
        align: 'left',
        format: (value) => value.toLocaleString(),
    },
    {
        id: 'quantity',
        label: 'Số lượng',
        minWidth: 100,
        align: 'left',
        format: (value) => value.toLocaleString(),
    },
    {
        id: 'category',
        label: 'Ngành hàng',
        minWidth: 100,
        align: 'left',

    },
    {
        id: 'description',
        label: 'Mô tả',
        minWidth: 200,
        align: 'left',

    },
    {
        id: 'action',
        label: 'Hành động',
        minWidth: 100,
        align: 'left',

    }
];

function createData(id, name, price, quantity, category, description, action) {
    return { id, name, price, quantity, category, description, action };
}

const rows = [
    createData(1, 'India', 21213332, 1324171354, 'Điện thoại', 'Đẹp', 'Dùng Dialog'),
    createData(2, 'China', 345354253, 1403500365, 'Điện thoại', 'Đẹp', 'Dùng Dialog'),
    createData(3, 'Italy', 12125454354, 60483973, 'Điện thoại', 'Đẹp', 'Dùng Dialog'),
    createData(4, 'United States', 235243534345, 327167434, 'Điện thoại', 'Đẹp', 'Dùng Dialog'),
    createData(5, 'Canada', 23455233524, 37602103, 'Điện thoại', 'Đẹp', 'Dùng Dialog'),
    createData(6, 'Australia', 6745677457, 25475400, 'Điện thoại', 'Đẹp', 'Dùng Dialog'),
    createData(7, 'Germany', 432432454, 83019200, 'Máy tính', 'Đẹp', 'Dùng Dialog'),
    createData(8, 'Ireland', 4453534, 4857000, 'Máy tính', 'Đẹp', 'Dùng Dialog'),
    createData(9, 'Mexico', 354566, 126577691, 'Máy tính', 'Đẹp', 'Dùng Dialog'),
    createData(10, 'Japan', 7675567, 126317000, 'Máy tính', 'Đẹp', 'Dùng Dialog'),
    createData(11, 'France', 675765445, 67022000, 'Máy tính', 'Đẹp', 'Dùng Dialog'),
    createData(12, 'United Kingdom', 235234, 67545757, 'Sạc pin', 'Đẹp', 'Dùng Dialog'),
    createData(13, 'Russia', 5544, 146793744, 'Sạc pin', 'Đẹp', 'Dùng Dialog'),
    createData(14, 'Nigeria', 232334, 200962417, 'Sạc pin', 'Đẹp', 'Dùng Dialog'),
    createData(15, 'Brazil', 32543543, 210147125, 'Sạc pin', 'Đẹp', 'Dùng Dialog'),
    createData(16, 'India', 21213332, 1324171354, 'Điện thoại', 'Đẹp', 'Dùng Dialog'),
    createData(17, 'China', 345354253, 1403500365, 'Điện thoại', 'Đẹp', 'Dùng Dialog'),
    createData(18, 'Italy', 12125454354, 60483973, 'Điện thoại', 'Đẹp', 'Dùng Dialog'),
    createData(19, 'United States', 235243534345, 327167434, 'Điện thoại', 'Đẹp', 'Dùng Dialog'),
    createData(20, 'Canada', 23455233524, 37602103, 'Điện thoại', 'Đẹp', 'Dùng Dialog'),
    createData(21, 'Australia', 6745677457, 25475400, 'Điện thoại', 'Đẹp', 'Dùng Dialog'),
    createData(22, 'Germany', 432432454, 83019200, 'Máy tính', 'Đẹp', 'Dùng Dialog'),
    createData(23, 'Ireland', 4453534, 4857000, 'Máy tính', 'Đẹp', 'Dùng Dialog'),
    createData(24, 'Mexico', 354566, 126577691, 'Máy tính', 'Đẹp', 'Dùng Dialog'),
    createData(25, 'Japan', 7675567, 126317000, 'Máy tính', 'Đẹp', 'Dùng Dialog'),
    createData(26, 'France', 675765445, 67022000, 'Máy tính', 'Đẹp', 'Dùng Dialog'),
    createData(27, 'United Kingdom', 235234, 67545757, 'Sạc pin', 'Đẹp', 'Dùng Dialog'),
    createData(28, 'Russia', 5544, 146793744, 'Sạc pin', 'Đẹp', 'Dùng Dialog'),
    createData(29, 'Nigeria', 232334, 200962417, 'Sạc pin', 'Đẹp', 'Dùng Dialog'),
    createData(30, 'Brazil', 32543543, 210147125, 'Sạc pin', 'Đẹp', 'Dùng Dialog'),
];

export default function ProductsHome() {
    const theme = useTheme();
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };

    return (
        <>
            <Typography variant='h3' sx={{ width: '13vw', "marginLeft": "auto", "marginRight": "auto", color: theme.palette.primary.main }}>Bảng Sản Phẩm</Typography>
            <Button sx={{border:`1px solid ${theme.palette.primary.main}`}}>Thêm sản phẩm</Button>
            <Paper sx={{ width: '100%', overflow: 'hidden' }}>
                <TableContainer sx={{ maxHeight: 700 }}>
                    <Table stickyHeader aria-label="sticky table">
                        <TableHead>
                            <TableRow>
                                {columns.map((column) => (
                                    <TableCell
                                        key={column.id}
                                        align={column.align}
                                        style={{ minWidth: column.minWidth }}
                                    >
                                        {column.label}
                                    </TableCell>
                                ))}
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {rows
                                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                                .map((row) => {
                                    return (
                                        <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                                            {columns.map((column) => {
                                                const value = row[column.id];
                                                return (
                                                    <TableCell key={column.id} align={column.align}>
                                                        {column.format && typeof value === 'number'
                                                            ? column.format(value)
                                                            : value}
                                                    </TableCell>
                                                );
                                            })}
                                        </TableRow>
                                    );
                                })}
                        </TableBody>
                    </Table>
                </TableContainer>
                <TablePagination
                    rowsPerPageOptions={[10, 25, 100]}
                    component="div"
                    count={rows.length}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    onPageChange={handleChangePage}
                    onRowsPerPageChange={handleChangeRowsPerPage}
                />
            </Paper>
        </>
    );
}
