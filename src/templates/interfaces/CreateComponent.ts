export default interface CreateComponent {
  componentName: string;
  fileName?: string;
  featurePath?: string;
  getxViewsSuffix?: string;
  mobxFileSuffix?: string;
  useIPrefixForInterfaces?: boolean;
  createHomeImport?: boolean;
}
