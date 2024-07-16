import React from 'react'
import {ThemeToggle} from "./theme_toggle"

const footer = () => {
  return (
    <div className="pt-6 w-full text-xs  border-t border-neutral-200 dark:border-neutral-800  flex items-center justify-between ">
    <div className="text-neutral-500 ">
      Built by mehedi Hasan Rony | c2024 makdev. All Right Reserved
    </div>
    <ThemeToggle />
  </div>
  )
}

export default footer