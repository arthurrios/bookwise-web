import googleLogo from '@/app/assets/google-logo.svg'
import githubLogo from '@/app/assets/github-logo.svg'
import rocketSvg from '@/app/assets/rocket.svg'

import { LoginButton } from './components/login-button'

export default function Login() {
  return (
    <div className="relative">
      <div className="absolute left-1/2 top-1/2 flex w-loginBox -translate-x-1/2 -translate-y-1/2 flex-col place-content-center space-y-10">
        <div className="flex w-full flex-col items-start">
          <h1 className="text-2xl font-bold leading-short">Welcome!</h1>
          <p className="leading-base text-gray-200">
            Login or access as a visitor.
          </p>
        </div>
        <div className="flex flex-col gap-4">
          <LoginButton title="Login with Google" imgSrc={googleLogo} />
          <LoginButton title="Login with GitHub" imgSrc={githubLogo} />
          <LoginButton title="Login as a visitor" imgSrc={rocketSvg} />
        </div>
      </div>
    </div>
  )
}
