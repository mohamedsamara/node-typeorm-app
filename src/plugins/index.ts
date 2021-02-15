import * as Hapi from '@hapi/hapi';
import Inert from '@hapi/inert';
import Vision from '@hapi/vision';
import * as HapiSwagger from 'hapi-swagger';
// eslint-disable-next-line @typescript-eslint/no-var-requires
const Pack = require('../../package.json');

const swaggerOptions: HapiSwagger.RegisterOptions = {
  info: {
    title: 'API Documentation',
    // version: '1.0.0'
    version: Pack.version
  }
};

const plugins: Array<Hapi.ServerRegisterPluginObject<any>> = [
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
export default plugins;
