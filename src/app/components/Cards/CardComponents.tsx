import { ComponentProps } from 'react'

export interface CardProps {
  className: string
}

type CardSpaceProps = ComponentProps<'section'>

export function CardSpace(props: CardSpaceProps) {
  return <section className="px-2 py-10" {...props} />
}

type CardH1Props = ComponentProps<'h1'>

export function CardH1(props: CardH1Props) {
  return (
    <h1
      className="mb-6 max-w-5xl p-2 pt-8 text-center font-sans text-4xl font-semibold uppercase text-black/80 sm:text-5xl md:mx-auto"
      {...props}
    />
  )
}

type CardParagraphProps = ComponentProps<'p'>

export function CardParagraph(props: CardParagraphProps) {
  return (
    <p
      className="text-center text-sm font-medium text-black/80 sm:text-lg md:mt-2 md:block"
      {...props}
    />
  )
}

type CardSpanProps = ComponentProps<'span'>

export function CardSpan(props: CardSpanProps) {
  return <span className="font-black text-black/90 sm:block" {...props} />
}

type CardGridProps = ComponentProps<'div'>

export function CardGrid(props: CardGridProps) {
  return (
    <div
      className="mt-14 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-2"
      {...props}
    />
  )
}

type CardGrid2Props = ComponentProps<'div'>

export function CardGrid2(props: CardGrid2Props) {
  return (
    <div
      className="mt-7 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-2"
      {...props}
    />
  )
}

type CardGridIconDivProps = ComponentProps<'div'>

export function CardGridIconDiv(props: CardGridIconDivProps) {
  return <div className="mx-auto h-16 w-16 text-brandBG" {...props} />
}

type CardGridH1Props = ComponentProps<'h1'>

export function CardGridH1(props: CardGridH1Props) {
  return (
    <h1
      className="mb-4 mt-4 text-center text-xl font-semibold text-brandBG"
      {...props}
    />
  )
}

type CardGridParagraphProps = ComponentProps<'p'>

export function CardGridParagraph(props: CardGridParagraphProps) {
  return <p className="mt-2 text-sm text-brandBG" {...props} />
}

type CardGridBgProps = ComponentProps<'div'>

export function CardGridBg(props: CardGridBgProps) {
  return (
    <div
      className="rounded-lg border-2 border-black/20 p-8 shadow-lg hover:border-black"
      {...props}
    />
  )
}

type CardGridDivProps = ComponentProps<'div'>

export function CardGridDiv(props: CardGridDivProps) {
  return <div className="max-w-lg pt-2 lg:max-w-none" {...props} />
}

type CardGridUlProps = ComponentProps<'ul'>

export function CardGridUl(props: CardGridUlProps) {
  return <ul className="pt-2" {...props} />
}

type CardGridLiProps = ComponentProps<'li'>

export function CardGridLi(props: CardGridLiProps) {
  return <li className="flex gap-x-2" {...props} />
}

type CardsSectionProps = ComponentProps<'section'>

export function CardsSection(props: CardsSectionProps) {
  return (
    <section
      className="mx-auto -mt-16 px-4 py-8 sm:max-w-xl sm:py-10 md:max-w-full md:px-24 lg:max-w-6xl lg:px-8 lg:py-14"
      {...props}
    />
  )
}

type CardPropertyProps = ComponentProps<'div'>

export function CardProperty(props: CardPropertyProps) {
  return <div className="mx-auto text-left" {...props} />
}

type CardButtonPropertyProps = ComponentProps<'div'>

export function CardButtonProperty(props: CardButtonPropertyProps) {
  return <div className="mt-8 flex w-full justify-center" {...props} />
}

type CardButtonAnchorProps = ComponentProps<'a'>

export function CardButtonAnchor(props: CardButtonAnchorProps) {
  return (
    <a
      target="_blank"
      aria-label="Clique no botão"
      className="focus:shadow-outline inline-flex h-12 w-auto items-center justify-center rounded-xl bg-brandWts px-8 font-medium text-white shadow-sm shadow-black/30 delay-0 duration-75 ease-in-out hover:scale-105 hover:transition-opacity focus:outline-none sm:h-14 md:w-auto"
      {...props}
    />
  )
}

type CardButtonFlexProps = ComponentProps<'div'>

export function CardButtonFlex(props: CardButtonFlexProps) {
  return <div className="flex items-center" {...props} />
}

type CardButtonTextProps = ComponentProps<'div'>

export function CardButtonText(props: CardButtonTextProps) {
  return (
    <div
      className="ml-3 text-center text-xs font-medium uppercase text-white sm:text-left sm:text-lg"
      {...props}
    />
  )
}

type CardPropertyIconListProps = ComponentProps<'div'>

export function CardPropertyIconList(props: CardPropertyIconListProps) {
  return (
    <div
      className="flex flex-none items-center justify-center rounded-lg"
      {...props}
    />
  )
}

type CardListDivProps = ComponentProps<'div'>

export function CardListDiv(props: CardListDivProps) {
  return <div {...props} />
}

type CardListH1Props = ComponentProps<'h1'>

export function CardListH1(props: CardListH1Props) {
  return (
    <h1
      className="text-base font-normal leading-loose text-brandBG"
      {...props}
    />
  )
}

type CardListMarginProps = ComponentProps<'div'>

export function CardListMargin(props: CardListMarginProps) {
  return <div className="mb-1" {...props} />
}
