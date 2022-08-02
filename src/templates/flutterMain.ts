import CreateComponent from './interfaces/CreateComponent';

export default ({ usesAppPath }: CreateComponent) =>
  `import 'package:flutter/material.dart';
import 'package:get/get.dart';

import '${usesAppPath ? 'app/' : ''}core/bindings/application_bindings.dart';
import '${usesAppPath ? 'app/' : ''}routes/app_pages.dart';

void main() {
  runApp(
    GetMaterialApp(
      debugShowCheckedModeBanner: false,
      title: 'Your App Title',
      initialBinding: ApplicationBindings(),
      initialRoute: AppPages.INITIAL,
      getPages: AppPages.routes,
    ),
  );
}
`;
