import { ComponentProps } from 'react'

export interface CredibilityProperty {
  className: string
}

type CredibilityPropertyProps = ComponentProps<'div'>

export function CredibilityProperty(props: CredibilityPropertyProps) {
  return (
    <div
      className="flex flex-wrap items-center justify-center gap-4 py-2 text-white sm:justify-start"
      {...props}
    />
  )
}

type CredibilityFlexItensProps = ComponentProps<'div'>

export function CredibilityFlexItens(props: CredibilityFlexItensProps) {
  return <div className="flex items-center gap-x-2" {...props} />
}
