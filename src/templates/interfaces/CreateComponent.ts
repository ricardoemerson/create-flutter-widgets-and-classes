export default interface CreateComponent {
  componentName: string;
  mainRouteName?: string;
  fileName?: string;
  featurePath?: string;
  getxViewsSuffix?: string;
  mobxFileSuffix?: string;
  useIPrefixForInterfaces?: boolean;
  usesAppPath?: boolean;
}
