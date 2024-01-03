'use client';

import Image from 'next/image'

import FileBrowser from '@/components/FileBrowser';
import json from './json';



export default function Home() {
  return (
    <main className="">

 

      <div className="flex flex-row justify-center items-center">
        <Image
          src="/imatge_portada.webp"
          alt="Persona escalant"
          width="426"
          height="568"
        />

        <div className='ml-20'>
          <FileBrowser json={json} />
        </div>
      </div>
    </main>
  )
}
