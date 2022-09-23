import React, { useState } from "react";

import { Formik, Form } from "formik";
import { Button, Pane, Toastr } from "neetoui";
import { Input, Select } from "neetoui/formik";

import {
  CONTACTS_FROM_INITIAL_VALUES,
  CONTACTS_FORM_VALIDATION_SCHEMA,
  ROLES,
} from "./constants";

const FormPane = ({ onClose }) => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = () => {
    setSubmitted(true);
    Toastr.success("Contact is created successfully.");
    onClose();
  };

  return (
    <Formik
      initialValues={CONTACTS_FROM_INITIAL_VALUES}
      validateOnBlur={submitted}
      validateOnChange={submitted}
      validationSchema={CONTACTS_FORM_VALIDATION_SCHEMA}
      onSubmit={handleSubmit}
    >
      {({ isSubmitting }) => (
        <Form className="w-full">
          <Pane.Body className="space-y-6">
            <div className="flex w-full flex-row space-x-3">
              <Input
                required
                className="w-full flex-grow-0"
                label="First Name"
                name="firstName"
                placeholder="Enter first name"
              />
              <Input
                required
                className="w-full flex-grow-0"
                label="Last Name"
                name="lastName"
                placeholder="Enter last name"
              />
            </div>
            <Input
              required
              className="w-full flex-grow-0"
              label="Email"
              name="email"
              placeholder="Enter you email"
            />
            <Select
              isSearchable
              required
              className="w-full flex-grow-0"
              label="Role"
              name="role"
              options={ROLES}
              placeholder="Select Role"
            />
          </Pane.Body>
          <Pane.Footer>
            <Button
              className="mr-3"
              disabled={isSubmitting}
              label="Save Changes"
              loading={isSubmitting}
              size="large"
              style="primary"
              type="submit"
              onClick={() => setSubmitted(true)}
            />
            <Button
              label="Cancel"
              size="large"
              style="text"
              type="reset"
              onClick={onClose}
            />
          </Pane.Footer>
        </Form>
      )}
    </Formik>
  );
};

export default FormPane;
