import {
  ButtonHome,
  ButtonHomeFlex,
  ButtonHomeText,
} from '../Buttons/ButtonCta'
import { ImgGabi } from '../Image'
import { IconWtp } from '../icons/IconWtp'
import { LogosWhatsappIcon } from '../icons/LogosWhatsappIcon'
import {
  AboutArticle,
  AboutDivFlexItens,
  AboutH1,
  AboutParagraphArticleOne,
  AboutParagraphArticleTwo,
  AboutParagraphOAB,
  AboutParagraphabout,
  AboutPropertySVGImg,
  AboutSection,
  AboutTextProperty,
} from './AboutComponents'

export function About() {
  return (
    <>
      <AboutSection>
        <AboutPropertySVGImg>
          <ImgGabi />
        </AboutPropertySVGImg>
        <AboutTextProperty>
          <AboutParagraphabout>Sobre a Especialista</AboutParagraphabout>
          <AboutH1>Dra. Gabriela Lage</AboutH1>
          <AboutParagraphOAB>OAB/MG 137.657</AboutParagraphOAB>
          <AboutArticle>
            <AboutParagraphArticleOne>
              O escritório Lage Costa Advocacia e Consultoria possui sua sede na
              Alagoas 1314, sala 7, Savassi, Shopping 5 avenida, prima pela
              excelência na prestação de serviços, objetivando o melhor
              resultado para seus clientes.
            </AboutParagraphArticleOne>
            <AboutParagraphArticleTwo>
              O escritório vem construindo um legado de reputação e
              credibilidade ao longo dos anos, decorrente da intensa dedicação e
              comprometimento com as demandas de seus clientes.
            </AboutParagraphArticleTwo>
          </AboutArticle>
          <AboutDivFlexItens>
            <ButtonHome href="https://api.whatsapp.com/send?phone=5531990813600&text=Ol%C3%A1,%20Dra.%20Gabriela!%20Vim%20do%20Google.%20Podemos%20conversar?">
              <ButtonHomeFlex>
                <IconWtp icon={LogosWhatsappIcon} />
              </ButtonHomeFlex>
              <ButtonHomeText>clique e fale comigo</ButtonHomeText>
            </ButtonHome>
          </AboutDivFlexItens>
        </AboutTextProperty>
      </AboutSection>
    </>
  )
}
