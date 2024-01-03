'use client';

import Image from 'next/image'

import FileBrowser from '@/components/FileBrowser';
import json from './json';



export default function Home() {
  return (
    <main className="">

      <div className="flex flex-col align-middle
                      md:flex-row justify-center items-center">
        
        <Image
          src="/imatge_portada.webp"
          alt="Persona escalant"
          width="426"
          height="568"
        />

        <div className='mt-10 mb-20 md:ml-20'>
          <FileBrowser json={json} />
        </div>

      </div>

    </main>
  )
}
