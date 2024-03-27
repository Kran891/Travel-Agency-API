import OpenApiValidator from 'express-openapi-validator';
import path from 'path'
export const openApiMiddleware = () => {
    
    
    const openApiOptions: any = {
      apiSpec: path.join(__dirname, '../oas.yaml'),
      validateRequests: true, // (default),
      
    };
    return OpenApiValidator.middleware(openApiOptions);
  };
