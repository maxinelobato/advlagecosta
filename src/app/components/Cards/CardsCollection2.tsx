import { IconCardProperty } from '../icons/IconCard'
import { IconCardWtp } from '../icons/IconCardWtp'
import { PhWhatsappLogoFill } from '../icons/PhWhatsappLogoFill'
import {
  CardGridBg,
  CardGridH1,
  CardButtonAnchor,
  CardButtonFlex,
  CardButtonProperty,
  CardButtonText,
  CardGridIconDiv,
  CardGridDiv,
  CardGridUl,
  CardGridLi,
  CardListDiv,
  CardListH1,
  CardGrid,
} from './CardComponents'

export function CardsCollection2() {
  const features = [
    {
      iconCard: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          viewBox="0 0 256 256"
          className="h-16 w-16 fill-gray-500"
        >
          <path d="M88,96a8,8,0,0,1,8-8h64a8,8,0,0,1,0,16H96A8,8,0,0,1,88,96Zm8,40h64a8,8,0,0,0,0-16H96a8,8,0,0,0,0,16Zm32,16H96a8,8,0,0,0,0,16h32a8,8,0,0,0,0-16ZM224,48V156.69A15.86,15.86,0,0,1,219.31,168L168,219.31A15.86,15.86,0,0,1,156.69,224H48a16,16,0,0,1-16-16V48A16,16,0,0,1,48,32H208A16,16,0,0,1,224,48ZM48,208H152V160a8,8,0,0,1,8-8h48V48H48Zm120-40v28.7L196.69,168Z"></path>
        </svg>
      ),
      title: 'PLANEJAMENTO PREVIDENCIÁRIO',
      subtitle1:
        'Aposentadoria EspecialO planejamento previdenciário é um estudo que tem como objetivo encontrar o melhor benefício para o trabalhador que contribui junto à previdência social. Ele serve para fazer com que o segurado entenda melhor a legislação previdenciária e, principalmente, a própria situação perante o INSS. O ideal é que o segurado faça o planejamento previdenciário em momento anterior ao pedido de aposentadoria, isto, pois, com as simulações finalizadas é possível especificar se aquele é o momento mais propício ao pedido ou se o benefício almejado é o de melhor aplicação para o trabalhador.',
    },
    {
      iconCard: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          viewBox="0 0 256 256"
          className="h-16 w-16 fill-gray-500"
        >
          <path d="M229.66,58.34l-32-32a8,8,0,0,0-11.32,0l-96,96A8,8,0,0,0,88,128v32a8,8,0,0,0,8,8h32a8,8,0,0,0,5.66-2.34l96-96A8,8,0,0,0,229.66,58.34ZM124.69,152H104V131.31l64-64L188.69,88ZM200,76.69,179.31,56,192,43.31,212.69,64ZM224,128v80a16,16,0,0,1-16,16H48a16,16,0,0,1-16-16V48A16,16,0,0,1,48,32h80a8,8,0,0,1,0,16H48V208H208V128a8,8,0,0,1,16,0Z"></path>
        </svg>
      ),
      title: 'REVISÃO DA VIDA TODA',
      subtitle2:
        'Trata-se de pedido de revisão de benefício previdenciário que visa considerar, na análise de concessão da aposentadoria, todo o período contributivo do segurado junto ao INSS, inclusive aqueles realizados antes do ano de 1994 e que, geralmente, são desconsiderados durante a análise dos pedidos administrativos. Antes de solicitar este tipo de revisão é preciso analisar a situação do aposentado e verificar, pelo uso de simuladores, a aplicabilidade da tese de revisão da vida toda no benefício do interessado.',
    },
  ]

  return (
    <CardGrid>
      {features.map((item, idx) => (
        <CardGridBg key={idx}>
          <CardGridIconDiv>
            <IconCardProperty>{item.iconCard}</IconCardProperty>
          </CardGridIconDiv>
          <CardGridH1>{item.title}</CardGridH1>
          <CardGridDiv>
            <CardGridUl>
              <CardGridLi>
                <CardListDiv>
                  <CardListH1>{item.subtitle1}</CardListH1>
                </CardListDiv>
              </CardGridLi>
              <CardGridLi>
                <CardListDiv>
                  <CardListH1>{item.subtitle2}</CardListH1>
                </CardListDiv>
              </CardGridLi>
            </CardGridUl>
          </CardGridDiv>
          <CardButtonProperty>
            <CardButtonAnchor href="https://api.whatsapp.com/send?phone=5531990813600&text=Ol%C3%A1,%20Dra.%20Gabriela!%20Vim%20do%20Google.%20Podemos%20conversar?">
              <CardButtonFlex>
                <IconCardWtp icon={PhWhatsappLogoFill} />
                <CardButtonText>Saiba mais</CardButtonText>
              </CardButtonFlex>
            </CardButtonAnchor>
          </CardButtonProperty>
        </CardGridBg>
      ))}
    </CardGrid>
  )
}
