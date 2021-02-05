import Inert from '@hapi/inert';
import Vision from '@hapi/vision';
import * as HapiSwagger from 'hapi-swagger';

const swaggerOptions: HapiSwagger.RegisterOptions = {
  info: {
    title: 'API Documentation',
    version: '1.0.0'
  }
};

const swagger = [
  {
    plugin: Vision
  },
  {
    plugin: Inert
  },
  {
    plugin: HapiSwagger,
    options: swaggerOptions
  }
];
export default swagger;
