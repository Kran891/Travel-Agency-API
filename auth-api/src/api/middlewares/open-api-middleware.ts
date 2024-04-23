import path from 'path'
import { middleware } from 'express-openapi-validator';


const openApiMiddleware = () => {
  const specFilePath = path.join(__dirname, '../oas.yaml');

  return middleware({
    apiSpec: specFilePath,
    operationHandlers: path.join(__dirname, '../controllers'),
    validateRequests: true, // (default)
    validateResponses: {
      onError: (err, _body, req) => {
        console.log(err);      
      },
    },
  });
};

export {openApiMiddleware}
