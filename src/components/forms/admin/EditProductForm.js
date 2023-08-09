import { Form, Formik } from "formik";
import { Box, TextField } from "@mui/material";
import { LoadingButton } from "@mui/lab";
import React, { useState } from "react";

import * as Yup from "yup";
import MuiAlert from "@mui/material/Alert";
import { customAPIv1 } from "../../../features/APIv1/customAPI";

export default function EditProductForm(props) {
    const [openSuccess, setOpenSuccess] = useState(false);
    const [open, setOpen] = useState(false);
    const [product, setProduct] = useState(false);
    const handleClose = (event, reason) => {
        if (reason === "clickaway") {
            return;
        }
        setOpenSuccess(false);
        setOpen(false);
    };
    const Alert = React.forwardRef(function Alert(props, ref) {
        return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
    });
    const SchemaError = Yup.object().shape({
        name: Yup.string()
            .min(2, "Tên Quá ngắn!")
            .required("Không được để trống!"),
        price: Yup.string()
            .min(2, "Vui lòng nhập đúng số!")
            .required("Không được để trống!"),
        quantityProduct: Yup.string()
            .min(2, "Vui lòng nhập đúng số!")
            .required("Không được để trống!"),
        description: Yup.string()
            .min(2, "Tên Quá ngắn!")
            .required("Không được để trống!"),
        category: Yup.string()
            .min(2, "Không được để trống!")
            .required("Không được để trống!"),
    });

    const getProduct = () => {
        customAPIv1()
            // .get(`/products/${id}`)
            .then((res) => {
                console.log("product:", res.data);
                setProduct(res.data.data);
            })
            .catch((e) => console.log("error in get tags:", e));
    };
    return (
        <Formik
            initialValues={{
                name: "",
                price: "",
                quantityProduct: "",
                description: "",
                category: "",
            }}
            validate={(values) => {
                const errors = {};
                return errors;
            }}
            validationSchema={SchemaError}
            onSubmit={(values, { setSubmitting, resetForm }) => {
                console.log("trying to submit:", values);
                customAPIv1()
                    .post("/products", values)
                    .then((response) => {
                        console.log("Add product success");
                        resetForm();
                        setSubmitting(false);
                        setOpenSuccess(true);
                        setOpen(false);
                    })
                    .catch((e) => {
                        console.log("error:", e);
                        setOpen(true);
                        setOpenSuccess(false);
                        setSubmitting(false);
                    });
            }}
        >
            {({
                values,
                submitForm,
                resetForm,
                isSubmitting,
                touched,
                errors,
                setFieldValue,
            }) => (
                <Form>
                    <TextField
                        autoFocus
                        margin="dense"
                        id="name"
                        label="Tên sản phẩm"
                        type="text"
                        fullWidth
                        variant="standard"
                    />

                    <TextField
                        autoFocus
                        margin="dense"
                        id="price"
                        label="Giá sản phẩm"
                        type="text"
                        fullWidth
                        variant="standard"
                    />

                    <TextField
                        autoFocus
                        margin="dense"
                        id="quantityProduct"
                        label="Số lượng"
                        type="number"
                        fullWidth
                        variant="standard"
                    />

                    <TextField
                        autoFocus
                        margin="dense"
                        id="description"
                        label="Chi tiết sản phẩm "
                        type="text"
                        fullWidth
                        variant="standard"
                    />
                    {/* <FormControl fullWidth>
                        <Field
                            component={Select}
                            id="category"
                            name="categoryId"
                            labelId="category"
                            label="Ngành hàng"
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
                    <LoadingButton
                        fullWidth
                        size="large"
                        type="submit"
                        variant="contained"
                        onClick={submitForm}
                    >
                        Lưu sản phẩm
                    </LoadingButton>
                </Form>
            )}
        </Formik>
    );
}
