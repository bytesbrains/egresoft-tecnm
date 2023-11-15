import Image from 'next/image'
import Button from '@mui/material/Button'
import Link from 'next/link'

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
      <Button>
        <Link href='/login'>Sign In</Link>
      </Button>
    </>
  )
}
