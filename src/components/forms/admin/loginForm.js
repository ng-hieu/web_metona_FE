import { Collapse, Grid, IconButton, InputAdornment, Stack } from "@mui/material";
import { Field, Form, Formik } from "formik";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import * as Yup from "yup";
import CloseIcon from '@mui/icons-material/Close';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/Visibility';
import { Alert, LoadingButton } from '@mui/lab';
import { TextField } from 'formik-mui';
import { useTheme } from '@mui/material/styles'


const SchemaError = Yup.object().shape({
    email: Yup.string().email()
        .required('Bạn hãy nhập email để đăng nhập'),
    password: Yup.string()
        .required('Bạn hãy nhập mật khẩu để đăng nhập'),
});

export default function LoginForm() {
    const theme = useTheme()
    const navigate = useNavigate();
    const [showPassword, setShowPassword] = useState(false);
    const dispatch = useDispatch()
    const [open, setOpen] = useState(false);
    const [statusCode, setStatusCode] = useState(0);

    return (
        <>
            <Formik
                initialValues={{}}
                validationSchema={SchemaError}
            // onSubmit={(values, { setSubmitting }) => {
            //     console.log("trying to submit:", values)
            //     // try {
            //     dispatch(login(values))
            //         .then(data => {
            //             console.log("thunk data:", data)
            //             if (data.type.includes("rejected")) {
            //                 setOpen(true);
            //                 if (data.error.message.includes("401")) {
            //                     setStatusCode(401)
            //                 } else if (data.error.message.includes("403")) {
            //                     setStatusCode(403)
            //                 }
            //                 setSubmitting(false);
            //             } else if (data.type.includes("fulfilled")) {
            //                 let role = data.payload.info.role;
            //                 console.log("role", role)
            //                 setSubmitting(false);
            //                 if (role === 1)
            //                     navigate("/dashboard/users")
            //                 else if (role === 2)
            //                     navigate("/dashboard/tests")
            //                 else {
            //                     if (code) {
            //                         navigate(`/students/quizSearch?code=${code}`)
            //                     } else {
            //                         navigate("/students")
            //                     }
            //                 }

            //             }

            //         })
            // }}
            >
                {({
                    values,
                    submitForm,
                    resetForm,
                    isSubmitting,
                    touched,
                    errors,
                    setFieldValue
                }) => (

                    <Form>
                        <Stack spacing={3} sx={{ my: 4 }}>
                            <Collapse in={open}>
                                <Alert
                                    action={
                                        <IconButton
                                            aria-label="close"
                                            color="inherit"
                                            size="small"
                                            onClick={() => {
                                                setOpen(false);
                                            }}
                                        >
                                            <CloseIcon fontSize="inherit" />
                                        </IconButton>
                                    }
                                    sx={{ mb: 2 }}
                                    variant="filled" severity="error"
                                >
                                    {statusCode >= 403 ? "Email hoặc mật khẩu sai, vui lòng thử lại!" : ""}
                                </Alert>
                            </Collapse>
                            <Field
                                component={TextField}
                                type="email"
                                label="Email"
                                name="email"
                                fullWidth
                            />

                            <Field
                                component={TextField}
                                type={showPassword ? 'text' : 'password'}
                                label="Mật khẩu"
                                name="password"
                                fullWidth
                                InputProps={{
                                    endAdornment: (
                                        <InputAdornment position="end">
                                            <IconButton
                                                onClick={() => setShowPassword(!showPassword)}
                                                edge="end">
                                                {showPassword ? (
                                                    <VisibilityIcon fontSize="small" />) : (
                                                    <VisibilityOffIcon fontSize="small" />)}
                                            </IconButton>
                                        </InputAdornment>
                                    ),
                                }}
                                onChange={(e) => {
                                    setFieldValue("password", e.target.value)
                                }}
                            />
                        </Stack>

                        <LoadingButton fullWidth size="large" type="button" variant="contained"
                            onClick={submitForm} sx={{
                                backgroundColor: "white", color: theme.palette.primary.main, border: `1px solid ${theme.palette.primary.main}`, boxShadow: "10px 10px 5px #777",'&:hover': {
                                    color: theme.palette.secondary.main,
                                },
                            }}>
                            Đăng nhập
                        </LoadingButton>
                    </Form>
                )}
            </Formik>
        </>
    )
}