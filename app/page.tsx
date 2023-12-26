
import NavBar from '../components/navbar/NavBar'
import Image from 'next/image'

export default function HomePage() {
  return (
    <>
    <NavBar />
    <main className="flex flex-col items-center p-24">
      <span className='text-5xl'>Hola Mundo</span>
    </main>
    </>
  )
}
