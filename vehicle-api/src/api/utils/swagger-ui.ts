import YAML from 'yamljs';
import path from 'path';
import SwaggerUI from 'swagger-ui-express';

const SwaggerDoc=YAML.load(path.join(__dirname,'../oas.yaml'))

export {SwaggerUI,SwaggerDoc}
