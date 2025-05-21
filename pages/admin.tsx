import dynamic from 'next/dynamic'
import { useEffect } from 'react'

const CMS = dynamic(
  () =>
    import('decap-cms-app').then((cms) => {
      cms.init()
      return () => null
    }),
  { ssr: false }
)

const Admin = () => {
  useEffect(() => {
    // Load the Decap CMS configuration
    if (window) {
      window.CMS_MANUAL_INIT = true
    }
  }, [])

  return <CMS />
}

export default Admin 