import {
  CredibilityIcon,
  MapPinSimpleAreaIcon,
  ReferenceIcon,
  TrustIcon,
} from '../icons'
import {
  CredibilityFlexItens,
  CredibilityProperty,
} from './CredibilityComponents'

export function Credibility() {
  const features = {
    trust: 'Confiança',
    credility: 'Credibilidade',
    reference: 'Referência',
    city: 'Belo Horizonte e Regiões',
  }

  return (
    <>
      <CredibilityProperty>
        <CredibilityFlexItens>
          <CredibilityIcon />
          {features.credility}
        </CredibilityFlexItens>
        <CredibilityFlexItens>
          <ReferenceIcon />
          {features.reference}
        </CredibilityFlexItens>
        <CredibilityFlexItens>
          <TrustIcon />
          {features.trust}
        </CredibilityFlexItens>
        <CredibilityFlexItens>
          <MapPinSimpleAreaIcon />
          {features.city}
        </CredibilityFlexItens>
      </CredibilityProperty>
    </>
  )
}
