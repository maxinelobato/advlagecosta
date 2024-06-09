import {
  FooterAllRights,
  FooterAllRightsParagraph,
  FooterAllRightsParagraphEnd,
  FooterBg,
  FooterButtonAnchor,
  FooterButtonFlex,
  FooterButtonProperty,
  FooterButtonText,
  FooterFlex,
  FooterFlexJustifyCenter,
  FooterImgProperty,
  FooterLabelContact,
  FooterLi,
  FooterParagraphLivia,
  FooterParagraphLiviaOab,
  FooterProperty,
  FooterSpace,
  FooterUl,
} from './FooterComponents'
import { LogosWhatsappIcon } from '../icons/LogosWhatsappIcon'
import { IconWtpFooter } from '../icons/IconWtpFooter'
import { MaterialSymbolsAlternateEmail } from '../icons/MaterialSymbolsAlternateEmail'
import { LogoLageCosta } from '../Image'

export function Footer() {
  return (
    <>
      <FooterBg>
        <FooterProperty>
          <FooterImgProperty>
            <LogoLageCosta />
          </FooterImgProperty>
          <FooterParagraphLivia>Dra. Gabriela Lage</FooterParagraphLivia>
          <FooterParagraphLiviaOab>OAB/MG 137.657</FooterParagraphLiviaOab>
        </FooterProperty>
        <FooterFlexJustifyCenter>
          <FooterSpace>
            <FooterUl>
              <FooterLi>
                <FooterFlex>
                  <FooterButtonProperty>
                    <FooterButtonAnchor href="https://api.whatsapp.com/send?phone=5531990813600&text=Ol%C3%A1,%20Dra.%20Gabriela!%20Vim%20do%20Google.%20Podemos%20conversar?">
                      <FooterButtonFlex>
                        <IconWtpFooter icon={LogosWhatsappIcon} />
                        <FooterButtonText>
                          <FooterLabelContact>Whatsapp:</FooterLabelContact>
                          (31) 99081-3600
                        </FooterButtonText>
                      </FooterButtonFlex>
                    </FooterButtonAnchor>
                  </FooterButtonProperty>
                </FooterFlex>
              </FooterLi>
              <FooterLi>
                <FooterFlex>
                  <FooterButtonProperty>
                    <FooterButtonAnchor href="mailto:gabriela@lagecosta.adv.br">
                      <FooterButtonFlex>
                        <IconWtpFooter icon={MaterialSymbolsAlternateEmail} />
                        <FooterButtonText>
                          <FooterLabelContact>Email:</FooterLabelContact>
                          gabriela@lagecosta.adv.br
                        </FooterButtonText>
                      </FooterButtonFlex>
                    </FooterButtonAnchor>
                  </FooterButtonProperty>
                </FooterFlex>
              </FooterLi>
            </FooterUl>
          </FooterSpace>
        </FooterFlexJustifyCenter>
        <FooterAllRights>
          <FooterAllRightsParagraph>
            Este site não faz parte do Google nem do Facebook ou do Facebook
            Inc. Além disso, não oferecemos nenhum tipo de serviço oficial do
            governo, NÃO praticamos fraude, não somos uma empresa que vende
            criptoativos ou qualquer outro serviço.
          </FooterAllRightsParagraph>
          <FooterAllRightsParagraph>
            Essa empresa trabalha exclusivamente com serviços jurídicos.
          </FooterAllRightsParagraph>
          <FooterAllRightsParagraphEnd>
            Lage Costa Advocacia &copy; 2024. Todos os direitos reservados.
          </FooterAllRightsParagraphEnd>
        </FooterAllRights>
      </FooterBg>
    </>
  )
}
