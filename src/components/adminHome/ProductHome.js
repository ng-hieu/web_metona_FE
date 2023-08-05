import * as React from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import ReportProblemIcon from "@mui/icons-material/ReportProblem";
import CheckIcon from "@mui/icons-material/Check";
import DeleteIcon from "@mui/icons-material/Delete";
import DriveFileRenameOutlineIcon from "@mui/icons-material/DriveFileRenameOutline";
import CloseIcon from "@mui/icons-material/Close";
import { Field, Form, Formik } from "formik";
import {
    Box,
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
    FormControl,
    MenuItem,
    Select,
    TextField,
} from "@mui/material";
import Typography from "@mui/material/Typography";
import { customAPIv1 } from "../../features/APIv1/customAPI";

const columns = [
    { id: "id", label: "ID", minWidth: 50 },
    { id: "name", label: "Tên sản phẩm", minWidth: 120 },
    {
        id: "price",
        label: "Giá sản phẩm",
        minWidth: 100,
        align: "left",
        format: (value) => value.toLocaleString(),
    },
    {
        id: "quantity",
        label: "Số lượng",
        minWidth: 100,
        align: "left",
        format: (value) => value.toLocaleString(),
    },
    {
        id: "category",
        label: "Ngành hàng",
        minWidth: 100,
        align: "left",
    },
    {
        id: "description",
        label: "Mô tả",
        minWidth: 200,
        align: "left",
    },
    {
        id: "action",
        label: "Hành động",
        minWidth: 100,
        align: "left",
    },
];

function createData(id, name, price, quantity, category, description, action) {
    return { id, name, price, quantity, category, description, action };
}

const rows = [
    createData(
        1,
        "India",
        21213332,
        1324171354,
        "Điện thoại",
        "Đẹp",
        "Dùng Dialog"
    ),
    createData(
        2,
        "China",
        345354253,
        1403500365,
        "Điện thoại",
        "Đẹp",
        "Dùng Dialog"
    ),
    createData(
        3,
        "Italy",
        12125454354,
        60483973,
        "Điện thoại",
        "Đẹp",
        "Dùng Dialog"
    ),
    createData(
        4,
        "United States",
        235243534345,
        327167434,
        "Điện thoại",
        "Đẹp",
        "Dùng Dialog"
    ),
    createData(
        5,
        "Canada",
        23455233524,
        37602103,
        "Điện thoại",
        "Đẹp",
        "Dùng Dialog"
    ),
    createData(
        6,
        "Australia",
        6745677457,
        25475400,
        "Điện thoại",
        "Đẹp",
        "Dùng Dialog"
    ),
    createData(
        7,
        "Germany",
        432432454,
        83019200,
        "Máy tính",
        "Đẹp",
        "Dùng Dialog"
    ),
    createData(
        8,
        "Ireland",
        4453534,
        4857000,
        "Máy tính",
        "Đẹp",
        "Dùng Dialog"
    ),
    createData(
        9,
        "Mexico",
        354566,
        126577691,
        "Máy tính",
        "Đẹp",
        "Dùng Dialog"
    ),
    createData(
        10,
        "Japan",
        7675567,
        126317000,
        "Máy tính",
        "Đẹp",
        "Dùng Dialog"
    ),
    createData(
        11,
        "France",
        675765445,
        67022000,
        "Máy tính",
        "Đẹp",
        "Dùng Dialog"
    ),
    createData(
        12,
        "United Kingdom",
        235234,
        67545757,
        "Sạc pin",
        "Đẹp",
        "Dùng Dialog"
    ),
    createData(13, "Russia", 5544, 146793744, "Sạc pin", "Đẹp", "Dùng Dialog"),
    createData(
        14,
        "Nigeria",
        232334,
        200962417,
        "Sạc pin",
        "Đẹp",
        "Dùng Dialog"
    ),
    createData(
        15,
        "Brazil",
        32543543,
        210147125,
        "Sạc pin",
        "Đẹp",
        "Dùng Dialog"
    ),
    createData(
        16,
        "India",
        21213332,
        1324171354,
        "Điện thoại",
        "Đẹp",
        "Dùng Dialog"
    ),
    createData(
        17,
        "China",
        345354253,
        1403500365,
        "Điện thoại",
        "Đẹp",
        "Dùng Dialog"
    ),
    createData(
        18,
        "Italy",
        12125454354,
        60483973,
        "Điện thoại",
        "Đẹp",
        "Dùng Dialog"
    ),
    createData(
        19,
        "United States",
        235243534345,
        327167434,
        "Điện thoại",
        "Đẹp",
        "Dùng Dialog"
    ),
    createData(
        20,
        "Canada",
        23455233524,
        37602103,
        "Điện thoại",
        "Đẹp",
        "Dùng Dialog"
    ),
    createData(
        21,
        "Australia",
        6745677457,
        25475400,
        "Điện thoại",
        "Đẹp",
        "Dùng Dialog"
    ),
    createData(
        22,
        "Germany",
        432432454,
        83019200,
        "Máy tính",
        "Đẹp",
        "Dùng Dialog"
    ),
    createData(
        23,
        "Ireland",
        4453534,
        4857000,
        "Máy tính",
        "Đẹp",
        "Dùng Dialog"
    ),
    createData(
        24,
        "Mexico",
        354566,
        126577691,
        "Máy tính",
        "Đẹp",
        "Dùng Dialog"
    ),
    createData(
        25,
        "Japan",
        7675567,
        126317000,
        "Máy tính",
        "Đẹp",
        "Dùng Dialog"
    ),
    createData(
        26,
        "France",
        675765445,
        67022000,
        "Máy tính",
        "Đẹp",
        "Dùng Dialog"
    ),
    createData(
        27,
        "United Kingdom",
        235234,
        67545757,
        "Sạc pin",
        "Đẹp",
        "Dùng Dialog"
    ),
    createData(28, "Russia", 5544, 146793744, "Sạc pin", "Đẹp", "Dùng Dialog"),
    createData(
        29,
        "Nigeria",
        232334,
        200962417,
        "Sạc pin",
        "Đẹp",
        "Dùng Dialog"
    ),
    createData(
        30,
        "Brazil",
        32543543,
        210147125,
        "Sạc pin",
        "Đẹp",
        "Dùng Dialog"
    ),
];

