import React from 'react'
import { resourcesLinks } from '../constants'
import { communityLinks } from '../constants'

import { platformLinks } from '../constants'

function Footer() {
  return (
    <footer className="mt-20 border-t py-10 border-neutral-700">
    <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
      <div>
        <h3 className="text-md font-semibold mb-4 light:text-dark dark:text-white text-inherit underline">Resources</h3>
        <ul className="space-y-2">
          {resourcesLinks.map((link, index) => (
            <li key={index}>
              <a
                href={link.href}
                className="light:text-black dark:text-white"
              >
                {link.text}
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div>
          <h3 className="text-md font-semibold mb-4 light:text-dark dark:text-white underline">Platform</h3>
          <ul className="space-y-2 ">
            {platformLinks.map((link, index) => (
              <li key={index}>
                <a
                  href={link.href}
                  className=" light:text-black dark:text-white"
                >
                  {link.text}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="text-md font-semibold mb-4 light:text-dark dark:text-white underline">Community</h3>
          <ul className="space-y-2">
            {communityLinks.map((link, index) => (
              <li key={index}>
                <a
                  href={link.href}
                  className="light:text-black dark:text-white"
                >
                  {link.text}
                </a>
              </li>
            ))}
          </ul>
        </div>



      </div>
      </footer>
  )
}

export default Footer