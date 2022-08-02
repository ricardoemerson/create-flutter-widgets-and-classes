import CreateComponent from './interfaces/CreateComponent';
import pascalCase from './shared/functions/pascal-case';

import { snakeCase } from 'lodash';

export default ({ componentName, useIPrefixForInterfaces }: CreateComponent) =>
  `import '${useIPrefixForInterfaces ? 'i_' : ''}${snakeCase(componentName)}.dart';

class ${pascalCase(componentName)}${useIPrefixForInterfaces ? '' : 'Impl'} implements ${
    useIPrefixForInterfaces ? 'I' : ''
  }${pascalCase(componentName)} {

}
`;
