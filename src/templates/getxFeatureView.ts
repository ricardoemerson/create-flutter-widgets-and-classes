import CreateComponent from './interfaces/CreateComponent';
import pascalCase from './shared/functions/pascal-case';

import { snakeCase } from 'lodash';

export default ({ componentName, getxViewsSuffix, useSuperInitializerParameters }: CreateComponent) =>
  `import 'package:flutter/material.dart';
import 'package:get/get.dart';

import '${snakeCase(componentName)}_controller.dart';

class ${pascalCase(componentName)}${getxViewsSuffix} extends GetView<${pascalCase(
    componentName
  )}Controller> {
  ${useSuperInitializerParameters ? `const ${pascalCase(componentName) }${ getxViewsSuffix}({super.key});` : `const ${ pascalCase(componentName) }${ getxViewsSuffix } ({ Key? key }) : super(key: key);`}

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text('${pascalCase(componentName)}${getxViewsSuffix}'),
        centerTitle: true,
      ),
      body: const Center(
        child: Text(
          '${pascalCase(componentName)}${getxViewsSuffix} is working',
          style: TextStyle(fontSize: 20),
        ),
      ),
    );
  }
}
`;
