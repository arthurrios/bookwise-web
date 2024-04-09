import googleLogo from '@/app/assets/google-logo.svg'
import githubLogo from '@/app/assets/github-logo.svg'
import rocketSvg from '@/app/assets/rocket.svg'

import { LoginButton } from './components/login-button'

export default function Login() {
  return (
    <div className="relative">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col space-y-10 place-content-center w-loginBox">
        <div className="flex flex-col w-full items-start">
          <h1 className="text-2xl leading-short font-bold">Welcome!</h1>
          <p className="text-gray-200 leading-base">
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
