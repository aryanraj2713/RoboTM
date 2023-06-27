import React from 'react'

function Navbar() {
  return (
    <div>
    <nav className="relative flex w-full flex-wrap items-center justify-between bg-neutral-100 py-2 text-neutral-500 shadow-lg hover:text-neutral-700 focus:text-neutral-700 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 lg:py-4">
        <div className="flex w-full flex-wrap items-center justify-between px-3">
            <div>
            <a className="text-xl text-neutral-800 dark:text-neutral-200" href="#"
                >RoboTM</a
            >
            </div>
        </div>
        </nav>
    </div>
  )
}

export default Navbar;