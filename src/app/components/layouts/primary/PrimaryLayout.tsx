import Head from 'next/head'
import CatCard from '../../cards/cat/CatCard'
import Footer from '../../navigation/footer/Footer'
import Header from '../../navigation/header/Header'

export interface IPrimaryLayout extends React.ComponentPropsWithoutRef<'div'> {
  justify?: 'items-center' | 'items-start'
}

const PrimaryLayout: React.FC<IPrimaryLayout> = ({
  children,
  justify = 'items-center',
}) => (
  <div className="flex flex-col min-h-screen">
    {' '}
    <Head>
      {' '}
      <title>Next.js + TypeScript + Tailwind CSS</title>{' '}
      <link rel="icon" href="/favicon.ico" />{' '}
    </Head>{' '}
    <Header />
    <br />
    <main className={`flex-1 ${justify}`}>
      {' '}
      <CatCard
        tag={'Cats'}
        title={'About a Cat'}
        body={'Lorem ipsum...'}
        author={'Joshua'}
        time={'4 hours ago'}
      ></CatCard>{' '}
      {children}
    </main>
    <Footer />
  </div>
)

export default PrimaryLayout
