import { ComponentProps } from 'react'

export interface HeroComponents {
  className: string
}

// type HeroSectionBgImageProps = ComponentProps<'div'>

// export function HeroSectionBgImage(props: HeroSectionBgImageProps) {
//   return (
//     <div
//       className="bg-opacity-0 bg-gradient-to-r from-black/10 from-5%"
//       {...props}
//     />
//   )
// }

type HeroSectionRootProps = ComponentProps<'section'>

export function HeroSectionRoot(props: HeroSectionRootProps) {
  return <section className="relative h-auto overflow-hidden" {...props} />
}

type HeroSectionProps = ComponentProps<'div'>

export function HeroSection(props: HeroSectionProps) {
  return (
    <section className="md:bgDesktop lg:bgDesktop hero min-h-min bg-bgMobile bg-cover bg-fixed bg-center bg-no-repeat sm:bg-bgDesktop sm:bg-cover md:bg-cover lg:bg-cover">
      <div
        className="hero-overlay bg-opacity-0 bg-gradient-to-r from-black/5 from-5%"
        {...props}
      />
    </section>
  )
}

type HeroPropertyProps = ComponentProps<'div'>

export function HeroProperty(props: HeroPropertyProps) {
  return (
    <div className="mt-48 pt-8 sm:my-28 sm:py-16">
      <div className="mx-auto max-w-screen-xl justify-between gap-x-12 px-4 md:flex md:px-8">
        <div className="max-w-xl space-y-4" {...props} />
      </div>
    </div>
  )
}

type HeroCardProps = ComponentProps<'div'>

export function HeroCard(props: HeroCardProps) {
  return (
    <div className="card-compact h-auto w-full min-w-full">
      <div className="card-body" {...props} />
    </div>
  )
}

type HeroCardTextProps = ComponentProps<'div'>

export function HeroCardText(props: HeroCardTextProps) {
  return <div className="text-center sm:text-left" {...props} />
}

type HeroCardH1Props = ComponentProps<'h1'>

export function HeroCardH1(props: HeroCardH1Props) {
  return (
    <h1
      className="mt-4 pb-4 text-2xl font-extrabold text-white drop-shadow-lg md:text-4xl"
      {...props}
    />
  )
}

type HeroCardP1Props = ComponentProps<'p'>

export function HeroCardP1(props: HeroCardP1Props) {
  return (
    <p
      className="mt-4 pb-4 text-sm leading-relaxed text-white md:text-xl"
      {...props}
    />
  )
}

type HeroCardP2Props = ComponentProps<'p'>

export function HeroCardP2(props: HeroCardP2Props) {
  return (
    <p
      className="pb-1 pt-1 text-sm leading-relaxed text-white md:text-xl"
      {...props}
    />
  )
}

type HeroImgPropertyProps = ComponentProps<'div'>

export function HeroImgProperty(props: HeroImgPropertyProps) {
  return (
    <>
      <div
        className="flex justify-center sm:flex-none sm:justify-start"
        {...props}
      />
    </>
  )
}
