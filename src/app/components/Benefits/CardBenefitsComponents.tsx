import { ComponentProps } from 'react'

export interface CardBenefitsProps {
  className: string
}

type CardBenefitsSpaceProps = ComponentProps<'div'>

export function CardBenefitsSpace(props: CardBenefitsSpaceProps) {
  return <div className="px-2 py-4" {...props} />
}

type CardBenefitsH1Props = ComponentProps<'h1'>

export function CardBenefitsH1(props: CardBenefitsH1Props) {
  return (
    <h1
      className="mb-6 p-2 pt-8 text-center font-sans text-4xl font-semibold uppercase text-black/80 sm:text-5xl md:mx-auto"
      {...props}
    />
  )
}

type CardBenefitsParagraphProps = ComponentProps<'p'>

export function CardBenefitsParagraph(props: CardBenefitsParagraphProps) {
  return (
    <p
      className="text-center text-sm font-medium text-black/80 sm:text-lg md:mt-2 md:block"
      {...props}
    />
  )
}

type CardBenefitsSpanProps = ComponentProps<'span'>

export function CardBenefitsSpan(props: CardBenefitsSpanProps) {
  return <span className="font-black text-black/90 sm:block" {...props} />
}

type CardBenefitsGridProps = ComponentProps<'div'>

export function CardBenefitsGrid(props: CardBenefitsGridProps) {
  return (
    <div
      className="mt-14 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3"
      {...props}
    />
  )
}

type CardBenefitsGridIconDivProps = ComponentProps<'div'>

export function CardBenefitsGridIconDiv(props: CardBenefitsGridIconDivProps) {
  return <div className="mx-auto h-16 w-16 text-black" {...props} />
}

type CardBenefitsGridH1Props = ComponentProps<'h1'>

export function CardBenefitsGridH1(props: CardBenefitsGridH1Props) {
  return (
    <h1
      className="mb-4 mt-4 text-center text-xl font-semibold text-brandBG"
      {...props}
    />
  )
}

type CardBenefitsGridSubtitleProps = ComponentProps<'p'>

export function CardBenefitsGridSubtitle(props: CardBenefitsGridSubtitleProps) {
  return (
    <h1 className="mb-4 mt-4 text-center text-lg text-brandBG" {...props} />
  )
}

type CardBenefitsGridParagraphProps = ComponentProps<'p'>

export function CardBenefitsGridParagraph(
  props: CardBenefitsGridParagraphProps,
) {
  return <p className="mt-2 text-sm text-black" {...props} />
}

type CardBenefitsGridBgProps = ComponentProps<'div'>

export function CardBenefitsGridBg(props: CardBenefitsGridBgProps) {
  return (
    <div
      className="rounded-lg border-2 border-black/20 p-8 shadow-lg hover:border-black"
      {...props}
    />
  )
}

type CardBenefitsGridDivProps = ComponentProps<'div'>

export function CardBenefitsGridDiv(props: CardBenefitsGridDivProps) {
  return <div className="max-w-lg pt-2 lg:max-w-none" {...props} />
}

type CardBenefitsGridUlProps = ComponentProps<'ul'>

export function CardBenefitsGridUl(props: CardBenefitsGridUlProps) {
  return <ul className="pt-2" {...props} />
}

type CardBenefitsGridLiProps = ComponentProps<'li'>

export function CardBenefitsGridLi(props: CardBenefitsGridLiProps) {
  return <li className="flex gap-x-2" {...props} />
}

type CardBenefitssSectionProps = ComponentProps<'section'>

export function CardBenefitssSection(props: CardBenefitssSectionProps) {
  return (
    <section
      className="mx-auto -mt-16 px-4 py-8 sm:max-w-xl sm:py-10 md:max-w-full md:px-24 lg:max-w-6xl lg:px-8 lg:py-14"
      {...props}
    />
  )
}

type CardBenefitsPropertyProps = ComponentProps<'div'>

export function CardBenefitsProperty(props: CardBenefitsPropertyProps) {
  return <div className="mx-auto text-left" {...props} />
}

type CardBenefitsButtonPropertyProps = ComponentProps<'div'>

export function CardBenefitsButtonProperty(
  props: CardBenefitsButtonPropertyProps,
) {
  return <div className="mt-8 flex w-full justify-center" {...props} />
}

type CardBenefitsButtonAnchorProps = ComponentProps<'a'>

export function CardBenefitsButtonAnchor(props: CardBenefitsButtonAnchorProps) {
  return (
    <a
      target="_blank"
      aria-label="Clique no botão"
      className="focus:shadow-outline inline-flex h-12 w-auto items-center justify-center rounded-xl bg-brandWts px-8 font-medium text-white shadow-sm shadow-black/30 delay-0 duration-75 ease-in-out hover:scale-105 hover:transition-opacity focus:outline-none sm:h-14 md:w-auto"
      {...props}
    />
  )
}

type CardBenefitsButtonFlexProps = ComponentProps<'div'>

export function CardBenefitsButtonFlex(props: CardBenefitsButtonFlexProps) {
  return <div className="flex items-center" {...props} />
}

type CardBenefitsButtonTextProps = ComponentProps<'div'>

export function CardBenefitsButtonText(props: CardBenefitsButtonTextProps) {
  return (
    <div
      className="ml-3 text-center text-xs font-medium uppercase text-white sm:text-left sm:text-lg"
      {...props}
    />
  )
}

type CardBenefitsPropertyIconListProps = ComponentProps<'div'>

export function CardBenefitsPropertyIconList(
  props: CardBenefitsPropertyIconListProps,
) {
  return (
    <div
      className="flex flex-none items-center justify-center rounded-lg"
      {...props}
    />
  )
}

type CardBenefitsListDivProps = ComponentProps<'div'>

export function CardBenefitsListDiv(props: CardBenefitsListDivProps) {
  return <div {...props} />
}

type CardBenefitsListH1Props = ComponentProps<'h1'>

export function CardBenefitsListH1(props: CardBenefitsListH1Props) {
  return (
    <h1 className="text-base font-medium leading-loose text-black" {...props} />
  )
}

type CardBenefitsListMarginProps = ComponentProps<'div'>

export function CardBenefitsListMargin(props: CardBenefitsListMarginProps) {
  return <div className="mb-1" {...props} />
}
