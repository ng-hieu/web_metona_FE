import { Field, Form, Formik } from "formik";
import {
    Box, Card, FormControl, Typography
} from "@mui/material";
import { TextField, Select } from 'formik-mui';
import { LoadingButton } from "@mui/lab";
import React, { useEffect, useState } from "react";
import MenuItem from "@mui/material/MenuItem";
import * as Yup from "yup";
import { customAPIv1 } from "../../../features/APIv1/customAPI";




export default function AddProductForm() {
    const [openSuccess, setOpenSuccess] = useState(false);
    const [open, setOpen] = useState(false);
    const SchemaError = Yup.object().shape({
        nameProduct: Yup.string().min(2, "Tên Quá ngắn!").required("Nhập tên sản phẩm"),
        priceProduct: Yup.string()
            .min(2, "Vui lòng nhập đúng số!")
            .required("Nhập giá sản phẩm"),
        quantityProduct: Yup.string()
            .min(2, "Vui lòng nhập đúng số!")
            .required("Nhập số lượng sản phẩm"),
        descriptionProduct: Yup.string().min(2, "Tên Quá ngắn!").required("Nhập mô tả sản phẩm"),
        // category: Yup.string().min(2, "Không được để trống!").required("Thêm loại sản phẩm"),
    });

    const [category, setCategory] = useState([]);
    useEffect(() => {
        customAPIv1()
            .get("category")
            .then((response) => {
                console.log(response.data)
                setCategory(response.data);
            })
            .catch((e) => {
                console.log(e);
            });
    }, []);

    return (
        <Formik
            initialValues={{
                nameProduct: "",
                priceProduct: "",
                quantityProduct: "",
                descriptionProduct: "",
                category: '',
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
                        console.log("Add product success", response);
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
                    <Card sx={{ p: 5 }}>
                        <Field
                            component={TextField}
                            type="nameProduct"
                            label="Tên sản phẩm"
                            name="nameProduct"
                            variant="standard"
                            fullWidth
                        />

                        <Field
                            component={TextField}
                            type="priceProduct"
                            label="Giá sản phẩm"
                            name="priceProduct"
                            variant="standard"
                            fullWidth
                        />

                        <Field
                            component={TextField}
                            type="quantityProduct"
                            label="Số lượng sản phẩm"
                            name="quantityProduct"
                            variant="standard"
                            fullWidth
                        />

                        <Field
                            component={TextField}
                            type="descriptionProduct"
                            label="Mô tả"
                            name="descriptionProduct"
                            variant="standard"
                            fullWidth
                        />
                        <Box sx={{ width: '100%' }}>
                            <FormControl fullWidth sx={{ mt: 2 }}>
                                <Field
                                    component={Select}
                                    id="category"
                                    name="category"
                                    label="Loại sản phẩm"
                                    variant="outlined"
                                >
                                    {category && category.map(item => (

                                        <MenuItem key={item.idCategory} value={item.idCategory}>
                                            {item.nameCategory}
                                        </MenuItem>
                                    ))}
                                </Field>
                            </FormControl>
                        </Box>
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
                        <Typography>

                        </Typography>
                        <LoadingButton fullWidth size="large" type="button" variant="contained" sx={{
                            bgcolor: "#9a6348!important",
                            '&:hover': {
                                bgcolor: "#4c362b !important",
                            },
                        }}
                            onClick={submitForm}>
                            Thêm sản phẩm
                        </LoadingButton>

                    </Card>
                </Form>
            )}
        </Formik>
    );
}
