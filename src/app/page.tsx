'use client';

import Image from 'next/image'

import FileBrowser from '@/components/FileBrowser';
import json from './json';



export default function Home() {
  return (
    <main className="">

      <div className="flex justify-center
                      flex-col lg:flex-row
                      items-center lg:items-start">
        
        <Image
          src="/imatge_portada.webp"
          alt="Persona escalant"
          width="426"
          height="568"
        />

        <div className='mt-10 lg:mt-0 lg:ml-20 mb-20'>
          <FileBrowser json={json} />
        </div>

      </div>

    </main>
  )
}
