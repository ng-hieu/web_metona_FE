import { Helmet } from "react-helmet-async";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useState } from "react";
import * as Yup from "yup";
import { TextField } from 'formik-mui';
import CloseIcon from '@mui/icons-material/Close';
import { Field, Form, Formik } from "formik";
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { Alert, LoadingButton } from '@mui/lab';
import { styled, useTheme } from "@mui/material/styles";
import {

    Stack,
    IconButton,
    InputAdornment,
    Grid,
    Collapse,
    Typography,
    CardMedia
} from '@mui/material';
import { bgcolor } from "@mui/system";

const SchemaError = Yup.object().shape({
    email: Yup.string().email()
        .required('Bạn hãy nhập email để đăng nhập'),
    password: Yup.string()
        .required('Bạn hãy nhập mật khẩu để đăng nhập'),
});
export const StyledContent = styled("div")(({ theme }) => ({
    maxWidth: 700,
    margin: "auto",
    // minHeight: "100vh",
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    padding: theme.spacing(12, 0),
}));


export default function LoginPage() {
    const navigate = useNavigate();
    const [showPassword, setShowPassword] = useState(false);
    const dispatch = useDispatch()
    const [open, setOpen] = useState(false);
    const [statusCode, setStatusCode] = useState(0);
    const theme = useTheme()
    return (
        <>
            <Helmet>
                <title> Đăng nhập | Metona </title>
            </Helmet>

            <StyledContent>
                <Typography variant="h4" sx={{
                    alignItems: "center",
                    justifyContent: "center",
                    display: "flex"
                }}>
                    Đăng nhập vào Metona
                </Typography>
                <CardMedia
                    component="img"
                    src="./assets/image/tach_nen.png"
                    alt="Hình ảnh"
                    sx={{
                        width: 120,
                        height: 120,
                        ml: "auto",
                        mr: "auto",
                        mt: "20px",
                    }}
                />
                <Formik
                    initialValues={{}}
                    validationSchema={SchemaError}
                    onSubmit={(values, { setSubmitting }) => {
                        console.log("trying to submit:", values)
                        // try {
                        // dispatch(login(values))
                        //     .then(data => {
                        //         console.log("thunk data:", data)
                        //         if (data.type.includes("rejected")) {
                        //             setOpen(true);
                        //             if (data.error.message.includes("401")) {
                        //                 setStatusCode(401)
                        //             } else if (data.error.message.includes("403")) {
                        //                 setStatusCode(403)
                        //             }
                        //             setSubmitting(false);
                        //         } else if (data.type.includes("fulfilled")) {
                        //             setSubmitting(false);
                        //             navigate("/home")
                        //         }
                        //     })
                    }}
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
                            <Stack spacing={3}>
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
                                        {statusCode >= 403 ? "Tài khoản bị khóa, vui lòng liên hệ với quản trị viên"
                                            : "Email hoặc mật khẩu sai, vui lòng thử lại!"}
                                    </Alert>
                                </Collapse>
                                <Field
                                    component={TextField}
                                    type="email"
                                    label="Email"
                                    name="email"
                                    variant="standard"
                                    fullWidth
                                />

                                <Field
                                    component={TextField}
                                    type={showPassword ? 'text' : 'password'}
                                    label="Mật khẩu"
                                    name="password"
                                    variant="standard"
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

                            <Stack direction="row" alignItems="center" justifyContent="space-between" sx={{ my: 2 }}>
                                <Grid></Grid>
                                <Link to="/forgot-password" variant="body1">
                                    <Typography variant="body2" sx={{ color: 'rgba(0, 0, 0, 0.5)' }} >
                                        Quên mật khẩu?
                                    </Typography>
                                </Link>
                            </Stack>

                            <LoadingButton fullWidth size="large" type="button" variant="contained" sx={{
                                bgcolor:  "#9a6348!important",
                                '&:hover': {
                                    bgcolor: "#4c362b !important",
                                },
                            }}
                                onClick={submitForm}>
                                Đăng nhập
                            </LoadingButton>
                        </Form>
                    )}
                </Formik>
                <Typography variant="body3" sx={{ml:"auto",mr:"auto",mt:10}}>
                    <span
                        onClick={() => {
                            console.log("clicked");
                        }}
                        style={{
                            fontWeight: "bold",
                            cursor: 'pointer',
                            color: theme.palette.primary.main,
                            textDecoration: 'underline'
                        }}
                    >
                        Xem chính sách ưu đãi Metona
                    </span>
                </Typography>

            </StyledContent >
        </>
    )
}