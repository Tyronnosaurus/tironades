import React from 'react'


const Footer = () => {

  return (
    <footer className="text-center w-full h-14 mt-10
                       bg-white border-t border-slate-300">
      &copy; {(new Date().getFullYear())} Joan Josep Tiron; Dissenyat per Eduard Tiron
    </footer>
  )

}

export default Footer