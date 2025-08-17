import React from "react";
import {
  Button,
  Label,
  FormGroup,
  Container,
  Row,
  Col,
  Card,
  CardBody,
  Input,
} from "reactstrap";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useRouter } from "next/router";
import Link from "next/link";
import Image from "next/image";
import AuthLogo from "../../src/layouts/logo/AuthLogo";
import LeftBg from "../../src/assets/images/bg/login-bgleft.svg";
import RightBg from "../../src/assets/images/bg/login-bg-right.svg";

const LoginFormik = () => {
  const navigate = useRouter();

  const initialValues = {
    email: "",
    password: "",
  };

  const validationSchema = Yup.object().shape({
    email: Yup.string().email("El correo electrónico no es válido").required("El correo electrónico es obligatorio"),
    password: Yup.string()
      .min(6, "La contraseña debe tener al menos 6 caracteres")
      .required("La contraseña es obligatoria"),
  });

  return (
    <div className="loginBox">
      <div className="position-absolute start-0 bottom-0">
        <Image src={LeftBg} alt="left" />
      </div>
      <div className="position-absolute end-0 top">
        <Image src={RightBg} alt="right" />
      </div>
      <Container fluid className="h-100">
        <Row className="justify-content-center align-items-center h-100">
          <Col lg="12" className="loginContainer">
            <AuthLogo />
            <Card>
              <CardBody className="p-4 m-1">
                <h4 className="mb-0 fw-bold">Iniciar sesión</h4>
                <Formik
                  initialValues={initialValues}
                  validationSchema={validationSchema}
                  onSubmit={(fields, { setFieldError }) => {
                    if (
                      fields.email === "admin@simplifai.cl" &&
                      fields.password === "admin1"
                    ) {
                      navigate.push("/dashboards/classic");
                    } else {
                      setFieldError(
                        "password",
                        "Usuario o contraseña incorrectos"
                      );
                    }
                  }}
                  render={({ errors, touched }) => (
                    <Form>
                      <FormGroup>
                        <Label htmlFor="email">Email</Label>
                        <Field
                          name="email"
                          type="text"
                          className={`form-control${errors.email && touched.email ? " is-invalid" : ""
                            }`}
                        />
                        <ErrorMessage
                          name="email"
                          component="div"
                          className="invalid-feedback"
                        />
                      </FormGroup>
                      <FormGroup>
                        <Label htmlFor="password">Password</Label>
                        <Field
                          name="password"
                          type="password"
                          className={`form-control${errors.password && touched.password
                              ? " is-invalid"
                              : ""
                            }`}
                        />
                        <ErrorMessage
                          name="password"
                          component="div"
                          className="invalid-feedback"
                        />
                      </FormGroup>
                      <FormGroup className="form-check d-flex" inline>
                        <Label check>
                          <Input type="checkbox" />
                          Remember me
                        </Label>
                        <Link href="/auth/recoverpwd" className="ms-auto text-decoration-none">
                          <small>¿Olvidó su contraseña?</small>
                        </Link>
                      </FormGroup>
                      <FormGroup>
                        <Button type="submit" color="primary" className="me-2">
                          Iniciar sesión
                        </Button>
                      </FormGroup>
                    </Form>
                  )}
                />
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

LoginFormik.layout = "Blank";

export default LoginFormik;
