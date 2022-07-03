import CreateComponent from './interfaces/CreateComponent';
import pascalCase from './shared/functions/pascal-case';

export default ({ componentName }: CreateComponent) => (
`class ${ pascalCase(componentName) } {
  static ${ pascalCase(componentName) }? _instance;

  ${ pascalCase(componentName) }._();

  static ${ pascalCase(componentName) } get instance {
    _instance ??= ${ pascalCase(componentName) }._();

    return _instance!;
  }
}
`
);
