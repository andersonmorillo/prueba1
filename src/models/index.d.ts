import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled, AsyncItem, AsyncCollection } from "@aws-amplify/datastore";

export enum Field {
  MECATRONICA = "MECATRONICA",
  SISTEMAS = "SISTEMAS",
  BIOMEDICA = "BIOMEDICA"
}



type EagerPostulacion = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Postulacion, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name: string;
  readonly description: string;
  readonly status: boolean;
  readonly field: Field | keyof typeof Field;
  readonly profesorID: string;
  readonly coordinadorID: string;
  readonly estudianteID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyPostulacion = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Postulacion, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name: string;
  readonly description: string;
  readonly status: boolean;
  readonly field: Field | keyof typeof Field;
  readonly profesorID: string;
  readonly coordinadorID: string;
  readonly estudianteID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Postulacion = LazyLoading extends LazyLoadingDisabled ? EagerPostulacion : LazyPostulacion

export declare const Postulacion: (new (init: ModelInit<Postulacion>) => Postulacion) & {
  copyOf(source: Postulacion, mutator: (draft: MutableModel<Postulacion>) => MutableModel<Postulacion> | void): Postulacion;
}

type EagerReporte = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Reporte, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name: string;
  readonly grade?: number | null;
  readonly Profesor?: Profesor | null;
  readonly Estudiantes?: (Estudiante | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly reporteProfesorId?: string | null;
}

type LazyReporte = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Reporte, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name: string;
  readonly grade?: number | null;
  readonly Profesor: AsyncItem<Profesor | undefined>;
  readonly Estudiantes: AsyncCollection<Estudiante>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly reporteProfesorId?: string | null;
}

export declare type Reporte = LazyLoading extends LazyLoadingDisabled ? EagerReporte : LazyReporte

export declare const Reporte: (new (init: ModelInit<Reporte>) => Reporte) & {
  copyOf(source: Reporte, mutator: (draft: MutableModel<Reporte>) => MutableModel<Reporte> | void): Reporte;
}

type EagerProyecto = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Proyecto, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name: string;
  readonly description: string;
  readonly status: boolean;
  readonly field: Field | keyof typeof Field;
  readonly Profesor?: Profesor | null;
  readonly Estudiantes?: (Estudiante | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly proyectoProfesorId?: string | null;
}

type LazyProyecto = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Proyecto, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name: string;
  readonly description: string;
  readonly status: boolean;
  readonly field: Field | keyof typeof Field;
  readonly Profesor: AsyncItem<Profesor | undefined>;
  readonly Estudiantes: AsyncCollection<Estudiante>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly proyectoProfesorId?: string | null;
}

export declare type Proyecto = LazyLoading extends LazyLoadingDisabled ? EagerProyecto : LazyProyecto

export declare const Proyecto: (new (init: ModelInit<Proyecto>) => Proyecto) & {
  copyOf(source: Proyecto, mutator: (draft: MutableModel<Proyecto>) => MutableModel<Proyecto> | void): Proyecto;
}

type EagerProfesor = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Profesor, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name: string;
  readonly field: Field | keyof typeof Field;
  readonly mail?: string | null;
  readonly Postulacions?: (Postulacion | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyProfesor = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Profesor, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name: string;
  readonly field: Field | keyof typeof Field;
  readonly mail?: string | null;
  readonly Postulacions: AsyncCollection<Postulacion>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Profesor = LazyLoading extends LazyLoadingDisabled ? EagerProfesor : LazyProfesor

export declare const Profesor: (new (init: ModelInit<Profesor>) => Profesor) & {
  copyOf(source: Profesor, mutator: (draft: MutableModel<Profesor>) => MutableModel<Profesor> | void): Profesor;
}

type EagerEstudiante = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Estudiante, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name: string;
  readonly field: Field | keyof typeof Field;
  readonly mail?: string | null;
  readonly proyectoID?: string | null;
  readonly Postulacions?: (Postulacion | null)[] | null;
  readonly reporteID?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyEstudiante = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Estudiante, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name: string;
  readonly field: Field | keyof typeof Field;
  readonly mail?: string | null;
  readonly proyectoID?: string | null;
  readonly Postulacions: AsyncCollection<Postulacion>;
  readonly reporteID?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Estudiante = LazyLoading extends LazyLoadingDisabled ? EagerEstudiante : LazyEstudiante

export declare const Estudiante: (new (init: ModelInit<Estudiante>) => Estudiante) & {
  copyOf(source: Estudiante, mutator: (draft: MutableModel<Estudiante>) => MutableModel<Estudiante> | void): Estudiante;
}

type EagerCoordinador = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Coordinador, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name: string;
  readonly mail: string;
  readonly Postulacions?: (Postulacion | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyCoordinador = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Coordinador, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name: string;
  readonly mail: string;
  readonly Postulacions: AsyncCollection<Postulacion>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Coordinador = LazyLoading extends LazyLoadingDisabled ? EagerCoordinador : LazyCoordinador

export declare const Coordinador: (new (init: ModelInit<Coordinador>) => Coordinador) & {
  copyOf(source: Coordinador, mutator: (draft: MutableModel<Coordinador>) => MutableModel<Coordinador> | void): Coordinador;
}