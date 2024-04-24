import { LoginMenu } from './components/login-menu'

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
        <LoginMenu />
      </div>
    </div>
  )
}