export default function ProductHome() {
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);
    const [openAddProduct, setOpenAddProduct] = React.useState(false);
    const [openEditProduct, setOpenEditProduct] = React.useState(false);
    const [openActionProduct, setOpenActionProduct] = React.useState(false);
    const [openDeleteProduct, setOpenDeleteProduct] = React.useState(false);
    const [selectedValue, setSelectedValue] = React.useState("");
    const [listProducts, setListProducts] = React.useState([]);
    const [category, setCategory] = React.useState([]);
    const handleChangePage = (event, newPage) => {
        setPage(newPage);
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

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };

    const handleChange = (event) => {
        setSelectedValue(event.target.value);
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
            <Typography variant="h3" sx={{ width: "13vw" }}>
                Bảng Sản Phẩm
            </Typography>
            <Button onClick={handleClickOpenEditProduct}>Thêm sản phẩm</Button>
            <Paper sx={{ width: "100%", overflow: "hidden" }}>
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
                                .slice(
                                    page * rowsPerPage,
                                    page * rowsPerPage + rowsPerPage
                                )
                                .map((row) => {
                                    return (
                                        <TableRow
                                            hover
                                            role="checkbox"
                                            tabIndex={-1}
                                            key={row.code}
                                        >
                                            {columns.map((column) => {
                                                const value = row[column.id];
                                                return (
                                                    <TableCell
                                                        key={column.id}
                                                        align={column.align}
                                                    >
                                                        {column.format &&
                                                        typeof value ===
                                                            "number"
                                                            ? column.format(
                                                                  value
                                                              )
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
                    <Button onClick={openAddProduct}>Close</Button>
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
