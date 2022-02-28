import pascalCase from './pascal-case';

export default function createBindingTearOff(componentName: string, getxUseConstructorTearOffs = true) {
  if (getxUseConstructorTearOffs) {
    return `${ pascalCase(componentName) }Controller.new,`;
  }

  return `() => ${ pascalCase(componentName) }Controller(),`;
}
