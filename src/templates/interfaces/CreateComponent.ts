export default interface CreateComponent {
  componentName: string;
  fileName?: string;
  getxViewsSuffix?: string;
  mobxFileSuffix?: string;
  useIPrefixForInterfaces?: boolean;
  createHomeImport?: boolean;
}
