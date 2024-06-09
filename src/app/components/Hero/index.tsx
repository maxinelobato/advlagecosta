import {
  ButtonHome,
  ButtonHomeFlex,
  ButtonHomeText,
} from '../Buttons/ButtonCta'
import { Credibility } from '../Credibility'
import { LogoLageCosta } from '../Image'
import { IconWtp } from '../icons/IconWtp'
import { LogosWhatsappIcon } from '../icons/LogosWhatsappIcon'
import {
  HeroCard,
  HeroCardH1,
  HeroCardP1,
  HeroCardP2,
  HeroCardText,
  HeroImgProperty,
  HeroProperty,
  HeroSection,
} from './HeroComponents'

export function Hero() {
  return (
    <HeroSection>
      <HeroProperty>
        <HeroCard>
          <HeroImgProperty>
            <LogoLageCosta />
          </HeroImgProperty>
          <HeroCardText>
            <HeroCardH1>Advocacia Previdenciária</HeroCardH1>
            <HeroCardP1>
              Especialista em Aposentadoria/INSS, BPC/Loas e Planejamento
              Previdenciário
            </HeroCardP1>
            <HeroCardP2>
              Tenha a ajuda de advogados especialistas para defender sua causa!
            </HeroCardP2>
          </HeroCardText>
          <ButtonHome href="https://api.whatsapp.com/send?phone=5531990813600&text=Ol%C3%A1,%20Dra.%20Gabriela!%20Vim%20do%20Google.%20Podemos%20conversar?">
            <ButtonHomeFlex>
              <IconWtp icon={LogosWhatsappIcon} />
            </ButtonHomeFlex>
            <ButtonHomeText>fale com a especialista agora</ButtonHomeText>
          </ButtonHome>
          <Credibility />
        </HeroCard>
      </HeroProperty>
    </HeroSection>
  )
}
