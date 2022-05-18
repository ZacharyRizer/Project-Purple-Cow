export class EnvService {
  // The values that are defined here are the default values that can
  // be overridden by env.js

  // couterAPI KEY
  public counterKey: string = '1ccb732e-b55a-4404-ad3f-0f99c02fe44e';

  // counterAPI Namespace
  public counterNamespace: string = 'project-purple-cow';

  // Whether or not to enable debug mode
  public enableDebug = true;

  constructor() {}
}
