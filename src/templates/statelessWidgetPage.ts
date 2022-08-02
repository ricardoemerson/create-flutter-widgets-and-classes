import CreateComponent from './interfaces/CreateComponent';
import pascalCase from './shared/functions/pascal-case';

export default ({ componentName, widgetsViewsSuffix }: CreateComponent) =>
  `import 'package:flutter/material.dart';

class ${pascalCase(componentName)}${widgetsViewsSuffix} extends StatelessWidget {
  const ${pascalCase(componentName)}${widgetsViewsSuffix}({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text('${pascalCase(componentName)}${widgetsViewsSuffix}'),
        centerTitle: true,
      ),
      body: const Center(
        child: Text(
          '${pascalCase(componentName)}${widgetsViewsSuffix} is working',
          style: TextStyle(fontSize: 20),
        ),
      ),
    );
  }
}
`;
