import path from 'path';
import { middleware } from 'express-openapi-validator';

export const openApiMiddleware = () => {
  const specFilePath = path.join(__dirname, '../oas.yaml');
  const opHandlerPath = path.join(__dirname, '../controllers')
  return middleware({
    apiSpec: specFilePath,
    operationHandlers: opHandlerPath,
    validateRequests: true, // (default)
  });
};
