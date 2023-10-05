import Head from 'next/head'

export interface IPrimaryLayout extends React.ComponentPropsWithoutRef<'div'> {
  justify?: 'items-center' | 'items-start'
}

const PrimaryLayout: React.FC<IPrimaryLayout> = ({ children }) => (
  <div className="flex flex-col min-h-screen">
    {' '}
    <Head>
      {' '}
      <title>Next.js + TypeScript + Tailwind CSS</title>{' '}
      <link rel="icon" href="/favicon.ico" />{' '}
    </Head>{' '}
    {children}{' '}
    {/* <Header /> <main className={`flex-1 ${justify}`}>{children}</main>{' '}
    <Footer />{' '} */}
  </div>
)

export default PrimaryLayout
