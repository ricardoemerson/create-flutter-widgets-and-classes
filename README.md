# Flutter Tools Pro

<p align="right">
  🌐 <b>English</b> | <a href="https://github.com/ricardoemerson/create-flutter-widgets-and-classes/blob/main/README.pt-br.md">Português</a>
</p>

<p align="center">
  <br />
  <a title="Learn More about Flutter Tools Pro" href="https://extensionshub.com.br">
    <img src="https://raw.githubusercontent.com/ricardoemerson/create-flutter-widgets-and-classes/main/images/cover-logo.png" alt="Flutter Tools Pro Logo" width="180" height="180"/>
  </a>
</p>

<p align="center">
  <img src="https://img.shields.io/visual-studio-marketplace/v/ricardo-emerson.create-flutter-widgets-and-classes.svg?style=flat-square" alt="Version"/>
  <img src="https://img.shields.io/visual-studio-marketplace/i/ricardo-emerson.create-flutter-widgets-and-classes.svg?style=flat-square" alt="Installs"/>
  <img src="https://img.shields.io/visual-studio-marketplace/d/ricardo-emerson.create-flutter-widgets-and-classes.svg?style=flat-square" alt="Downloads"/>
  <img src="https://img.shields.io/visual-studio-marketplace/r/ricardo-emerson.create-flutter-widgets-and-classes.svg?style=flat-square" alt="Rating"/>
  <a href="https://github.com/ricardoemerson/create-flutter-widgets-and-classes">
    <img src="https://img.shields.io/github/stars/ricardoemerson/create-flutter-widgets-and-classes.svg?style=flat-square" alt="Stars"/>
  </a>
</p>

---

## 🚀 Build Flutter Apps Faster — Without the Boilerplate

**Flutter Tools Pro** is the productivity extension Flutter developers have been waiting for. It automates the repetitive parts of your workflow — from widget creation to full feature architecture — so you can focus on what actually matters: building great apps.

- ⚡ Generate complete feature structures in seconds
- 🧠 Smart context: reads your `pubspec.yaml` to enable only what's relevant
- 🏗️ Full support for GetX, Riverpod, Flutter Modular, MobX and Signals
- 🎯 Works with **VS Code**, **Cursor**, and **Antigravity**

---

## ✨ Key Features

### 🔨 Code Generation
- Stateless & Stateful widgets (as Page or Component)
- Classes, Interfaces, DTOs, Repositories, and Services
- MobX Stores with full observable boilerplate
- Auto-generates implementation files from interfaces

### 🏛️ Architecture
- Full feature generation: View, Controller, Binding, Route
- App structure scaffolding for GetX, Riverpod, and Modular

### 🔄 JSON to Dart Model
- Convert any JSON to a Dart model instantly
- Supports **Native**, **JsonSerializable**, and **Freezed**
- Configurable: toggle `fromJson`, `toJson`, `copyWith`, `toString`, `explicitToJson`
- Auto-detects the right strategy from your `pubspec.yaml`

### ⚡ Data Class Method Generation
- Generate or regenerate boilerplate methods on **any existing Dart class** directly from the editor — no GUI required.
- `fromJson` / `toJson` (Native or JsonSerializable)
- `copyWith`
- `toString`
- All generators are **idempotent** — if the method already exists, it will be replaced cleanly, never duplicated.

### 💡 Smart Features
- **60+ widget wrappers** via Code Actions (`Ctrl+.`) or via Quick Pick (`Alt+Q`)
- **Smart widget selection** — expand selection to entire widget (`Alt+W`)
- **Data class method generation** — create or update `fromJson`, `copyWith`, `toString` idempotently
- **Pro Settings Dashboard** — visual WebView UI to configure all settings (User & Workspace)
- **160+ snippets** with the `ft-` prefix
- **Numeric value cycling** — increment values with `Ctrl+Shift+,` and decrement values with `Ctrl+Shift+.`

---

## 🧩 Supported Architectures

