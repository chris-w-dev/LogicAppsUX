import type { QueryClient } from '@tanstack/react-query';
import type {
  Connection,
  ConnectionMetadata,
  ConnectionParameterSet as ParameterSet,
  ConnectionParameter,
  ConnectionParameterSetValues,
  Connector,
  OpenAPIV2,
} from '../../utils/src';
import { AssertionErrorCode, AssertionException } from '../../utils/src';

export interface ConnectorWithSwagger {
  connector: Connector;
  swagger: OpenAPIV2.Document;
}

export interface ConnectionCreationInfo {
  connectionParametersSet?: ConnectionParameterSetValues;
  connectionParameters?: Record<string, any>;
  alternativeParameterValues?: Record<string, any>;
  displayName?: string;
  parameterName?: string;
  appSettings?: Record<string, string>;
  additionalParameterValues?: Record<string, string>;
}

export interface ConnectionParametersMetadata {
  connectionParameters?: Record<string, ConnectionParameter>;
  connectionParameterSet?: ParameterSet;
  connectionMetadata?: ConnectionMetadata;
}

export interface CreateConnectionResult {
  connection?: Connection;
  errorMessage?: string;
}

export interface IConnectionService {
  getConnector(connectorId: string, getCached?: boolean): Promise<Connector>;
  getSwaggerFromConnector(connectorId: string): Promise<OpenAPIV2.Document>;
  getSwaggerFromUri(uri: string): Promise<OpenAPIV2.Document>;
  getConnection(connectionId: string): Promise<Connection>;
  getConnections(connectorId?: string, queryClient?: QueryClient): Promise<Connection[]>;
  createConnection(
    connectionId: string,
    connector: Connector,
    connectionInfo: ConnectionCreationInfo,
    parametersMetadata?: ConnectionParametersMetadata,
    shouldTestConnection?: boolean
  ): Promise<Connection>;
  createAndAuthorizeOAuthConnection(
    connectionId: string,
    connectorId: string,
    connectionInfo: ConnectionCreationInfo,
    parametersMetadata: ConnectionParametersMetadata
  ): Promise<CreateConnectionResult>;
  setupConnectionIfNeeded(connection: Connection, identityId?: string): Promise<void>;
  getUniqueConnectionName(connectorId: string, connectionNames: string[], connectorName: string): Promise<string>;
  getAuthSetHideKeys?(): string[];
}

let service: IConnectionService;

export const InitConnectionService = (connectionService: IConnectionService): void => {
  service = connectionService;
};

export const ConnectionService = (): IConnectionService => {
  if (!service) {
    throw new AssertionException(AssertionErrorCode.SERVICE_NOT_INITIALIZED, 'ConnectionService needs to be initialized before using');
  }

  return service;
};
