import React from 'react'
import {FaSpinner} from 'react-icons/fa'

import './index.scss'

const baseClass = 'sw-uiSpinner'

export default function Spinner(props) {
  return <FaSpinner className={baseClass} {...props} />
}
