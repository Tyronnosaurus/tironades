import React from 'react'

const Footer = () => {
  return (
    <div className="text-center w-full h-14
                    fixed bottom-0
                  bg-white border-t border-slate-300">
      &copy; {(new Date().getFullYear())} Joan Josep Tiron
    </div>
  )
}

export default Footer