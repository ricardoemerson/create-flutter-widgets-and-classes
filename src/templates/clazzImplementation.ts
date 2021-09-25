import { snakeCase } from 'lodash';
import CreateComponent from './interfaces/CreateComponent';
import pascalCase from './shared/functions/pascal-case';

export default ({ componentName, useIPrefixForInterfaces }: CreateComponent) => (
`import '${ useIPrefixForInterfaces ? 'i_' : '' }${ snakeCase(componentName) }.dart';

class ${ pascalCase(componentName) }${ useIPrefixForInterfaces ? '' : 'Impl' } implements ${ useIPrefixForInterfaces ? 'I' : '' }${ pascalCase(componentName) } {

}
`
);
