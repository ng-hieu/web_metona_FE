import * as React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import Typography from "@mui/material/Typography";
import { useTheme } from '@emotion/react';
import ReportProblemIcon from "@mui/icons-material/ReportProblem";
import CheckIcon from "@mui/icons-material/Check";
import DeleteIcon from "@mui/icons-material/Delete";
import DriveFileRenameOutlineIcon from "@mui/icons-material/DriveFileRenameOutline";
import CloseIcon from "@mui/icons-material/Close";
import { Field, Form, Formik } from "formik";
import MoreVertIcon from '@mui/icons-material/MoreVert'; 
import {
    Box,
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
    FormControl,
    IconButton,
    MenuItem,
    Select,
    TextField,
} from "@mui/material";
import { customAPIv1 } from "../../features/APIv1/customAPI";

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

const rows = [
    { id: 1, name: 'India', price: 21213332, quantity: 1324171354, category: 'Điện thoại', description: 'Đẹp' },
    { id: 2, name: 'China', price: 345354253, quantity: 1403500365, category: 'Điện thoại', description: 'Đẹp' },
    { id: 3, name: 'Italy', price: 12125454354, quantity: 60483973, category: 'Điện thoại', description: 'Đẹp' },
    { id: 4, name: 'United States', price: 235243534345, quantity: 327167434, category: 'Điện thoại', description: 'Đẹp' },
    { id: 5, name: 'Canada', price: 23455233524, quantity: 37602103, category: 'Điện thoại', description: 'Đẹp' },
    { id: 6, name: 'Australia', price: 6745677457, quantity: 25475400, category: 'Điện thoại', description: 'Đẹp' },
    { id: 7, name: 'Germany', price: 432432454, quantity: 83019200, category: 'Máy tính', description: 'Đẹp' },
    { id: 8, name: 'Ireland', price: 4453534, quantity: 4857000, category: 'Máy tính', description: 'Đẹp' },
    { id: 9, name: 'Mexico', price: 354566, quantity: 126577691, category: 'Máy tính', description: 'Đẹp' },
    { id: 10, name: 'Japan', price: 7675567, quantity: 126317000, category: 'Máy tính', description: 'Đẹp' },
    { id: 11, name: 'France', price: 675765445, quantity: 67022000, category: 'Máy tính', description: 'Đẹp' },
    { id: 12, name: 'United Kingdom', price: 235234, quantity: 67545757, category: 'Sạc pin', description: 'Đẹp' },
    { id: 13, name: 'Russia', price: 5544, quantity: 146793744, category: 'Sạc pin', description: 'Đẹp' },
    { id: 14, name: 'Nigeria', price: 232334, quantity: 200962417, category: 'Sạc pin', description: 'Đẹp' },
    { id: 15, name: 'Brazil', price: 32543543, quantity: 210147125, category: 'Sạc pin', description: 'Đẹp' },
    { id: 16, name: 'India', price: 21213332, quantity: 1324171354, category: 'Điện thoại', description: 'Đẹp' },
    { id: 17, name: 'China', price: 345354253, quantity: 1403500365, category: 'Điện thoại', description: 'Đẹp' },
    { id: 18, name: 'Italy', price: 12125454354, quantity: 60483973, category: 'Điện thoại', description: 'Đẹp' },
    { id: 19, name: 'United States', price: 235243534345, quantity: 327167434, category: 'Điện thoại', description: 'Đẹp' }
]


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

    React.useState(10);
    const [openAddProduct, setOpenAddProduct] = React.useState(false);
    const [openEditProduct, setOpenEditProduct] = React.useState(false);
    const [openActionProduct, setOpenActionProduct] = React.useState(false);
    const [openDeleteProduct, setOpenDeleteProduct] = React.useState(false);
    const [selectedValue, setSelectedValue] = React.useState("");
    const [listProducts, setListProducts] = React.useState([]);
    const [category, setCategory] = React.useState([]);

    const handleChange = (event) => {
        setSelectedValue(event.target.value);
    };


    const handleClickOpenAddProduct = () => {
        setOpenAddProduct(true);
    };
    const handleClickOpenActionProduct = () => {
        setOpenActionProduct(true);
    };
    const handleClickOpenEditProduct = () => {
        setOpenEditProduct(true);
    };
    const handleClickOpenDeleteProduct = () => {
        setOpenDeleteProduct(true);
    };

    const handleCloseAddProduct = () => {
        setOpenAddProduct(false);
    };
    const handleCloseEditProduct = () => {
        setOpenEditProduct(false);
    };
    const handleCloseActionProduct = () => {
        setOpenActionProduct(false);
    };
    const handleCloseDeleteProduct = () => {
        setOpenDeleteProduct(false);
    };


    React.useEffect(() => {
        customAPIv1()
            .get(`products`)
            .then((res) => {
                setListProducts(res.data);
                console.log("products details:", res.data);
            })
            .catch((e) => {
                console.log("error in get products details:", e);
            });
    }, []);

    React.useEffect(() => {
        customAPIv1()
            .get(`categorys`)
            .then((res) => {
                console.log("categotys details:", res.data);
                setCategory(
                    res.data.data.map((item) => {
                        return {
                            name: item.name,
                            id: item.id,
                        };
                    })
                );
            })
            .catch((e) => {
                console.log("error in get category details:", e);
            });
    }, []);
    return (
        <>
            <Typography variant='h3' sx={{ width: '13vw', "marginLeft": "auto", "marginRight": "auto", color: theme.palette.primary.main }}>Bảng Sản Phẩm</Typography>
            <Button sx={{ border: `1px solid ${theme.palette.primary.main}` }} onClick={handleClickOpenAddProduct}>Thêm sản phẩm</Button>
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
                            {rows.map((obj) => {
                                const { id,
                                    name,
                                    price,
                                    quantity,
                                    category,
                                    description } = obj;
                                return (
                                    <TableRow>
                                        <TableCell>
                                            {id}
                                        </TableCell>
                                        <TableCell>
                                            {name}
                                        </TableCell>
                                        <TableCell>
                                            {price}
                                        </TableCell>
                                        <TableCell>
                                            {quantity}
                                        </TableCell>
                                        <TableCell>
                                            {category}
                                        </TableCell>
                                        <TableCell>
                                            {description}
                                        </TableCell>
                                        <TableCell>
                                            <IconButton
                                                size="large"
                                                color="inherit"
                                                // onClick={(e) => {
                                                //     setCurrentTag(
                                                //         id
                                                //     );
                                                //     handleOpenMenu(
                                                //         e
                                                //     );
                                                // }}
                                            >
                                                <MoreVertIcon fontSize="small" />
                                            </IconButton>
                                        </TableCell>
                                    </TableRow>
                                )
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
            <Dialog
                open={openAddProduct}
                onClose={handleCloseAddProduct}
                maxWidth={"md"}
            >
                <DialogTitle>Thêm một sản phẩm mới</DialogTitle>
                <DialogContent>
                    <TextField
                        autoFocus
                        margin="dense"
                        id="name"
                        label="Tên sản phẩm"
                        type="email"
                        fullWidth
                        variant="standard"
                    />

                    <TextField
                        autoFocus
                        margin="dense"
                        id="price"
                        label="Giá sản phẩm"
                        type="email"
                        fullWidth
                        variant="standard"
                    />

                    <TextField
                        autoFocus
                        margin="dense"
                        id="quantityProduct"
                        label="Số lượng"
                        type="email"
                        fullWidth
                        variant="standard"
                    />

                    <TextField
                        autoFocus
                        margin="dense"
                        id="description"
                        label="Chi tiết sản phẩm "
                        type="email"
                        fullWidth
                        variant="standard"
                    />
                    {/* <FormControl fullWidth>
                        <Field
                            component={Select}
                            id="type"
                            name="type"
                            labelId="age-simple"
                            label="Loại câu hỏi"
                        >
                            {category.map((item) => (
                                <MenuItem value={item.id}>{item.name}</MenuItem>
                            ))}
                        </Field>
                    </FormControl> */}
                    <Box
                        noValidate
                        component="form"
                        sx={{
                            display: "flex",
                            flexDirection: "column",
                            m: "auto",
                            width: "fit-content",
                        }}
                    ></Box>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleCloseAddProduct}>Close</Button>
                </DialogActions>
            </Dialog>

            <Dialog
                open={openActionProduct}
                onClose={handleCloseActionProduct}
                maxWidth={"md"}
            >
                <DialogTitle>Lựa chọn hành động</DialogTitle>
                <DialogContentText>
                    <CheckIcon></CheckIcon>Nhập dữ liệu để sửa sản phẩm.
                </DialogContentText>
                <DialogContentText>
                    <ReportProblemIcon></ReportProblemIcon>Xóa sản phẩm sẽ không
                    thể hoàn tác.
                </DialogContentText>
                <DialogActions>
                    <Button
                        variant="outlined"
                        startIcon={<DriveFileRenameOutlineIcon />}
                        sx={{
                            pr: 4,
                        }}
                    >
                        Sửa sản phẩm
                    </Button>
                    <Button variant="outlined" startIcon={<DeleteIcon />}>
                        Xóa
                    </Button>
                </DialogActions>
            </Dialog>

            <Dialog
                open={openDeleteProduct}
                onClose={handleCloseDeleteProduct}
                maxWidth={"md"}
            >
                <DialogTitle>Xóa sản phẩm</DialogTitle>
                <DialogContentText>
                    <ReportProblemIcon></ReportProblemIcon>Xóa sản phẩm sẽ không
                    thể hoàn tác.
                </DialogContentText>
                <DialogActions>
                    <Button
                        variant="outlined"
                        startIcon={<CheckIcon />}
                        sx={{
                            pr: 4,
                        }}
                    >
                        Xóa
                    </Button>
                    <Button variant="outlined" startIcon={<CloseIcon />}>
                        Không
                    </Button>
                </DialogActions>
            </Dialog>

            <Dialog
                open={openEditProduct}
                onClose={handleCloseEditProduct}
                maxWidth={"md"}
            >
                <DialogTitle>Nhập dữ liệu sản phẩm để sửa </DialogTitle>
                <DialogContent>
                    <TextField
                        autoFocus
                        margin="dense"
                        id="name"
                        label="Tên sản phẩm"
                        type="email"
                        fullWidth
                        variant="standard"
                    />

                    <TextField
                        autoFocus
                        margin="dense"
                        id="price"
                        label="Giá sản phẩm"
                        type="email"
                        fullWidth
                        variant="standard"
                    />

                    <TextField
                        autoFocus
                        margin="dense"
                        id="quantityProduct"
                        label="Số lượng"
                        type="email"
                        fullWidth
                        variant="standard"
                    />

                    <TextField
                        autoFocus
                        margin="dense"
                        id="description"
                        label="Chi tiết sản phẩm "
                        type="email"
                        fullWidth
                        variant="standard"
                    />
                    {/* <FormControl fullWidth>
                        <Field
                            component={Select}
                            id="type"
                            name="type"
                            labelId="age-simple"
                            label="Loại câu hỏi"
                        >
                            {category.map((item) => (
                                <MenuItem value={item.id}>{item.name}</MenuItem>
                            ))}
                        </Field>
                    </FormControl> */}

                    <Box
                        noValidate
                        component="form"
                        sx={{
                            display: "flex",
                            flexDirection: "column",
                            m: "auto",
                            width: "fit-content",
                        }}
                    ></Box>
                </DialogContent>
                <DialogActions>
                    <Button onClick={openEditProduct}>Close</Button>
                </DialogActions>
            </Dialog>
        </>
    );
}
