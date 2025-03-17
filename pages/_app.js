import { useEffect } from 'react'
import { useRouter } from 'next/router'
import Layout from '../components/Layout'
import '../styles/global.css'

function MyApp({ Component, pageProps }) {
  const router = useRouter()

  useEffect(() => {
    const handleRouteChange = url => {
      if (window.gtag) {
        window.gtag('config', 'GA_MEASUREMENT_ID', { page_path: url })
      }
    }
    router.events.on('routeChangeComplete', handleRouteChange)
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange)
    }
  }, [router.events])

  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
