/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import {
  Button,
  Flex,
  Grid,
  SelectField,
  TextField,
} from "@aws-amplify/ui-react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Estudiante } from "../models";
import { fetchByPath, validateField } from "./utils";
import { DataStore } from "aws-amplify";
export default function EstudianteUpdateForm(props) {
  const {
    id: idProp,
    estudiante,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    name: "",
    field: undefined,
    mail: "",
  };
  const [name, setName] = React.useState(initialValues.name);
  const [field, setField] = React.useState(initialValues.field);
  const [mail, setMail] = React.useState(initialValues.mail);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = estudianteRecord
      ? { ...initialValues, ...estudianteRecord }
      : initialValues;
    setName(cleanValues.name);
    setField(cleanValues.field);
    setMail(cleanValues.mail);
    setErrors({});
  };
  const [estudianteRecord, setEstudianteRecord] = React.useState(estudiante);
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? await DataStore.query(Estudiante, idProp)
        : estudiante;
      setEstudianteRecord(record);
    };
    queryData();
  }, [idProp, estudiante]);
  React.useEffect(resetStateValues, [estudianteRecord]);
  const validations = {
    name: [{ type: "Required" }],
    field: [{ type: "Required" }],
    mail: [],
  };
  const runValidationTasks = async (
    fieldName,
    currentValue,
    getDisplayValue
  ) => {
    const value =
      currentValue && getDisplayValue
        ? getDisplayValue(currentValue)
        : currentValue;
    let validationResponse = validateField(value, validations[fieldName]);
    const customValidator = fetchByPath(onValidate, fieldName);
    if (customValidator) {
      validationResponse = await customValidator(value, validationResponse);
    }
    setErrors((errors) => ({ ...errors, [fieldName]: validationResponse }));
    return validationResponse;
  };
  return (
    <Grid
      as="form"
      rowGap="15px"
      columnGap="15px"
      padding="20px"
      onSubmit={async (event) => {
        event.preventDefault();
        let modelFields = {
          name,
          field,
          mail,
        };
        const validationResponses = await Promise.all(
          Object.keys(validations).reduce((promises, fieldName) => {
            if (Array.isArray(modelFields[fieldName])) {
              promises.push(
                ...modelFields[fieldName].map((item) =>
                  runValidationTasks(fieldName, item)
                )
              );
              return promises;
            }
            promises.push(
              runValidationTasks(fieldName, modelFields[fieldName])
            );
            return promises;
          }, [])
        );
        if (validationResponses.some((r) => r.hasError)) {
          return;
        }
        if (onSubmit) {
          modelFields = onSubmit(modelFields);
        }
        try {
          Object.entries(modelFields).forEach(([key, value]) => {
            if (typeof value === "string" && value.trim() === "") {
              modelFields[key] = undefined;
            }
          });
          await DataStore.save(
            Estudiante.copyOf(estudianteRecord, (updated) => {
              Object.assign(updated, modelFields);
            })
          );
          if (onSuccess) {
            onSuccess(modelFields);
          }
        } catch (err) {
          if (onError) {
            onError(modelFields, err.message);
          }
        }
      }}
      {...getOverrideProps(overrides, "EstudianteUpdateForm")}
      {...rest}
    >
      <TextField
        label="Name"
        isRequired={true}
        isReadOnly={false}
        value={name}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name: value,
              field,
              mail,
            };
            const result = onChange(modelFields);
            value = result?.name ?? value;
          }
          if (errors.name?.hasError) {
            runValidationTasks("name", value);
          }
          setName(value);
        }}
        onBlur={() => runValidationTasks("name", name)}
        errorMessage={errors.name?.errorMessage}
        hasError={errors.name?.hasError}
        {...getOverrideProps(overrides, "name")}
      ></TextField>
      <SelectField
        label="Field"
        placeholder="Please select an option"
        isDisabled={false}
        value={field}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              field: value,
              mail,
            };
            const result = onChange(modelFields);
            value = result?.field ?? value;
          }
          if (errors.field?.hasError) {
            runValidationTasks("field", value);
          }
          setField(value);
        }}
        onBlur={() => runValidationTasks("field", field)}
        errorMessage={errors.field?.errorMessage}
        hasError={errors.field?.hasError}
        {...getOverrideProps(overrides, "field")}
      >
        <option
          children="Mecatronica"
          value="MECATRONICA"
          {...getOverrideProps(overrides, "fieldoption0")}
        ></option>
        <option
          children="Sistemas"
          value="SISTEMAS"
          {...getOverrideProps(overrides, "fieldoption1")}
        ></option>
        <option
          children="Biomedica"
          value="BIOMEDICA"
          {...getOverrideProps(overrides, "fieldoption2")}
        ></option>
      </SelectField>
      <TextField
        label="Mail"
        isRequired={false}
        isReadOnly={false}
        value={mail}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              field,
              mail: value,
            };
            const result = onChange(modelFields);
            value = result?.mail ?? value;
          }
          if (errors.mail?.hasError) {
            runValidationTasks("mail", value);
          }
          setMail(value);
        }}
        onBlur={() => runValidationTasks("mail", mail)}
        errorMessage={errors.mail?.errorMessage}
        hasError={errors.mail?.hasError}
        {...getOverrideProps(overrides, "mail")}
      ></TextField>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Reset"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          isDisabled={!(idProp || estudiante)}
          {...getOverrideProps(overrides, "ResetButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={
              !(idProp || estudiante) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
