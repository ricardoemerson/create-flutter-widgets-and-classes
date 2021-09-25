<p align="center">
  <br />
  <a title="Learn more about Create Flutter Widgets and Classes" href="https://github.com/ricardoemerson/create-flutter-widgets-and-classes">
    <img src="https://raw.githubusercontent.com/ricardoemerson/create-flutter-widgets-and-classes/master/images/cover-logo.png" alt="Create Flutter Widgets and Classes Logo" width="256"  heigth="256"/>
    </a>
</p>

# Support

**Create Flutter Widgets and Classes** is an extension created for **Visual Studio Code**. If you find it useful, please consider supporting it.

<table align="center" width="60%" border="0">
  <tr>
    <td>
      <a title="PayPal" href="https://www.paypal.com/donate?hosted_button_id=X26H7L6AVMD96">
        Donate with PayPal
      </a>
    </td>
    <td>
      <a title="Mercado Pago" href="https://mpago.la/1LvP93a">
        Donate with Mercado Pago
      </a>
    </td>
  </tr>
</table>

# Create Flutter Widgets and Classes

[![Version](https://vsmarketplacebadge.apphb.com/version/ricardo-emerson.create-flutter-widgets-and-classes.svg)](https://marketplace.visualstudio.com/items?itemName=ricardo-emerson.create-flutter-widgets-and-classes)
[![Install](https://vsmarketplacebadge.apphb.com/installs/ricardo-emerson.create-flutter-widgets-and-classes.svg)](https://marketplace.visualstudio.com/items?itemName=ricardo-emerson.create-flutter-widgets-and-classes)
[![Downloads](https://vsmarketplacebadge.apphb.com/downloads/ricardo-emerson.create-flutter-widgets-and-classes.svg)](https://marketplace.visualstudio.com/items?itemName=ricardo-emerson.create-flutter-widgets-and-classes)
[![Ratings](https://vsmarketplacebadge.apphb.com/rating-short/ricardo-emerson.create-flutter-widgets-and-classes.svg)](https://marketplace.visualstudio.com/items?itemName=ricardo-emerson.create-flutter-widgets-and-classes&ssr=false#review-details)

This extension creates Flutter Stateless or Stateful Widgets, MobX Store, Classes, Interfaces, and you can also apply to existing widgets the following wrappers:

- `Wrap with Expanded`
- `Wrap with Stack`
- `Wrap with Positioned`
- `Wrap with Align`
- `Wrap with ClipRRect`
- `Wrap with Hero`
- `Wrap with GestureDetector`
- `Wrap with SingleChildScrollView`
- `Wrap with SafeArea`
- `Wrap with Form`
- `Wrap with Obx`
- `Wrap with Observer`

# Usage Examples

You can create a Flutter Stateless or Stateful Widgets, MobX Store, Classes and Intefaces either by typing in the vscode command palette or by right-clicking any folder in the tree view and use the followed options:

- `📄 Create Dart Interface`
- `📄 Create Dart Provider Interface`
- `📄 Create Dart Repository Interface`
- `📄 Create Dart Service Interface`
- `📝 Create Dart Class`
- `📝 Create Dart Controller Class`
- `📦 Create Mobx Store`
- `🔶 Create Flutter Stateless Widget`
- `🔷 Create Flutter Stateful Widget`

## All Commands (Ctrl+Shift+P or Cmd+Shift+P):

![Usage](images/show-all-commands.png)

## Mouse Right Click:

![Usage](images/usage-right-mouse-click.png)

## Create Flutter Stateless Widget Example:

Select the folder when the widget will be created and choose `🔶 Create Flutter Stateless Widget` and enter the name of the widget to be created.

![Usage](images/create-stateless-widget.gif)

## Create Flutter Stateful Widget Example:

Select the folder when the widget will be created and choose `🔷 Create Flutter Stateful Widget` and enter the name of the widget to be created.

![Usage](images/create-stateful-widget.gif)

## Create Dart Class Example:

Select the folder when the class will be created and choose `📝 Create Dart Class` and enter the name of the class to be created.

![Usage](images/create-class.gif)

## Create Dart Interface Example:

Select the folder when the interface will be created and choose `📄 Create Dart Interface` and enter the name of the interface to be created.

![Usage](images/create-interface.gif)

## Code action Implements interface:

In interfaces files it is possible to use the code action `Implements interface` to create interface implementation.

![Usage](images/implements-interface.gif)

# Extra wrappers

Use the code actions of Visual Studio Code to wrap a widget with one of the following wrappers:

- `Wrap with Expanded`
- `Wrap with Stack`
- `Wrap with Positioned`
- `Wrap with Align`
- `Wrap with ClipRRect`
- `Wrap with Hero`
- `Wrap with GestureDetector`
- `Wrap with SingleChildScrollView`
- `Wrap with SafeArea`
- `Wrap with Form`
- `Wrap with Obx`
- `Wrap with Observer`

## Wrap with Expanded

![Usage](images/wrap-with-expanded.gif)

## Wrap with Stack

![Usage](images/wrap-with-stack.gif)

## Wrap with Positioned

![Usage](images/wrap-with-positioned.gif)

## Wrap with Align

![Usage](images/wrap-with-align.gif)

## Wrap with ClipRRect

![Usage](images/wrap-with-clip-rrect.gif)

## Wrap with Hero

![Usage](images/wrap-with-hero.gif)

## Wrap with GestureDetector

![Usage](images/wrap-with-gesture-detector.gif)

## Wrap with SingleChildScrollView

![Usage](images/wrap-with-single-child-scroll-view.gif)

## Wrap with SafeArea

![Usage](images/wrap-with-safe-area.gif)

## Wrap with Form

![Usage](images/wrap-with-form.gif)

## Wrap with Obx

In case of use of `GetX`, it is possible to wrapper a widget that uses an observable property with the widget `Obx` from lib [`get`](https://pub.dev/packages/get).

![Usage](images/wrap-with-obx.gif)

## Wrap with Observer

In case of use of `MobX`, it is possible to wrapper a widget that uses an observable property with the widget `Observer` from lib [`flutter_mobx`](https://pub.dev/packages/flutter_mobx).

![Usage](images/wrap-with-observer.gif)

## If wrap fails and breaks the code

In some widgets structures by positioning the cursor over the widget which will be surrounded by new widget may cause breaking the code.

![Usage](images/wrap-with-break.gif)

In this case, undo the last operation and select all the widget that will be wrapped, then use Visual Studio Code `code actions` and choose the appropriate wrapper.

![Usage](images/wrap-with-selecting.gif)

# Settings

## Create Implementation of Interface

By default after creation of an interface, the implementation class will be created together. It is also possible to create an interface without class implemetation.

## Use `I` Prefix For Interfaces

By default interfaces files are created using the `I` prefix in name of file and interface. It is also possible create it without `I` prefix.

![Usage](images/create-interface.gif)

Example of `settings.json`:

```json
{
  "createFlutterWidgetsAndClasses.createImplementationOfInterface": true
  "createFlutterWidgetsAndClasses.useIPrefixForInterfaces": true
}
```

**Enjoy!**
