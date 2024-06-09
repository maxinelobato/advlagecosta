import {
  CardBenefitsGridBg,
  CardBenefitsGrid,
  CardBenefitsGridH1,
  CardBenefitsButtonAnchor,
  CardBenefitsButtonFlex,
  CardBenefitsButtonProperty,
  CardBenefitsButtonText,
  CardBenefitsGridIconDiv,
  CardBenefitsGridSubtitle,
} from './CardBenefitsComponents'
import { LogosWhatsappIcon } from '../icons/LogosWhatsappIcon'
import { IconCardProperty } from '../icons/IconCard'
import { IconCardWtp } from '../icons/IconCardWtp'

export function CardBenefitsCollection() {
  const features = [
    {
      iconCardBenefits: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          viewBox="0 0 256 256"
          className="h-16 w-16 fill-gray-500"
        >
          <path d="M224,128v80a16,16,0,0,1-16,16H48a16,16,0,0,1-16-16V48A16,16,0,0,1,48,32h80a8,8,0,0,1,0,16H48V208H208V128a8,8,0,0,1,16,0Zm5.66-58.34-96,96A8,8,0,0,1,128,168H96a8,8,0,0,1-8-8V128a8,8,0,0,1,2.34-5.66l96-96a8,8,0,0,1,11.32,0l32,32A8,8,0,0,1,229.66,69.66Zm-17-5.66L192,43.31,179.31,56,200,76.69Z"></path>
        </svg>
      ),
      title: 'AVALIAÇÃO DETALHADA DO SEU HISTÓRICO DE CONTRIBUIÇÕES',
      subtitle:
        'Realizaremos uma minuciosa análise de todo o seu histórico de contribuições, visando obter o benefício mais vantajoso para o seu caso, levando em consideração períodos não contabilizados e outras inconsistências no registro do INSS.',
    },
    {
      iconCardBenefits: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          viewBox="0 0 256 256"
          className="h-16 w-16 fill-gray-500"
        >
          <path d="M254.3,107.91,228.78,56.85a16,16,0,0,0-21.47-7.15L182.44,62.13,130.05,48.27a8.14,8.14,0,0,0-4.1,0L73.56,62.13,48.69,49.7a16,16,0,0,0-21.47,7.15L1.7,107.9a16,16,0,0,0,7.15,21.47l27,13.51,55.49,39.63a8.06,8.06,0,0,0,2.71,1.25l64,16a8,8,0,0,0,7.6-2.1l55.07-55.08,26.42-13.21a16,16,0,0,0,7.15-21.46Zm-54.89,33.37L165,113.72a8,8,0,0,0-10.68.61C136.51,132.27,116.66,130,104,122L147.24,80h31.81l27.21,54.41ZM41.53,64,62,74.22,36.43,125.27,16,115.06Zm116,119.13L99.42,168.61l-49.2-35.14,28-56L128,64.28l9.8,2.59-45,43.68-.08.09a16,16,0,0,0,2.72,24.81c20.56,13.13,45.37,11,64.91-5L188,152.66Zm62-57.87-25.52-51L214.47,64,240,115.06Zm-87.75,92.67a8,8,0,0,1-7.75,6.06,8.13,8.13,0,0,1-1.95-.24L80.41,213.33a7.89,7.89,0,0,1-2.71-1.25L51.35,193.26a8,8,0,0,1,9.3-13l25.11,17.94L126,208.24A8,8,0,0,1,131.82,217.94Z"></path>
        </svg>
      ),
      title: 'EXPLICAÇÃO DETALHADA DO SEU CENÁRIO',
      subtitle:
        'Valorizamos a compreensão abrangente do processo por parte do cliente, assegurando que ele entre em seu benefício sem quaisquer hesitações. Esse processo é conduzido com paciência e dedicação.',
    },
    {
      iconCardBenefits: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          viewBox="0 0 256 256"
          className="h-16 w-16 fill-gray-500"
        >
          <path d="M52.69,99.31a16,16,0,0,1,0-22.63l64-64a16,16,0,0,1,22.63,22.63l-64,64a16,16,0,0,1-22.63,0Zm190.63,17.37a16,16,0,0,0-22.63,0l-64,64a16,16,0,0,0,0,22.63h0a16,16,0,0,0,22.63,0l64-64A16,16,0,0,0,243.32,116.68Zm-35.11-15.8L155.12,47.79a4,4,0,0,0-5.66,0L87.8,109.45a4,4,0,0,0,0,5.66L103,130.34,28.69,204.69a16,16,0,0,0,22.62,22.62L125.66,153l15.23,15.23a4,4,0,0,0,5.66,0l61.66-61.66A4,4,0,0,0,208.21,100.88Z"></path>
        </svg>
      ),
      title: 'ATUAÇÃO ESTRATÉGICA NO ÂMBITO DO INSS E DO JUDICIÁRIO',
      subtitle:
        'Com nossa vasta experiência em processos relacionados aos benefícios do INSS, oferecemos aos nossos clientes as melhores estratégias para garantir a obtenção rápida de seus benefícios.',
    },
  ]

  return (
    <CardBenefitsGrid>
      {features.map((item, idx) => (
        <CardBenefitsGridBg key={idx}>
          <CardBenefitsGridIconDiv>
            <IconCardProperty>{item.iconCardBenefits}</IconCardProperty>
          </CardBenefitsGridIconDiv>
          <CardBenefitsGridH1>{item.title}</CardBenefitsGridH1>
          <CardBenefitsGridSubtitle>{item.subtitle}</CardBenefitsGridSubtitle>
          <CardBenefitsButtonProperty>
            <CardBenefitsButtonAnchor href="https://api.whatsapp.com/send?phone=5531990813600&text=Ol%C3%A1,%20Dra.%20Gabriela!%20Vim%20do%20Google.%20Podemos%20conversar?">
              <CardBenefitsButtonFlex>
                <CardBenefitsButtonText>Saiba mais</CardBenefitsButtonText>
                <IconCardWtp icon={LogosWhatsappIcon} />
              </CardBenefitsButtonFlex>
            </CardBenefitsButtonAnchor>
          </CardBenefitsButtonProperty>
        </CardBenefitsGridBg>
      ))}
    </CardBenefitsGrid>
  )
}
