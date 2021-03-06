import { wrapWith } from './shared/functions/wrap-with';


const wrapWithLayoutBuilderTemplate = (widget: string) => (
`LayoutBuilder(
  builder: (context, constraints) {
    return ${ widget };
  }
)
`
);
const wrapWithExpandedTemplate = (widget: string) => (
`Expanded(
  child: ${ widget },
)
`
);

const wrapWithStackTemplate = (widget: string) => (
`Stack(
  children: [
    ${ widget },
  ],
)
`
);

const wrapWithPositionedTemplate = (widget: string) => (
`Positioned(
  child: ${widget},
)
`
);

const wrapWithAlignTemplate = (widget: string) => (
`Align(
  alignment: Alignment.topCenter,
  child: ${widget},
)
`
);

const wrapWithClipRRectTemplate = (widget: string) => (
`ClipRRect(
  borderRadius: BorderRadius.circular(20),
  child: ${widget},
)
`
);

const wrapWithHeroTemplate = (widget: string) => (
`Hero(
  tag: 'tag-id',
  child: ${widget},
)
`
);

const wrapWithGestureDetectorTemplate = (widget: string) => (
`GestureDetector(
  onTap: () {},
  child: ${ widget },
)
`
);

const wrapWithSingleChildScrollViewTemplate = (widget: string) => (
`SingleChildScrollView(
  child: ${ widget },
)
`
);

const wrapWithSafeAreaTemplate = (widget: string) => (
`SafeArea(
  child: ${ widget },
)
`
);

const wrapWithFormTemplate = (widget: string) => (
`Form(
  child: ${ widget },
)
`
);

const wrapWithObxTemplate = (widget: string) => (
`Obx(
  () {
    return ${ widget };
  }
)
`
);

const wrapWithObserverTemplate = (widget: string) => (
`Observer(
  builder: (_) {
    return ${ widget };
  }
)
`
);

export const wrapWithLayoutBuilder= async () => wrapWith(wrapWithLayoutBuilderTemplate);
export const wrapWithExpanded = async () => wrapWith(wrapWithExpandedTemplate);
export const wrapWithStack = async () => wrapWith(wrapWithStackTemplate);
export const wrapWithPositioned = async () => wrapWith(wrapWithPositionedTemplate);
export const wrapWithAlign = async () => wrapWith(wrapWithAlignTemplate);
export const wrapWithClipRRect = async () => wrapWith(wrapWithClipRRectTemplate);
export const wrapWithHero = async () => wrapWith(wrapWithHeroTemplate);
export const wrapWithGestureDetector = async () => wrapWith(wrapWithGestureDetectorTemplate);
export const wrapWithSingleChildScrollView = async () => wrapWith(wrapWithSingleChildScrollViewTemplate);
export const wrapWithSafeArea = async () => wrapWith(wrapWithSafeAreaTemplate);
export const wrapWithForm = async () => wrapWith(wrapWithFormTemplate);
export const wrapWithObx = async () => wrapWith(wrapWithObxTemplate);
export const wrapWithObserver = async () => wrapWith(wrapWithObserverTemplate);
