import {
  CardBenefitsH1,
  CardBenefitsParagraph,
  CardBenefitsSpan,
  CardBenefitsProperty,
  CardBenefitssSection,
  CardBenefitsSpace,
} from './CardBenefitsComponents'
import { CardBenefitsCollection } from './CardsColletionBenefits'

export function Benefits() {
  return (
    <>
      <CardBenefitsSpace>
        <CardBenefitsH1>
          Atendimento <CardBenefitsSpan>100% personalizado</CardBenefitsSpan>
        </CardBenefitsH1>
        <CardBenefitsParagraph>
          A Dra Gabriela se destaca por seu grande diferencial em atendimento de
          excelência e seus clientes são prova disso
        </CardBenefitsParagraph>
        <CardBenefitssSection>
          <CardBenefitsProperty>
            <CardBenefitsCollection />
          </CardBenefitsProperty>
        </CardBenefitssSection>
      </CardBenefitsSpace>
    </>
  )
}
