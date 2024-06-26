import {
  CardH1,
  CardParagraph,
  CardSpan,
  CardProperty,
  CardsSection,
  CardSpace,
} from './CardComponents'
import { CardsCollection } from './CardsCollection'
import { CardsCollection2 } from './CardsCollection2'

export function Card() {
  return (
    <>
      <CardSpace>
        <CardH1>
          Confira os serviços que <CardSpan>podemos lhe ajudar</CardSpan>
        </CardH1>
        <CardParagraph>
          Consulte nossos especialistas para uma avaliação
        </CardParagraph>
        <CardsSection>
          <CardProperty>
            <CardsCollection2 />
            <CardsCollection />
          </CardProperty>
        </CardsSection>
      </CardSpace>
    </>
  )
}
