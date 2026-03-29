# Flutter Tools Pro

<p align="right">
  <a href="https://github.com/ricardoemerson/create-flutter-widgets-and-classes/blob/main/README.md">English</a> | 🌐 <b>Português</b>
</p>

<p align="center">
  <br />
  <a title="Saiba mais sobre o Flutter Tools Pro" href="https://github.com/ricardoemerson/create-flutter-widgets-and-classes">
    <img src="https://raw.githubusercontent.com/ricardoemerson/create-flutter-widgets-and-classes/main/images/cover-logo.png" alt="Logo Flutter Tools Pro" width="180"  height="180"/>
  </a>
</p>

![Visual Studio Marketplace Version](https://img.shields.io/visual-studio-marketplace/v/ricardo-emerson.create-flutter-widgets-and-classes.svg?style=flat-square)
![Visual Studio Marketplace Installs](https://img.shields.io/visual-studio-marketplace/i/ricardo-emerson.create-flutter-widgets-and-classes.svg?style=flat-square)
![Visual Studio Marketplace Downloads](https://img.shields.io/visual-studio-marketplace/d/ricardo-emerson.create-flutter-widgets-and-classes.svg?style=flat-square)
![Visual Studio Marketplace Rating](https://img.shields.io/visual-studio-marketplace/r/ricardo-emerson.create-flutter-widgets-and-classes.svg?style=flat-square)
[![GitHub](https://img.shields.io/github/stars/ricardoemerson/create-flutter-widgets-and-classes.svg?style=flat-square)](https://github.com/ricardoemerson/create-flutter-widgets-and-classes)

---

## 🚀 Acelere seu Desenvolvimento Flutter

O **Flutter Tools Pro** é uma suíte de produtividade de alta performance para Visual Studio Code, desenvolvida especificamente para desenvolvedores que trabalham com arquiteturas Flutter modernas. Ele automatiza a criação de widgets, classes e estruturas complexas de funcionalidades nos principais frameworks de gerenciamento de estado do mercado.

### 💎 Principais Benefícios
- **Automação Arquitetural**: Gere pastas completas de funcionalidades (View, Controller, Binding, Route) para GetX, Riverpod e Modular instantaneamente.
- **Contexto Inteligente**: Ativa/desativa recursos automaticamente lendo seu arquivo `pubspec.yaml`.
- **Erradicação de Boilerplate**: Mais de 160 snippets otimizados e ações de código inteligentes para envolver (wrap) widgets.

---

## 🛠 Recursos

| Categoria | Capacidade | Nível |
| :--- | :--- | :---: |
| **Frameworks** | GetX, Riverpod, Flutter Modular, MobX | **PRO** |
| **Geradores** | Widgets Stateless/Stateful (Página ou Componente) | **PRO** |
| **Arquitetura** | Interfaces, Repositórios, DTOs, Serviços | **PRO** |
| **Produtividade** | Geração de Templates Customizados | **PRO** |
| **Ações de Código** | Wrappers Inteligentes (LayoutBuilder, Obx, etc.) | **PRO** |
| **Snippets** | 160+ Utilitários Dart & Flutter | **GRÁTIS** |

---

## 🔑 Licenciamento e Primeiros Passos

Inicialmente oferecido gratuitamente, o Flutter Tools agora é uma extensão paga para garantir sua sustentabilidade e melhoria contínua.

### Como Registrar sua Assinatura
1. Visite o [Extensions Hub](https://extensionshub.com.br) para adquirir seu plano.
2. Abra a **Paleta de Comandos** (`Ctrl+Shift+P` / `Cmd+Shift+P`).
3. Selecione ✏️ **Add/Update Subscription Key for Flutter Tools Pro**.
4. Insira sua chave e dê um nome ao seu dispositivo.

---

## 🎬 Exemplos de Uso

> Todos os exemplos seguem as configurações padrão. Sinta-se à vontade para personalizá-los conforme a arquitetura do seu projeto.

### Widgets (Componentes e Páginas)
Gere widgets `Stateless` ou `Stateful` com estruturas pré-definidas.

| Ação | Página | Componente |
| :--- | :---: | :---: |
| **Stateless** | ![Página](images/create-stateless-widget-page.gif) | ![Comp](images/create-stateless-widget-component.gif) |
| **Stateful** | ![Página](images/create-stateful-widget-page.gif) | ![Comp](images/create-stateful-widget-component.gif) |

<details>
<summary><b>Ver Integrações Avançadas de Frameworks (GetX, MobX, etc.)</b></summary>

### Tipos de Widgets Customizados

### Criar Stateless Widget como Componente:

![Uso](images/create-stateless-widget-component.gif)

### Criar Stateless Widget como Página:

![Uso](images/create-stateless-widget-page.gif)

### Criar Stateful Widget como Componente:

![Uso](images/create-stateful-widget-component.gif)

### Criar Stateful Widget como Página:

![Uso](images/create-stateful-widget-page.gif )

### Configurações para Criar Páginas com Widgets

#### Criar pasta para Páginas de Widgets

![Uso](images/settings-create-folder-for-widgets-page.gif)

#### Sufixo para Widgets como Páginas (Page, Screen ou View)

![Uso](images/settings-create-folder-for-widgets-suffix.gif)

Para criar um Stateless Widget, clique com o botão direito na pasta onde o widget será criado, escolha `🔶 Create Stateless Widget` e informe o nome do widget.

![Uso](images/create-stateless-widget.gif)

## Exemplo de Criar Stateful Widget:

Para criar um Stateful Widget, clique com o botão direito na pasta onde o widget será criado, escolha `🔷 Create Stateful Widget` e informe o nome do widget.

![Uso](images/create-stateful-widget.gif)

### Arquitetura Moderna GetX
Gere automaticamente bindings, controllers e rotas.
![Recurso GetX](images/create-getx-feature.gif)

### MobX Stores
Geração de stores sem boilerplate.
![MobX Store](images/create-mobx-store.gif)

### Camadas de Domínio
Crie interfaces profissionais para Providers, Repositories e Services.
![Interfaces](images/create-services.gif)

### Classes Base
Gere DTOs, Models e Singletons com padrões de mercado.
![Classes](images/create-class.gif)
</details>

---

## 🛠 Pro Code Actions

Envolva (wrap) widgets de forma inteligente usando as code actions do Visual Studio Code.
> **Dica**: Use `Alt + W` para selecionar todo o widget antes de aplicar um wrapper para 100% de precisão.

### ⚡ Atalhos de Power User

| Atalho | Ação | Descrição |
| :--- | :--- | :--- |
| `Alt + W` | **Selecionar Widget** | Expande a seleção de forma inteligente para todo o widget. |
| `Alt + Q` | **Envolver com Widget...** | Abre o Quick Pick com os 60+ wrappers disponíveis. |
| `Alt + U` | **Sincronização Inteligente**| Sincroniza manualmente as funcionalidades com o `pubspec.yaml`. |
| `Ctrl + Shift + .` | **Próximo Valor** | Incrementa valores numéricos (passo: 2, 4, 8, 16...). |
| `Ctrl + Shift + ,` | **Valor Anterior** | Decrementa valores numéricos. |
| `Ctrl + O` + `S/W` | **Configurações** | Abre rapidamente as configurações de Usuário (`S`) ou Workspace (`W`). |

<details>
<summary><b>Ver Todos os 60+ Wrappers e Ferramentas Disponíveis</b></summary>

### Implementação Inteligente de Interface
Gere automaticamente arquivos de implementação a partir de definições de interface.
![Implementar Interface](images/implements-interface.gif)

### Wrappers Abrangentes
As ações disponíveis incluem:
- **Layout e Responsividade**: `Envolver com LayoutBuilder` (todas as variações), `Expanded`, `Flexible`, `Stack`, `Positioned`, `Align`, `SafeArea`, `Wrap`, `IntrinsicHeight/Width`, `Card`, `Center`, `Column`, `Row`, `Container`, `Padding`, `SizedBox`
- **Rolagem e Slivers**: `SingleChildScrollView`, `ListView.builder`, `GridView.builder`, `CustomScrollView` (7+ variações), `SliverAppBar`, `SliverList`, `SliverToBoxAdapter`, `SliverFillRemaining`, etc.
- **Estilização e Formas**: `ClipRRect`, `Hero`, `FittedBox`, `FractionallySizedBox`, `DecoratedBox`, `ColoredBox`, `Pdf` (widget wrapper)
- **Interação e Formulários**: `GestureDetector`, `InkWell`, `CallbackShortcuts`, `Form`, `PopScope`, `FormField`
- **Gerenciamento de Estado**: `Obx` (GetX), `Observer` (MobX), `Consumer` (Riverpod), `ValueListenableBuilder`, `Watch` (Signals)
- **Visibilidade e Lógica**: `Visibility`, `Offstage`, `SliverVisibility`, `If (Child)`, `If (Children)`

![Wrappers](images/wrap-with-layout-builder.gif)
</details>

## ⚡ Biblioteca de Snippets (160+)

Acesse snippets de alta velocidade usando o prefixo `ft-`.

<details>
<summary><b>Expandir Documentação Completa de Snippets</b></summary>

## Flutter e Dart

| Snippet | Descrição |
|:---|:---|
| `ft-imp-dart-date` | Adiciona import de Data do Dart |
| `ft-part` | Adiciona arquivo part (.g) para o arquivo principal |
| `ft-part-of` | Adiciona part of do arquivo principal |
| `ft-get-file-name` | Adiciona o nome do arquivo atual em Pascal Case |
| `ft-class` | Cria uma classe para o arquivo atual |
| `ft-constructor-class` | Cria um construtor de classe para o arquivo atual |
| `ft-constructor-class-with-named-params` | Cria um construtor com parâmetros nomeados |
| `ft-private-construtor` | Cria um construtor privado |
| `ft-private-attribute` | Cria um atributo privado |
| `ft-constr-inject-firebase-auth` | Cria injeção para Firebase Auth - Completo |
| `ft-add-inject-firebase-auth` | Adiciona injeção para Firebase Auth - Partes |
| `ft-constr-inject-controller` | Cria injeção para Controller - Completo |
| `ft-add-inject-controller` | Adiciona injeção para Controller - Partes |
| `ft-constr-inject-i-class` | Cria injeção para IClass - Completo |
| `ft-constr-inject-class` | Cria injeção para Class - Completo |
| `ft-add-inject-i-class` | Cria injeção para IClass - Partes |
| `ft-add-inject-class` | Cria injeção para Class - Partes |
| `ft-constr-inject-i-service` | Cria injeção para IService - Completo |
| `ft-constr-inject-service` | Cria injeção para Service - Completo |
| `ft-add-inject-i-service` | Cria injeção para IService - Partes |
| `ft-add-inject-service` | Cria injeção para Service - Partes |
| `ft-constr-inject-i-repository` | Cria injeção para IRepository - Completo |
| `ft-constr-inject-repository` | Cria injeção para Repository - Completo |
| `ft-add-inject-i-repository` | Adiciona injeção para IRepository - Partes |
| `ft-add-inject-repository` | Adiciona injeção para Repository - Partes |
| `ft-constr-inject-session` | Cria injeção para Session - Completo |
| `ft-add-inject-session` | Adiciona injeção para Session - Partes |
| `ft-constr-inject-i-provider` | Cria injeção para IProvider - Completo |
| `ft-constr-inject-provider` | Cria injeção para Provider - Completo |
| `ft-add-inject-i-provider` | Adiciona injeção para IProvider - Partes |
| `ft-add-inject-provider` | Adiciona injeção para Provider - Partes |
| `ft-constr-inject-rest-client` | Cria injeção para RestClient - Completo |
| `ft-add-inject-rest-client` | Adiciona injeção para RestClient - Partes |
| `ft-constr-inject-i-api-storage` | Cria injeção para IApiCacheStorageService - Completo |
| `ft-constr-inject-api-storage` | Cria injeção para ApiCacheStorageService - Completo |
| `ft-add-inject-i-api-storage` | Adiciona injeção para IApiCacheStorageService - Partes |
| `ft-add-inject-api-storage` | Adiciona injeção para ApiCacheStorageService - Partes |
| `ft-constr-inject-i-local-storage` | Cria injeção para ILocalStorageService - Completo |
| `ft-constr-inject-local-storage` | Cria injeção para LocalStorageService - Completo |
| `ft-add-inject-i-local-storage` | Adiciona injeção para ILocalStorageService - Partes |
| `ft-add-inject-local-storage` | Adiciona injeção para LocalStorageService - Partes |
| `ft-constr-inject-i-session-storage` | Cria injeção para ISessionStorageService - Completo |
| `ft-constr-inject-session-storage` | Cria injeção para SessionStorageService - Completo |
| `ft-add-inject-i-session-storage` | Adiciona injeção para ISessionStorageService - Partes |
| `ft-add-inject-session-storage` | Adiciona injeção para SessionStorageService - Partes |
| `ft-constr-inject-rest-client-with-i-api-storage` | Cria injeção para RestClient e ApiCacheStorageService - Completo |
| `ft-if-not` | Cria um if negando a condição |
| `ft-if-return` | Cria um if com return se a condição for verdadeira |
| `ft-if-not-return` | Cria um if com return se a condição for falsa |
| `ft-if-not-mounted` | Cria um if com return se o StatefulWidget não estiver montado |
| `ft-if-context-not-mounted` | Cria um if com return se o contexto não estiver montado |
| `ft-if-context-mounted` | Cria um if para contexto montado |
| `ft-if-null` | Cria um if para condição nula |
| `ft-if-not-null` | Cria um if para condição não nula |
| `ft-if-contains` | Cria um if para verificar se String contém termo |
| `ft-cm-basic` | Cria um comentário básico |
| `ft-cm-block` | Cria um comentário em bloco |
| `ft-cm-section` | Cria um comentário de seção |
| `ft-cm-subsection` | Cria um comentário de subseção |
| `ft-cm-section-footer` | Cria um comentário de rodapé |
| `ft-cm-element-block` | Cria um comentário de documentação |
| `ft-delayed-zero` | Adiciona instrução Future.delayed(Duration.zero) |
| `ft-delayed-seconds` | Adiciona instrução Future.delayed |
| `ft-delayed-seconds-with-callback` | Adiciona Future.delayed com função de callback |
| `ft-duration` | Adiciona instrução Duration |
| `ft-final-void-function` | Adiciona propriedade como void Function() |
| `ft-final-void-call-back` | Adiciona propriedade como VoidCallback |
| `ft-form-key` | Adiciona variável do tipo GlobalKey<FormState>() |
| `ft-form-key-private` | Adiciona variável privada do tipo GlobalKey<FormState>() |
| `ft-focus-node` | Adiciona variável do tipo FocusNode() |
| `ft-focus-node-private` | Adiciona variável privada do tipo FocusNode() |
| `ft-text-editing-controller` | Adiciona variável do tipo TextEditingController() |
| `ft-text-editing-controller-private` | Adiciona variável privada do tipo TextEditingController() |
| `ft-list-from-map-and-json` | Adiciona funções fromMap e fromJson para listas de dados |
| `ft-prop-eq` | Adiciona atribuição de chave e valor iguais em um objeto |
| `ft-prop-eq-map` | Adiciona atribuição de chave e valor iguais em um mapa |
| `ft-throw-exception` | Adiciona a instrução throw Exception() |
| `ft-throw-app-exception` | Adiciona a instrução throw AppException() |
| `ft-throw-auth-exception` | Adiciona a instrução throw AuthException() |
| `ft-await` | Adiciona a instrução await |
| `ft-final-simple` | Adiciona uma variável de atribuição simples |
| `ft-final-await` | Adiciona uma variável de atribuição futura |
| `ft-final-future-wait` | Adiciona processamento de múltiplos futures |
| `ft-build-context` | Adiciona declaração para BuildContext |
| `ft-date-format-dd-mm-yyyy` | Adiciona variável do tipo DateFormat('dd/MM/y') |
| `ft-future-method` | Adiciona um método Future |
| `ft-future-void-method` | Adiciona um método Future void |
| `ft-void-method` | Adiciona um método void |
| `ft-form-is-valid` | Verifica se um formulário é válido |
| `ft-get-property` | Adiciona uma propriedade get |
| `ft-get-property-private` | Adiciona uma propriedade get privada |
| `ft-static-get-property` | Adiciona uma propriedade get estática |
| `ft-signature-static-method` | Adiciona assinatura a um método estático |
| `ft-signature-method` | Adiciona assinatura a um método |
| `ft-static-method` | Adiciona um método estático |
| `ft-signature-future-static-method` | Adiciona assinatura de um método static future |
| `ft-signature-future-method` | Adiciona assinatura de um método future |
| `ft-future-static-method` | Adiciona um método static future |
| `ft-value-notifier` | Cria um atributo ValueNotifier |
| `widgets-binding-add-post-frame-callback`, `ft-widgets-binding-add-post-frame-callback` | Adiciona WidgetsBinding.instance.addPostFrameCallback() |
| `log`                                                                | Imprime uma string no System.out                                               |
| `logv`                                                               | Imprime um valor no System.out                                                |
| `ft-delayed-miliseconds`                                             | Adiciona instrução Future.delayed                                              |
| `ft-void-function`                                                   | Adiciona propriedade como void Function()                                      |
| `ft-void-call-back`                                                  | Adiciona propriedade como VoidCallback                                         |
| `ft-service-call`                                                    | Adiciona chamada de serviço com tratamento de erro                              |
| `ft-unfocus`                                                         | Esconde o teclado                                                              |

## Widgets

| Snippet | Descrição |
|:---|:---|
| `ft-border-side` | Adiciona borderSide com BorderSide() |
| `ft-border-side-color` | Adiciona borderSide apenas com cor |
| `ft-shape-circle-border` | Adiciona propriedade shape com CircleBorder() |
| `ft-shape-rounded-rectangle-border` | Adiciona propriedade shape com RoundedRectangleBorder() |
| `ft-main-axis-size` | Adiciona mainAxisSize a Row ou Column |
| `ft-main-axis-alignment` | Adiciona mainAxisAlignment a Row ou Column |
| `ft-cross-axis-alignment` | Adiciona crossAxisAlignment a Row ou Column |
| `ft-alignment` | Adiciona propriedade alignment com Alignment |
| `ft-wrap-alignment` | Adiciona propriedade alignment com WrapAlignment |
| `ft-wrap-cross-axis-alignment` | Adiciona crossAxisAlignment com WrapCrossAlignment |
| `ft-font-weight` | Adiciona FontWeight |
| `ft-text-decoration` | Adiciona TextDecoration (Underline, LineThrough, etc.) |
| `ft-text-decoration-thickness` | Adiciona espessura do TextDecoration |
| `ft-text-align` | Adiciona TextAlign |
| `ft-0xff`, `ft-hex-color` | Adiciona cor Hexadecimal |
| `ft-color-hex` | Adiciona propriedade de cor com Hexadecimal |
| `ft-color` | Adiciona propriedade de cor com Colors |
| `ft-background-color` | Adiciona propriedade backgroundColor com Colors |
| `ft-background-color-hex` | Adiciona backgroundColor com Hexadecimal |
| `ft-color-theme` | Ader cor usando Theme.of(context) |
| `ft-theme-of` | Busca cor usando Theme.of(context) |
| `ft-text-overflow` | Adiciona overflow com TextOverflow.ellipsis |
| `ft-space-vertical` | Adiciona espaçamento vertical com SizedBox |
| `ft-space-horizontal` | Adiciona espaçamento horizontal com SizedBox |
| `ft-gap` | Adiciona espaçamento usando Gap |
| `ft-space-shrink` | Adiciona um SizedBox.shrink() |
| `ft-margin-all` | Adiciona margem com EdgeInsets.all() |
| `ft-margin-symmetric` | Adiciona margem com EdgeInsets.symmetric() |
| `ft-margin-only` | Adiciona margem com EdgeInsets.only() |
| `ft-padding-all` | Adiciona padding com EdgeInsets.all() |
| `ft-content-padding-all` | Adiciona contentPadding com EdgeInsets.all() |
| `ft-padding-symmetric` | Adiciona padding com EdgeInsets.symmetric() |
| `ft-content-padding-symmetric` | Adiciona contentPadding com EdgeInsets.symmetric() |
| `ft-padding-only` | Adiciona padding com EdgeInsets.only() |
| `ft-content-padding-only` | Adiciona contentPadding com EdgeInsets.only() |
| `ft-padding-zero` | Adiciona padding com EdgeInsets.zero |
| `ft-content-padding-zero` | Adiciona contentPadding com EdgeInsets.zero |
| `ft-edge-insets-zero` | Adiciona EdgeInsets.zero |
| `ft-border-all` | Adiciona borda com Border.all() |
| `ft-border-symmetric` | Adiciona borda com Border.symmetric() |
| `ft-bouncing-scroll-physics` | Adiciona física de scroll BouncingScrollPhysics() |
| `ft-direction` | Adiciona propriedade direction com Axis |
| `ft-scroll-direction` | Adiciona scrollDirection com Axis |
| `ft-navigator-pop` | Adiciona instrução Navigator.pop |
| `ft-navigator-pop-until` | Adiciona Navigator.popUntil |
| `ft-navigator-push-named` | Adiciona Navigator.pushNamed |
| `ft-navigator-push-replacement-named` | Adiciona Navigator.pushReplacementNamed |
| `ft-navigator-of-pop` | Adiciona Navigator.of(context).pop() |
| `ft-media-query` | Adiciona instrução MediaQuery para tamanho |
| `ft-app-bar-theme` | Adiciona appBarTheme com AppBarTheme() |
| `ft-text-style` | Estilo de texto com cor, tamanho e peso |
| `ft-text-style-theme-of` | Estilo de texto do Theme.of(context).textTheme |
| `ft-image-asset` | Adiciona Widget de Imagem de assets |
| `ft-image-network` | Adiciona Widget de Imagem da rede |
| `ft-icon-button` | Adiciona Widget IconButton |
| `ft-elevated-rectangle-button` | Adiciona ElevatedButton com BorderRadius |
| `ft-decoration` | Adiciona propriedade decoration com BoxDecoration |
| `ft-input-decoration` | Adiciona decoration com InputDecoration |
| `ft-border-radius` | Adiciona borderRadius com BorderRadius.circular() |
| `ft-column` | Adiciona Widget Column |
| `ft-row` | Adiciona Widget Row |
| `ft-wrap` | Adiciona Widget Wrap |
| `ft-stack` | Adiciona Widget Stack |
| `ft-text` | Adiciona Widget Text |
| `ft-scaffold` | Adiciona Widget Scaffold |
| `ft-icon` | Adiciona ícone do Google Fonts |
| `ft-phosphor-icon` | Adiciona ícone do pacote PhosphorIcon |
| `ft-separator`                                     | Adiciona espaçamento horizontal ou vertical usando SizedBox                    |
| `ft-media-query-size-of`                           | Adiciona MediaQuery.sizeOf(context).                                           |
| `ft-media-query-maybe`                             | Adiciona MediaQuery.of(context).                                               |
| `ft-font-size`                                     | Adiciona propriedade estilo fontSize                                           |
| `ft-text-form-input-simple`                        | Adiciona Widget TextFormInput Simples                                          |
| `ft-text-form-input-detailed`                      | Adiciona Widget TextFormInput Detalhado                                        |
| `ft-values`                                        | Adiciona um valor a partir de uma lista de valores                             |

## GetX

| Snippet | Descrição |
|:---|:---|
| `ft-imp-get` | Adiciona import do GetX |
| `ft-rx-attribute` | Cria um atributo Rx |
| `ft-obs-attribute` | Cria um atributo GetX Observable |
| `ft-get-size` | Usa GetX para obter tamanho da tela |
| `ft-get-find` | Adiciona Get.find() para instanciar classe |
| `ft-get-view` | Adiciona GetView para instanciar controller na view |
| `ft-get-put-controller` | Adiciona Get.put() para Controller() |
| `ft-get-lazy-put-service` | Adiciona Get.lazyPut() para Service() |
| `ft-on-init` | Adiciona override para o método onInit |
| `ft-on-ready` | Adiciona override para o método onReady |
| `ft-on-close` | Adiciona override para o método onClose |

## Bloc/Cubit

| Snippet | Descrição |
|:---|:---|
| `ft-bloc-router` | Cria um Módulo de Rota Bloc |
| `ft-bloc-router-with-args` | Cria um Módulo de Rota Bloc com argumentos |
| `ft-get-navigation-args` | Obtém argumentos de ModalRoute |
| `ft-enum-status` | Cria um enum para status de estado |

## Modular

| Snippet | Descrição |
|:---|:---|
| `ft-modular-get` | Adiciona Modular.get() para instanciar classe usando Flutter Modular |
| `ft-modular-get-data` | Adiciona Modular.get<type>() para instanciar Controller usando Flutter Modular |
| `ft-modular-get-controller` | Adiciona Modular.get() para instanciar controller usando Flutter Modular |
| `ft-modular-get-of-type` | Adiciona Modular.get<Class>() para instanciar classe usando Flutter Modular |
| `ft-modular-to-navigate` | Navega para uma nova tela |
| `ft-modular-to-push-named` | Navega para uma rota |
| `ft-module-route-v5` | Adiciona ModuleRoute ao Módulo |
| `ft-child-route-v5` | Adiciona ChildRoute ao Módulo |
| `ft-child-route-with-router-outlet-v5` | Adiciona ChildRoute com RouterOutlet ao Módulo |
| `ft-bind-lazy-singleton-class-v5` | Adiciona Bind.lazySingleton() para qualquer Classe usando Modular |
| `ft-bind-lazy-singleton-class-impl-v5` | Adiciona Bind.lazySingleton() para qualquer ClassImpl usando Modular |
| `ft-bind-lazy-singleton-controller-v5` | Adiciona Bind.lazySingleton() para Controller usando Modular |
| `ft-module-route-v6` | Adiciona ModuleRoute ao Módulo |
| `ft-child-route-v6` | Adiciona ChildRoute ao Módulo |
| `ft-bind-lazy-singleton-class-v6` | Adiciona i.addLazySingleton() para qualquer Classe usando Modular |
| `ft-bind-lazy-singleton-class-impl-v6` | Adiciona i.addLazySingleton() para qualquer ClassImpl usando Modular |
| `ft-bind-lazy-singleton-controller-v6` | Adiciona i.addLazySingleton() para Controller usando Modular |
| `ft-bind-lazy-singleton-i-repository-class` | Injeta uma instância lazy singleton de classe |
| `ft-bind-lazy-singleton-class-without-interface` | Injeta um lazy singleton de classe sem referência de interface |
| `ft-bind-singleton-class-without-interface` | Injeta um singleton de classe sem referência de interface |
| `ft-rchild` | Adiciona rota filha |
| `ft-rmodule` | Adiciona rota de módulo |
| `ft-modular-to-pop` | Adiciona instrução Modular.to usando pop |
| `ft-modular-to-pop-and-push-named` | Adiciona instrução Modular.to usando popAndPushNamed |
| `ft-modular-to-pop-until` | Adiciona instrução Modular.to usando popUntil |
| `ft-modular-to-push-replacement-named` | Adiciona instrução Modular.to usando pushReplacementNamed |
| `ft-modular-to-push-named-and-remove-until` | Adiciona instrução Modular.to usando pushNamedAndRemoveUntil |
| `ft-modular-import-app-module` | Importa AppModule no módulo atual |

## Riverpod

| Snippet | Descrição |
|:---|:---|
| `ft-riverpod-provider-rest-client` | Adiciona provider Riverpod para RestClient() |
| `ft-riverpod-provider-class` | Adiciona provider Riverpod para class() |
| `ft-riverpod-provider-session-class` | Adiciona provider Riverpod para classe Session() |
| `ft-riverpod-provider-repository` | Adiciona provider Riverpod para Repository() |
| `ft-riverpod-provider-repository-impl` | Adiciona provider Riverpod para RepositoryImpl() |
| `ft-riverpod-provider-service` | Adiciona provider Riverpod para Service() |
| `ft-riverpod-provider-service-impl` | Adiciona provider Riverpod para ServiceImpl() |
| `ft-riverpod-ref` | Adiciona ref do Riverpod |
| `ft-riverpod-command-class` | Adiciona classe de comando Riverpod |
| `ft-riverpode-provider-current-class` | Adiciona provider Riverpod para a classe atual() |
| `ft-riverpod-async-command-class` | Adiciona classe de comando Riverpod assíncrona |

## Linter (analysis_options.yaml)

| Snippet | Descrição |
|:---|:---|
| `ft-linter-analyzer` | Configura as opções do analyzer |
| `ft-linter-rules` | Inclui diversas regras para o linter melhorar o desenvolvimento |
| `ft-build-runner-options-bloc` | Configura opções do build-runner para Bloc |
| `ft-build-runner-options-riverpod`| Configura opções do build-runner para Riverpod |
| `ft-linter-formmater` | Configura as opções do analyzer |
| `ft-linter-analyzer-with-custom-lint` | Configura as opções do analyzer com custom lint |

## Provider

| Snippet | Descrição |
|:---|:---|
| `ft-context-read-provider` | Adiciona context.read() para instanciar classe usando Provider |
| `ft-context-read-provider-data` | Adiciona context.read<type>() para instanciar Controller usando Provider |
| `ft-context-watch-provider` | Adiciona context.watch<type>() para observar instância usando Provider |
| `ft-context-select-provider` | Adiciona context.select<ClassName, type>() para selecionar instância usando Provider |
| `ft-provider-create` | Adiciona instrução Provider() para Bloc, Cubit ou Controller |
| `ft-provider-create-class` | Adiciona instrução Provider() para IClass |
| `ft-provider-create-class-impl` | Adiciona instrução Provider() para Class |
| `ft-provider-create-controller` | Adiciona instrução Provider() para Controller() |
| `ft-provider-create-provider` | Adiciona instrução Provider() para Provider() usado por um Service() |
| `ft-provider-create-provider-impl` | Adiciona instrução Provider() para ProviderImpl() usado por um ServiceImpl() |
| `ft-provider-create-service` | Adiciona instrução Provider() para Service() |
| `ft-provider-create-service-impl` | Adiciona instrução Provider() para ServiceImpl() |
| `ft-provider-create-repository` | Adiciona instrução Provider() para Repository() usado por um Service() |
| `ft-provider-create-repository-impl` | Adiciona instrução Provider() para RepositoryImpl() usado por um ServiceImpl() |

## Configuração do App (settings.json)

| Snippet | Descrição |
|:---|:---|
| `fvm_flutter_sdk` | Configura caminhos do SDK FVM Dart/Flutter (remove .fvm da busca) |

</details>

---

## ⚙️ Configuração Avançada

Ajuste como o Flutter Tools Pro gera código para combinar com o estilo da sua equipe.

<details>
<summary><b>Ver Todas as Configurações Disponíveis</b></summary>

| Configuração | Tipo | Padrão | Descrição |
| :--- | :---: | :---: | :--- |
| `createFolderForInterfaces` | bool | `true` | Cria subpastas para interface e implementações. |
| `createFolderForWidgetsPage` | bool | `true` | Cria uma pasta dedicada ao gerar uma página de widget. |
| `useIPrefixForInterfaces` | bool | `true` | Usa o prefixo `I` para nomes de interface (ex: `IService`). |
| `widgetsViewsSuffix` | enum | `Page` | Sufixo padrão para telas: `Page`, `Screen` ou `View`. |
| `displayGetxContextMenu` | bool | `false` | Habilita/Desabilita itens de menu de contexto do GetX. |
| `displayRiverpodContextMenu`| bool | `false` | Habilita/Desabilita itens de menu de contexto do Riverpod. |
| `displayModularContextMenu` | bool | `false` | Habilita/Desabilita itens de menu de contexto do Flutter Modular. |
| `displayMobxContextMenu` | bool | `false` | Habilita/Desabilita itens de menu de contexto do MobX. |
| `displaySignalsContextMenu` | bool | `false` | Habilita/Desabilita itens de menu de contexto do Signals. |
| `projectPath` | enum | `/lib/app` | Caminho raiz para estruturas (`/lib`, `/lib/src`, `/lib/app`). |
| `projectViewsPath` | enum | `/modules` | Subcaminho para views (`/features`, `/modules`, `/pages`). |
| `useConstructorTearOffs` | bool | `false` | Habilita constructor tear-offs do Dart 3+ nos templates. |

![Settings](images/settings-create-folder-interfaces.gif)

</details>

---

<p align="center">
  <b>Aproveite o desenvolvimento Flutter em alta velocidade!</b><br/>
  © 2026 Extensions Hub Team
</p>
