import React from 'react'

function Footer() {
    return <>
        <div className="mt-12 text-center text-sm text-gray-500 py-4 border-t border-gray-300">
            <p>© {new Date().getFullYear()} Employee Directory. Built with ❤️ using React & Tailwind CSS.</p>
        </div>
    </>
}

export default Footer