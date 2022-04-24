import { React } from "react";
import { Formik, Form } from "formik";
import { object, string } from "yup";
import { Button, TextField, Box } from "@mui/material";

import { useDispatch } from "react-redux";
import { addToDo } from "../../features/toDoList";

export const ItemAddForm = () => {
  const dispatch = useDispatch();

  const initialValues = {
    todo: "",
  };

  const validationSchema = object({
    todo: string()
      .max(100, "Max 100 sybmols")
      .required("Please, fill the field"),
  });

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={({ todo }, { resetForm }) => {
        dispatch(addToDo(todo));
        resetForm({
          values: {
            todo: "",
          },
        });
      }}
    >
      {({ errors, touched, values, handleChange }) => (
        <Form>
          <Box
            sx={{
              display: "flex",
            }}
          >
            <TextField
              placeholder="What do you whant ot do?"
              color="primary"
              fullWidth
              label="Todo"
              name="todo"
              id="todo"
              value={values.todo}
              onChange={handleChange}
              variant="outlined"
              error={errors.todo && touched.todo}
              helperText={errors.todo}
            ></TextField>
            <Button
              type="submit"
              color="primary"
              variant="contained"
              sx={{
                width: 1 / 3,
              }}
            >
              Add item
            </Button>
          </Box>
        </Form>
      )}
    </Formik>
  );
};