| Framework | Generates |
| :--- | :--- |
| **GetX** | App structure, Features (View + Controller + Binding + Route), Services |
| **Riverpod** | App structure, Features, Providers |
| **Flutter Modular** | App structure, Features, Modules |
| **MobX** | Stores with observable attributes |
| **Signals** | App structure, Features (Flutter Modular), Controllers |

Each architecture generator creates a complete, ready-to-use folder structure. No manual wiring required.

---

## ⚡ Why Flutter Teams Choose Flutter Tools Pro

| Without Flutter Tools Pro | With Flutter Tools Pro |
| :--- | :--- |
| Manually create 5–10 files per feature | One right-click generates the entire structure |
| Risk of inconsistent naming conventions | Enforced naming patterns across the team |
| Boilerplate copy-pasting from snippets | Context-aware generation from `pubspec.yaml` |
| Hours spent on JSON model classes | JSON to Model in under 10 seconds |
| Slow manual coding of boilerplate (`fromJson, toJson, copyWith, toString`) | Instant and smart generation via Code Actions |

---

## 🔑 Licensing & Activation

Flutter Tools Pro is a **paid extension** available at **[extensionshub.com.br](https://extensionshub.com.br)**.

> 💡 The 160+ snippet library is available **free** to all users. PRO features require an active subscription.

### How to Activate

1. Purchase your plan at [extensionshub.com.br](https://extensionshub.com.br)
2. Copy your license key after payment
3. Install the extension in VS Code
4. Open the **Command Palette** (`Ctrl+Shift+P` / `Cmd+Shift+P`)
5. Run: **✏️ Add/Update Subscription Key for Flutter Tools Pro**
6. Enter your license key and give your device a name

---

## 🛠️ Core Features Overview

### Widget Generation

Right-click any folder in the Explorer → choose `🔶 Create Stateless Widget` or `🔷 Create Stateful Widget`.

#### 🔶 Create Stateless Widget
Quickly generate stateless widgets, choosing between the **Page** or **Component** standard.

- **Page Option:**
![Page](images/create-stateless-widget-page.gif)

- **Component Option:**
![Component](images/create-stateless-widget-component.gif)

#### 🔷 Create Stateful Widget
Generate stateful widgets with mutable state automatically, saving time on boilerplate code.

- **Page Option:**
![Page](images/create-stateful-widget-page.gif)

- **Component Option:**
![Component](images/create-stateful-widget-component.gif)

---

### Feature Generation

Generate a full feature structure in one command. Example with GetX:

![GetX Feature](images/create-getx-feature.gif)

Generates: `view.dart`, `controller.dart`, `binding.dart`, and `route.dart` — pre-wired and ready.

---

### MobX Stores

![MobX Store](images/create-mobx-store.gif)

---

### Interfaces & Domain Layers

Create interfaces for Services, Repositories, and Providers — with optional implementation files generated automatically.

![Interfaces](images/create-services.gif)

> Use `Implements Interface` from the editor context menu to auto-generate the implementation class.

![Implements Interface](images/implements-interface.gif)

---

### JSON to Dart Model

A full-featured GUI for converting JSON into typed Dart models.

![JSON to Model](images/json-to-model.png)

- Auto-detects **Native**, **JsonSerializable**, or **Freezed** from `pubspec.yaml`
- Configurable output: toggle `fromJson`, `toJson`, `copyWith`, `toString`, `explicitToJson`
- Built-in JSON formatter and validator
- Supports nested objects as separate files

---

### Data Class Method Generation

Generate or regenerate boilerplate methods on **any existing Dart class** directly from the editor — no GUI required.

| Method | Native | JsonSerializable |
| :--- | :---: | :---: |
| `fromJson` / `toJson` | ✅ | ✅ |
| `copyWith` | ✅ | ✅ |
| `toString` | ✅ | ✅ |
| `Generate All` (all at once) | ✅ | ✅ |

**How to use:**

1. Place your cursor inside any Dart class
2. Press `Ctrl+.` (or click the 💡 lightbulb)
3. Choose the desired action from **Flutter Tools** Code Actions

> **JsonSerializable mode** is automatically offered when `json_serializable` is detected in your `pubspec.yaml`. It generates arrow-syntax factories, adds `@JsonSerializable` / `@JsonKey` annotations, and manages `part` directives for you.

> All generators are **idempotent** — if the method already exists, it is replaced cleanly. Run it as many times as you need, never get duplicates.

---

### Pro Settings Dashboard

A full-featured **WebView dashboard** to configure all extension settings without touching `settings.json`. Supports both **User Settings** (global) and **Workspace Settings** (per-project).

![Pro Settings Dashboard](images/settings-dashboard.png)

**Setting groups available:**

**Setting groups available:**

- **State Management & Context Menus** — Toggle GetX, Riverpod, Flutter Modular, MobX, and Signals context menus.
- **Paths & Generation Rules** — Define project base path, views subpath, and widget suffix.
- **JSON to Model** — Default engine (Native, Freezed, etc.), JSON key style, `explicitToJson`, and file management.
- **General Behaviors** — Configuration for `I` prefix for interfaces, constructor tear-offs, folder structure, and auto-impl creation.

> Open via the Command Palette: **⚙️ Open User Settings** (`Ctrl+O S`) or **⚙️ Open Workspace Settings** (`Ctrl+O W`).

---

### Code Actions — Widget Wrappers

Press `Alt+Q` (or use the lightbulb 💡) to wrap any widget with 60+ available wrappers.

> **Tip:** Use `Alt+W` first to smart-select the entire widget before wrapping.

**Available wrapper categories:**

- **Layout & Responsive** — `LayoutBuilder`, `Expanded`, `Flexible`, `Stack`, `Positioned`, `Align`, `SafeArea`, `Center`, `Column`, `Row`, `Container`, `Padding`, `SizedBox`, `Card`, `Wrap`, `IntrinsicHeight/Width`
- **Scrolling & Slivers** — `SingleChildScrollView`, `ListView.builder`, `GridView.builder`, `CustomScrollView` (7+ variants), `SliverAppBar`, `SliverList`, `SliverToBoxAdapter`, `SliverFillRemaining`
- **Styling & Shape** — `ClipRRect`, `Hero`, `FittedBox`, `FractionallySizedBox`, `DecoratedBox`, `ColoredBox`
- **Interaction & Forms** — `GestureDetector`, `InkWell`, `CallbackShortcuts`, `Form`, `PopScope`, `FormField`
- **State Management** — `Obx` (GetX), `Observer` (MobX), `Consumer` (Riverpod), `ValueListenableBuilder`, `Watch` (Signals)
- **Visibility & Logic** — `Visibility`, `Offstage`, `SliverVisibility`, `If (Child)`, `If (Children)`

![Wrap with Widget](images/wrap-with-layout-builder.gif)

---

### Bloc / Cubit Wrappers (Keyboard Shortcuts)

- `Ctrl+B S` — **BlocSelector**
- `Ctrl+B B` — **BlocBuilder**
- `Ctrl+B C` — **BlocConsumer**
- `Ctrl+B L` — **BlocListener**
- `Ctrl+B P` — **BlocProvider**
- `Ctrl+B R` — **RepositoryProvider**

---

## ⚡ Snippet Library (160+)

Use the `ft-` prefix to access any snippet. All snippets are **available for free**.

<details>
<summary><b>Expand Full Snippet Reference</b></summary>

### Flutter & Dart

| Snippet | Description |
|---|---|
| `ft-imp-dart-date` | Dart Date import |
| `ft-part` | Adds `.g` part file |
| `ft-part-of` | Adds `part of` declaration |
| `ft-class` | Creates a class for the current file |
| `ft-constructor-class` | Class constructor |
| `ft-constructor-class-with-named-params` | Class constructor with named params |
| `ft-private-construtor` | Private class constructor |
| `ft-private-attribute` | Private class attribute |
| `ft-if-not` | `if` denying a condition |
| `ft-if-return` | `if` with return when truthy |
| `ft-if-not-return` | `if` with return when falsy |
| `ft-if-not-mounted` | Guard: `if (!mounted) return` |
| `ft-if-context-not-mounted` | Guard: `if (!context.mounted) return` |
| `ft-if-null` | Null condition check |
| `ft-if-not-null` | Non-null condition check |
| `ft-cm-basic` | Basic comment |
| `ft-cm-block` | Block comment |
| `ft-cm-section` | Section comment |
| `ft-cm-subsection` | Subsection comment |
| `ft-delayed-zero` | `Future.delayed(Duration.zero)` |
| `ft-delayed-seconds` | `Future.delayed` with seconds |
| `ft-delayed-miliseconds` | `Future.delayed` with milliseconds |
| `ft-duration` | `Duration` instruction |
| `ft-form-key` | `GlobalKey<FormState>()` variable |
| `ft-focus-node` | `FocusNode()` variable |
| `ft-text-editing-controller` | `TextEditingController()` variable |
| `ft-future-method` | Future method |
| `ft-future-void-method` | Future void method |
| `ft-void-method` | Void method |
| `ft-static-method` | Static method |
| `ft-value-notifier` | `ValueNotifier` attribute |
| `ft-service-call` | Service call with error handling |
| `ft-throw-exception` | `throw Exception()` |
| `ft-throw-app-exception` | `throw AppException()` |
| `ft-await` | `await` keyword |
| `ft-final-simple` | Simple `final` assignment |
| `ft-final-await` | `final` with `await` |
| `ft-unfocus` | Hide keyboard |
| `log` | Print string to console |
| `logv` | Print value to console |
| `ft-widgets-binding-add-post-frame-callback` | `WidgetsBinding.instance.addPostFrameCallback()` |

### Injection Patterns

| Snippet | Description |
|---|---|
| `ft-constr-inject-controller` | Constructor injection for Controller |
| `ft-constr-inject-i-service` | Constructor injection for IService |
| `ft-constr-inject-service` | Constructor injection for Service |
| `ft-constr-inject-i-repository` | Constructor injection for IRepository |
| `ft-constr-inject-repository` | Constructor injection for Repository |
| `ft-constr-inject-i-provider` | Constructor injection for IProvider |
| `ft-constr-inject-provider` | Constructor injection for Provider |
| `ft-constr-inject-rest-client` | Constructor injection for RestClient |
| `ft-constr-inject-local-storage` | Constructor injection for LocalStorageService |
| `ft-constr-inject-session-storage` | Constructor injection for SessionStorageService |
| `ft-constr-inject-firebase-auth` | Constructor injection for Firebase Auth |

### Widgets

| Snippet | Description |
|---|---|
| `ft-scaffold` | Scaffold widget |
| `ft-column` | Column widget |
| `ft-row` | Row widget |
| `ft-stack` | Stack widget |
| `ft-wrap` | Wrap widget |
| `ft-text` | Text widget |
| `ft-text-rich` | `Text.rich` widget |
| `ft-text-span` | TextSpan widget |
| `ft-icon` | Icon from Google Fonts |
| `ft-phosphor-icon` | Icon from PhosphorIcon |
| `ft-icon-button` | IconButton widget |
| `ft-elevated-rectangle-button` | ElevatedButton with BorderRadius |
| `ft-elevated-circ-button` | ElevatedButton with CircleBorder |
| `ft-outlined-icon-button` | OutlinedButton with Icon |
| `ft-image-asset` | Image from assets |
| `ft-image-network` | Image from network |
| `ft-decoration` | BoxDecoration |
| `ft-input-decoration` | InputDecoration |
| `ft-border-radius` | BorderRadius.circular() |
| `ft-border-all` | Border.all() |
| `ft-padding-all` | Padding with EdgeInsets.all() |
| `ft-padding-symmetric` | Padding with EdgeInsets.symmetric() |
| `ft-padding-only` | Padding with EdgeInsets.only() |
| `ft-margin-all` | Margin with EdgeInsets.all() |
| `ft-space-vertical` | Vertical SizedBox spacer |
| `ft-space-horizontal` | Horizontal SizedBox spacer |
| `ft-gap` | Gap widget spacer |
| `ft-text-style` | TextStyle with color, size, weight |
| `ft-text-style-theme-of` | TextStyle from `Theme.of(context)` |
| `ft-font-weight` | FontWeight |
| `ft-text-align` | TextAlign |
| `ft-text-overflow` | TextOverflow.ellipsis |
| `ft-color` | Color from Colors |
| `ft-color-hex` | Color from hex code |
| `ft-media-query` | MediaQuery size |
| `ft-media-query-size-of` | `MediaQuery.sizeOf(context)` |
| `ft-navigator-push-named` | Navigator.pushNamed |
| `ft-navigator-pop` | Navigator.pop |
| `ft-main-axis-alignment` | mainAxisAlignment |
| `ft-cross-axis-alignment` | crossAxisAlignment |
| `ft-box-shadow` | BoxShadow |
| `ft-custom-scroll-view-with-sliver-to-box-adapter` | CustomScrollView + SliverToBoxAdapter |
| `ft-popup-menu-button` | PopupMenuButton |
| `ft-text-form-input-simple` | TextFormInput widget (simple) |
| `ft-text-form-input-detailed` | TextFormInput widget (detailed) |

### GetX

| Snippet | Description |
|---|---|
| `ft-imp-get` | GetX import |
| `ft-rx-attribute` | Rx observable attribute |
| `ft-rxn-attribute` | Rxn nullable observable |
| `ft-obs-attribute` | GetX `obs` attribute |
| `ft-get-find` | `Get.find<T>()` |
| `ft-get-put-controller` | `Get.put()` for Controller |
| `ft-get-lazy-put-controller` | `Get.lazyPut()` for Controller |
| `ft-get-put-service` | `Get.put()` for Service |
| `ft-get-lazy-put-service` | `Get.lazyPut()` for Service |
| `ft-get-put-repository` | `Get.put()` for Repository |
| `ft-get-view` | GetView base class usage |
| `ft-on-init` | `onInit` override |
| `ft-on-ready` | `onReady` override |
| `ft-on-close` | `onClose` override |
| `ft-get-size` | Get screen size with GetX |

### Riverpod

| Snippet | Description |
|---|---|
| `ft-riverpod-provider-class` | Provider for any class |
| `ft-riverpod-provider-repository` | Provider for Repository |
| `ft-riverpod-provider-service` | Provider for Service |
| `ft-riverpod-provider-rest-client` | Provider for RestClient |
| `ft-riverpod-ref` | Riverpod `ref` |
| `ft-riverpod-command-class` | Riverpod command class |
| `ft-riverpod-async-command-class` | Async Riverpod command class |

### Flutter Modular

| Snippet | Description |
|---|---|
| `ft-modular-get` | `Modular.get()` |
| `ft-modular-to-navigate` | Navigate to new screen |
| `ft-modular-to-push-named` | Navigate to named route |
| `ft-modular-to-pop` | Modular pop |
| `ft-module-route-v5` | ModuleRoute (v5) |
| `ft-child-route-v5` | ChildRoute (v5) |
| `ft-module-route-v6` | ModuleRoute (v6) |
| `ft-child-route-v6` | ChildRoute (v6) |
| `ft-bind-lazy-singleton-controller-v5` | lazySingleton for Controller (v5) |
| `ft-bind-lazy-singleton-controller-v6` | addLazySingleton for Controller (v6) |
| `ft-bind-lazy-singleton-class-without-interface` | lazySingleton without interface |
| `ft-rchild` | Child route shorthand |
| `ft-rmodule` | Module route shorthand |

### Provider

| Snippet | Description |
|---|---|
| `ft-context-read-provider` | `context.read()` |
| `ft-context-watch-provider` | `context.watch<T>()` |
| `ft-context-select-provider` | `context.select<T, R>()` |
| `ft-provider-create-controller` | `Provider()` for Controller |
| `ft-provider-create-service` | `Provider()` for Service |
| `ft-provider-create-repository` | `Provider()` for Repository |

### Bloc / Cubit

| Snippet | Description |
|---|---|
| `ft-bloc-router` | Bloc Router Module |
| `ft-bloc-router-with-args` | Bloc Router Module with args |
| `ft-get-navigation-args` | Get args from ModalRoute |
| `ft-enum-status` | State status enum |

### Linter & Config

| Snippet | Description |
|---|---|
| `ft-linter-analyzer` | Analyzer options |
| `ft-linter-rules` | Linter rules set |
| `ft-linter-analyzer-with-custom-lint` | Analyzer with custom lint |
| `ft-build-runner-options-bloc` | build_runner options for Bloc |
| `ft-build-runner-options-riverpod` | build_runner options for Riverpod |
| `fvm_flutter_sdk` | FVM SDK paths for `settings.json` |

</details>

---

## ⌨️ Keyboard Shortcuts

| Shortcut | Action |
| :--- | :--- |
| `Alt+W` | Smart-select entire widget |
| `Alt+Q` | Wrap with Widget... (60+ wrappers) |
| `Alt+U` | Sync features with `pubspec.yaml` |
| `Ctrl+Shift+.` | Increment numeric value |
| `Ctrl+Shift+,` | Decrement numeric value |
| `Ctrl+O S` | Open User Settings |
| `Ctrl+O W` | Open Workspace Settings |

---

## ⚙️ Configuration

All settings are available under `flutterTools.*` in your VS Code settings.

<details>
<summary><b>View All Settings</b></summary>

| Setting | Type | Default | Description |
| :--- | :---: | :---: | :--- |
| `createFolderForInterfaces` | bool | `true` | Create subfolders for interfaces and implementations. |
| `createFolderForWidgetsPage` | bool | `true` | Create a dedicated folder for widget pages. |
| `createImplementationOfInterface` | bool | `true` | Auto-generate implementation class when creating an interface. |
| `useIPrefixForInterfaces` | bool | `true` | Use `I` prefix for interface names (e.g., `IService`). |
| `widgetsViewsSuffix` | enum | `Page` | Default suffix for screens: `Page`, `Screen`, or `View`. |
| `displayGetxContextMenu` | bool | `false` | Show GetX items in the Explorer context menu. |
| `displayRiverpodContextMenu` | bool | `false` | Show Riverpod items in the Explorer context menu. |
| `displayModularContextMenu` | bool | `false` | Show Flutter Modular items in the Explorer context menu. |
| `displayMobxContextMenu` | bool | `false` | Show MobX items in the Explorer context menu. |
| `displaySignalsContextMenu` | bool | `false` | Show Signals items in the Explorer context menu. |
| `projectPath` | enum | `/lib/app` | Root path for generated structures (`/lib`, `/lib/src`, `/lib/app`). |
| `projectViewsPath` | enum | `/modules` | Subpath for views (`/features`, `/modules`, `/pages`). |
| `useConstructorTearOffs` | bool | `false` | Use Dart 3+ constructor tear-offs in generated templates. |
| `jsonToModel.defaultType` | enum | `Native` | Default model type: `Native`, `JsonSerializable`, or `Freezed`. |
| `jsonToModel.separateFiles` | bool | `true` | Generate each nested class in a separate file. |
| `jsonToModel.jsonKeyStyle` | enum | `snake_case` | JSON key style: `snake_case` or `camelCase`. |
| `jsonToModel.explicitToJson` | bool | `true` | Add `explicitToJson: true` to `@JsonSerializable` annotations. |

![Settings](images/settings-create-folder-interfaces.gif)

</details>

---

## 🌐 Compatibility

Flutter Tools Pro works seamlessly with:

| Editor | Status |
| :--- | :---: |
| **Visual Studio Code** | ✅ Fully supported |
| **Cursor** | ✅ Fully supported |
| **Antigravity** | ✅ Fully supported |

---

## 📢 Ready to Ship Faster?

Stop writing boilerplate by hand. Let Flutter Tools Pro handle the structure so you can focus on logic.

<p align="center">
  <a href="https://extensionshub.com.br"><b>🛒 Get Flutter Tools Pro → extensionshub.com.br</b></a>
</p>

---

<p align="center">
  <b>Enjoy high-velocity Flutter development!</b><br/>
  © 2026 Extensions Hub Team
</p>
