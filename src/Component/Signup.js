

import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { TextField, Button, Grid, Paper, Typography } from '@mui/material';

// Validation schema using Yup
const validationSchema = Yup.object().shape({
  idNo: Yup.string().required('ID Number is required'),
  name: Yup.string().required('Name is required'),
  category: Yup.string().required('Category is required'),
  mobileNumber: Yup.string()
    .required('Mobile Number is required')
    .matches(/^\d{10}$/, 'Must be a valid mobile number'),
  whatsappNo: Yup.string()
    .required('WhatsApp Number is required')
    .matches(/^\d{10}$/, 'Must be a valid WhatsApp number'),
  invitationCallRemark: Yup.string(),
});

const MyForm = () => {
  const handleSubmit = (values) => {
    console.log(values);
  };

  return (
    <Paper
      elevation={3}
      sx={{
        padding: 2,
        maxWidth: 550,
        mt: 7,
        mx: 'auto', 
        borderRadius: 2,
        
      }}
    >
      <Typography variant="h5" align="center" gutterBottom>
        Registration Form
      </Typography>
      <Formik
        initialValues={{
          idNo: '',
          name: '',
          category: '',
          mobileNumber: '',
          whatsappNo: '',
          invitationCallRemark: '',
        }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ handleChange, handleBlur, touched, errors }) => (
          <Form>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <Field
                  as={TextField}
                  fullWidth
                  label="ID Number"
                  name="idNo"
                  variant="outlined"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  helperText={touched.idNo && errors.idNo}
                  error={touched.idNo && Boolean(errors.idNo)}
                  margin="normal"
                />
              </Grid>
              <Grid item xs={12}>
                <Field
                  as={TextField}
                  fullWidth
                  label="Name"
                  name="name"
                  variant="outlined"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  helperText={touched.name && errors.name}
                  error={touched.name && Boolean(errors.name)}
                  margin="normal"
                />
              </Grid>
              <Grid item xs={12}>
                <Field
                  as={TextField}
                  fullWidth
                  label="Category"
                  name="category"
                  variant="outlined"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  helperText={touched.category && errors.category}
                  error={touched.category && Boolean(errors.category)}
                  margin="normal"
                />
              </Grid>
              <Grid item xs={12}>
                <Field
                  as={TextField}
                  fullWidth
                  label="Mobile Number"
                  name="mobileNumber"
                  variant="outlined"
                  type="tel"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  helperText={touched.mobileNumber && errors.mobileNumber}
                  error={touched.mobileNumber && Boolean(errors.mobileNumber)}
                  margin="normal"
                />
              </Grid>
              <Grid item xs={12}>
                <Field
                  as={TextField}
                  fullWidth
                  label="WhatsApp Number"
                  name="whatsappNo"
                  variant="outlined"
                  type="tel"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  helperText={touched.whatsappNo && errors.whatsappNo}
                  error={touched.whatsappNo && Boolean(errors.whatsappNo)}
                  margin="normal"
                />
              </Grid>
              <Grid item xs={12}>
                <Field
                  as={TextField}
                  fullWidth
                  label="Invitation Call Remark"
                  name="invitationCallRemark"
                  variant="outlined"
                  multiline
                  rows={4}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  margin="normal"
                />
              </Grid>
              <Grid item xs={12}>
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  fullWidth
                  sx={{ mt: 2 }}
                >
                  Submit
                </Button>
              </Grid>
            </Grid>
          </Form>
        )}
      </Formik>
    </Paper>
  );
};

export default MyForm;
