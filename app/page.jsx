import Image from 'next/image'

export default function Home() {
  return (
    <>
      <h1>Hello world</h1>

      <Image
        src='/images/TecNM.jpg'
        alt='Tecnologico nacional de mexico'
        width={300}
        height={400}
      />
    </>
  )
}
