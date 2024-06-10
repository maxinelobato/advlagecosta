import Image from 'next/image'
import {
  SocialProveBlockMapIdx,
  SocialProveClientNameParagraph,
  SocialProveClientProveParagraph,
  SocialProveColumnFillBalance,
  SocialProveDiv,
  SocialProveDivWhatTime,
  SocialProveFlexItens,
  SocialProveH1,
  SocialProveParagraph,
  SocialProveSection,
  SocialProveSpace,
  SocialProveSpan,
} from './SocialProveComponents'
import { TablerStarFilled } from '../icons/TablerStarFilled'
import { IconStarSocialProve } from '../icons/IconStarSocialProve'

export function SocialProve() {
  const features = [
    {
      imgURL:
        'https://lh3.googleusercontent.com/a-/ALV-UjVgVVpGXCkeYSXTb6xmp7dP5I4YWUo6DZqZL_tsb96Na8MTcjJ8Tg=s120-c-rp-mo-ba3-br100',
      clientName: 'Rhita de Cassia',
      clientProve:
        'Atendimento impecável e por Excelência! Obtive êxito! Equipe maravilhosa e muito competente! Parabéns drª Gabriela Lage!',
    },
    {
      imgURL:
        'https://lh3.googleusercontent.com/a-/ALV-UjWCaEkD5Y30NSPYZ9e4rPnrSfV5e5VwaPQH6qAEkW6pA65lf0O4=s120-c-rp-mo-br100',
      clientName: 'Velma Siqueira',
      clientProve:
        'Fiquei muito satisfeita com a atenção e competência e profissionalismo da Dra Gabriela Lage. Ela fez os estudos e me mostrou todos as possibilidades para minha aposentadoria junto ao INSS. Super recomendo seus serviços.',
    },
    {
      imgURL:
        'https://lh3.googleusercontent.com/a/ACg8ocJAAqnjO9C_Z2Q5tBv04iCuLbyo-ou20HFP3LUDUOVaCTi0ZQ=s120-c-rp-mo-br100',
      clientName: 'Antonio Marcos Nascimento',
      clientProve:
        'Foi a primeira profissional que resolveu meu problema junto a um orgão federal.Muito obrigada Dr.Gabriela.',
    },
    {
      imgURL:
        'https://lh3.googleusercontent.com/a-/ALV-UjUfEN7H74MkeEPoGScKQKZuqydCe4kPDlSKB-WlnhhUgNP_FwArdQ=s120-c-rp-mo-ba4-br100',
      clientName: 'Robson Carfix',
      clientProve:
        'Honesttidade e transparência resumem as trativas com esse conceituado Escritório de Advocacia. Parabéns Dra. Gabriela e seu time. Super indico.',
    },
    {
      imgURL:
        'https://lh3.googleusercontent.com/a/ACg8ocKy22bSKQEqUge32THllKR34wz6tH9GMJTzpd3S-7hGOmnROQ=w45-h45-p-rp-mo-br100',
      clientName: 'Anderson Da silva',
      clientProve: 'Muito bem atendido com total transparência e honestidade',
    },
    {
      imgURL:
        'https://lh3.googleusercontent.com/a-/ALV-UjV6IetLDm_NHoQx-ezMnfMrSiBYAig__tkon-ebXUwhp8kOLhXBQg=s120-c-rp-mo-ba3-br100',
      clientName: 'Rodolfo Lopes',
      clientProve:
        'A primeira profissional que resolveu o meu caso em menos de 30 dias, com causa ganha. Parabéns pelo belíssimo trabalho, esforço e dedicação.',
    },
    {
      imgURL:
        'https://lh3.googleusercontent.com/a-/ALV-UjX64voga5-Z6NT-vY6Wmnk_o-m5jfIgUvi1hiXL8mGByfbW4dnd=s120-c-rp-mo-br100',
      clientName: 'Bernardo Riani',
      clientProve:
        'Atendimento excepcional! Dra. Gabriela é super capacitada e atenciosa. Recomendo de olhos fechados.',
    },
    {
      imgURL:
        'https://lh3.googleusercontent.com/a-/ALV-UjXiQk9iWn7qRbAZLXkth6AImi8k1TcFmrROxfhJ4kbc2CnglZr8ww=w45-h45-p-rp-mo-br100',
      clientName: 'Sergio Faleiro',
      clientProve:
        'Muito satisfeito com o serviço solicitado. Dra. Lívia Oliveira foi muito prestativa e eficiente. Meus objetivos foram alcançados com a segurança que precisava. Obrigado',
    },
  ]
  return (
    <>
      <SocialProveSection>
        <SocialProveSpace>
          <SocialProveH1>
            Leia as avaliações confiáveis{' '}
            <SocialProveSpan>dos nossos clientes</SocialProveSpan>
          </SocialProveH1>
          <SocialProveParagraph>
            Ao longo dos anos a Dra. Gabriela e o seu time da Lage Costa
            Advocacia só vem colecionando gratidão por seu profissionalismo
          </SocialProveParagraph>
        </SocialProveSpace>
        <SocialProveColumnFillBalance>
          {features.map((item, idx) => (
            <SocialProveBlockMapIdx key={idx}>
              <SocialProveFlexItens>
                <Image
                  alt="Clients"
                  width={45}
                  height={45}
                  src={item.imgURL}
                  loading="lazy"
                  className="size-14 rounded-full object-cover"
                />
                <SocialProveDiv>
                  <SocialProveDivWhatTime>
                    <IconStarSocialProve icon={TablerStarFilled} />
                    <IconStarSocialProve icon={TablerStarFilled} />
                    <IconStarSocialProve icon={TablerStarFilled} />
                    <IconStarSocialProve icon={TablerStarFilled} />
                    <IconStarSocialProve icon={TablerStarFilled} />
                  </SocialProveDivWhatTime>
                  <SocialProveClientNameParagraph>
                    {item.clientName}
                  </SocialProveClientNameParagraph>
                </SocialProveDiv>
              </SocialProveFlexItens>
              <SocialProveClientProveParagraph>
                {item.clientProve}
              </SocialProveClientProveParagraph>
            </SocialProveBlockMapIdx>
          ))}
        </SocialProveColumnFillBalance>
      </SocialProveSection>
    </>
  )
}
