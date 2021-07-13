/**
 * @ts-check
 * */

import React from 'react'
import '../../App.css'
import { validateLoginCredentials } from '@apis/AuthenticationApis'
import Button from '@common/Button'

/**
 * @returns {JSX.Element}
 * */
function LoginView() {
  const login = async () => {
    await validateLoginCredentials({ username: '', password: '' })
  }

  return (
    <div className="app-login">
      <Button onClick={login}> Submit </Button>
    </div>
  )
}

export default LoginView