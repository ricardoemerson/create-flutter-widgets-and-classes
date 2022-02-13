import { snakeCase } from 'lodash';
import CreateComponent from './interfaces/CreateComponent';
import pascalCase from './shared/functions/pascal-case';

export default ({ componentName, getxViewsSuffix }: CreateComponent) => (
`import 'package:flutter/material.dart';
import 'package:get/get.dart';

import '${ snakeCase(componentName) }_controller.dart';

class ${ pascalCase(componentName) }${ getxViewsSuffix } extends GetView<${ pascalCase(componentName) }Controller> {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text('${ pascalCase(componentName) }${ getxViewsSuffix }'),
        centerTitle: true,
      ),
      body: const Center(
        child: Text(
          '${ pascalCase(componentName) }${ getxViewsSuffix } is working',
          style: TextStyle(fontSize: 20),
        ),
      ),
    );
  }
}
`
);
