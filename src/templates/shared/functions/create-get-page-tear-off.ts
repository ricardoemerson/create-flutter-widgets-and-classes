import pascalCase from './pascal-case';

export default function createGetPageTearOff(
  componentName: string,
  getxViewsSuffix?: string,
  getxUseConstructorTearOffs = true
) {
  if (getxUseConstructorTearOffs) {
    return `${pascalCase(componentName)}${getxViewsSuffix}.new,`;
  }

  return `() => const ${pascalCase(componentName)}${getxViewsSuffix}(),`;
}
