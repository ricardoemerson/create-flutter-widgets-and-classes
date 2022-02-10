import { snakeCase } from 'lodash';
import CreateComponent from './interfaces/CreateComponent';
import pascalCase from './shared/functions/pascal-case';

export default ({ componentName }: CreateComponent) => (
`import 'package:flutter/material.dart';
import 'package:get/get.dart';

import '${ snakeCase(componentName) }_controller.dart';

class ${ pascalCase(componentName) }View extends GetView<${ pascalCase(componentName) }Controller> {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text('${ pascalCase(componentName) }View'),
        centerTitle: true,
      ),
      body: const Center(
        child: Text(
          '${ pascalCase(componentName) }View is working',
          style: TextStyle(fontSize: 20),
        ),
      ),
    );
  }
}
`
);
