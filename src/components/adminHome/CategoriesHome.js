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
    { id: 'name', label: 'Tên ngành hàng', minWidth: 100 }
];

function createData(id, name) {
    return { id, name };
}

const rows = [
    createData(1, 'India'),
    createData(2, 'China'),
    createData(3, 'Italy'),
    createData(4, 'United States'),
    createData(5, 'Canada'),
    createData(6, 'Australia'),
    createData(7, 'Germany'),
    createData(8, 'Ireland'),
    createData(9, 'Mexico'),
    createData(10, 'Japan'),
    createData(11, 'France'),
    createData(12, 'United Kingdom'),
    createData(13, 'Russia'),
    createData(14, 'Nigeria'),
    createData(15, 'Brazil'),
    createData(16, 'India'),
    createData(17, 'China'),
    createData(18, 'Italy'),
    createData(19, 'United States'),
    createData(20, 'Canada'),
    createData(21, 'Australia'),
    createData(22, 'Germany'),
    createData(23, 'Ireland'),
    createData(24, 'Mexico'),
    createData(25, 'Japan'),
    createData(26, 'France'),
    createData(27, 'United Kingdom'),
    createData(28, 'Russia'),
    createData(29, 'Nigeria'),
    createData(30, 'Brazil'),
];

export default function CategoriesHome() {
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
            <Typography variant='h3' sx={{ width: '15vw', "marginLeft": "auto", "marginRight": "auto", color: theme.palette.primary.main }}>Bảng Ngành Hàng</Typography>
            <Button sx={{ border: `1px solid ${theme.palette.primary.main}` }}>Thêm ngành hàng</Button>
            <Paper sx={{ width: '25vw', overflow: 'hidden', marginLeft: "auto", marginRight: "auto" }}>
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
