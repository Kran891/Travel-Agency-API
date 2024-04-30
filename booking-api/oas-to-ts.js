const {generateApi} = require('swagger-typescript-api');
const YAML = require('yaml');
const fs = require('fs');

const path = require('path');

generateApi({
    input: path.resolve(process.cwd(), './src/api/oas.yaml'),
    output: path.resolve(process.cwd(), './src/api'),
    name:"api-modelsv2.ts",
    generateClient: false,
    extractEnums: true,
    extractingOptions: {
        enumSuffix: [''],
    },
    primitiveTypeConstructs: () => ({
        string : {
            'date-time' : 'Date | string',
        },
    }),
})