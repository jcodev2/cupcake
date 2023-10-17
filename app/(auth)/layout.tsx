const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className='flex h-screen items-center justify-center'>
      {children}
    </main>
  )
}

export default AuthLayout
