// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';

const Field = {
  "MECATRONICA": "MECATRONICA",
  "SISTEMAS": "SISTEMAS",
  "BIOMEDICA": "BIOMEDICA"
};

const { Postulacion, Reporte, Proyecto, Profesor, Estudiante, Coordinador } = initSchema(schema);

export {
  Postulacion,
  Reporte,
  Proyecto,
  Profesor,
  Estudiante,
  Coordinador,
  Field
};