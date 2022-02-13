export default interface CreateComponent {
  componentName: string;
  fileName?: string;
  getxViewsSuffix?: string;
  useIPrefixForInterfaces?: boolean;
  createHomeImport?: boolean;
}
