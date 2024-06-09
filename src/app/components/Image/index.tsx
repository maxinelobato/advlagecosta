import Image from 'next/image'
import logoLageCosta from '../../../../public/img/logolagecosta.png'
import imgLageCosta from '../../../../public/img/imgabout.webp'

export function LogoLageCosta() {
  return (
    <>
      <Image
        src={logoLageCosta}
        width={235}
        height={60}
        quality={100}
        priority
        alt="Logo Lage Costa"
        style={{
          maxWidth: '100%',
          height: 'auto',
        }}
      />
    </>
  )
}

export function ImgGabi() {
  return (
    <>
      <Image
        alt="Imagem"
        src={imgLageCosta}
        className="h-auto w-full rounded-xl object-cover shadow-lg md:h-auto lg:h-full lg:rounded-none lg:shadow-none"
        loading="lazy"
        sizes='"(max-width: 768px) 100vw,
        (max-width: 1200px) 50vw,
        33vw"'
      />
    </>
  )
}
