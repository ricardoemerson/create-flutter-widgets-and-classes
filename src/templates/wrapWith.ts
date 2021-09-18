import { wrapWith } from './shared/functions/wrap-with';

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

const wrapWithSizedBoxTemplate = (widget: string) => (
`SizedBox(
  width: 100,
  height: 100,
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

export const wrapWithExpanded = async () => wrapWith(wrapWithExpandedTemplate);
export const wrapWithStack = async () => wrapWith(wrapWithStackTemplate);
export const wrapWithPositioned = async () => wrapWith(wrapWithPositionedTemplate);
export const wrapWithSizedBox = async () => wrapWith(wrapWithSizedBoxTemplate);
export const wrapWithHero = async () => wrapWith(wrapWithHeroTemplate);
export const wrapWithGestureDetector = async () => wrapWith(wrapWithGestureDetectorTemplate);
export const wrapWithSingleChildScrollView = async () => wrapWith(wrapWithSingleChildScrollViewTemplate);
export const wrapWithSafeArea = async () => wrapWith(wrapWithSafeAreaTemplate);
export const wrapWithForm = async () => wrapWith(wrapWithFormTemplate);
export const wrapWithObx = async () => wrapWith(wrapWithObxTemplate);
export const wrapWithObserver = async () => wrapWith(wrapWithObserverTemplate);
