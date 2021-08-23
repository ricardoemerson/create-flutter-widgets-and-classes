import CreateComponent from './interfaces/CreateComponent';
import pascalCase from './shared/functions/pascal-case';

export default ({ componentName, fileName }: CreateComponent) => (
`import 'package:mobx/mobx.dart';

part '${ fileName }.g.dart';

class ${ pascalCase(componentName) } = _${ pascalCase(componentName) }Base with _$${ pascalCase(componentName) };

abstract class _${ pascalCase(componentName) }Base with Store {

}
`
);
