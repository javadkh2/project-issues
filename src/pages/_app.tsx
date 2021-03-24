import 'normalize.css'
import '@fontsource/roboto/index.css'

type Props = {
  Component: React.ComponentType<any>
  pageProps: any
}

export default function MyApp({ Component, pageProps }: Props): JSX.Element {
  return <Component {...pageProps} />
}
