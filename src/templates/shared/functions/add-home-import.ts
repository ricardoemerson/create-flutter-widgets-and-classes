export default function addHomeImport(useHomeImport: boolean) {
  if (useHomeImport) {
    return `\nimport '../modules/home/home_binding.dart';\nimport '../modules/home/home_page.dart';\n`
  } else {
    return '';
  }
}
