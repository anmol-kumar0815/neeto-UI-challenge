import * as yup from "yup";

export const NOTES_FORM_INITIAL_FORM_VALUES = {
  title: "",
  description: "",
  contact: null,
  tags: [],
};

export const ASSIGNED_CONTACT = [
  {
    label: "Admin",
    value: "Admin",
  },
  {
    label: "Non Admin",
    value: "Non_Admin",
  },
];

export const TAGS = [
  {
    label: "Geeting Started",
    value: "Getting_Started",
  },
  {
    label: "Meeting",
    value: "Meeting",
  },
  {
    label: "Learning",
    value: "Learning",
  },
  {
    label: "Onboarding",
    value: "Onboarding",
  },
  {
    label: "Leaves and Holidays",
    value: "Leaves_and_Holidays",
  },
];

export const NOTES_FORM_VALIDATION_SCHEMA = yup.object().shape({
  title: yup.string().required("Title is required"),
  description: yup.string().required("Description is required"),
  contact: yup
    .object()
    .nullable()
    .shape({
      label: yup.string().oneOf(ASSIGNED_CONTACT.map(contact => contact.label)),
      value: yup.string().oneOf(ASSIGNED_CONTACT.map(contact => contact.value)),
    })
    .required("Assigned contact is required."),
  tags: yup
    .array(
      yup
        .object()
        .nullable()
        .shape({
          label: yup.string().oneOf(TAGS.map(tag => tag.label)),
          value: yup.string().oneOf(TAGS.map(tag => tag.value)),
        })
    )
    .min(1, "Tag is required")
    .required("Tag is required"),
});

export const NOTES_TABLE_COLUMN_DATA = [
  {
    title: "Title",
    dataIndex: "title",
    key: "title",
    width: "30%",
  },
  {
    title: "Description",
    dataIndex: "description",
    key: "description",
    width: "70%",
  },
];
