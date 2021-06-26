import { AppProps } from 'next/app';

import { ChakraProvider } from '@chakra-ui/react'
import { theme } from '../styles/theme'

import '../styles/carousel.scss'

import 'swiper/swiper.scss';
// Import Swiper styles
import "swiper/swiper.min.css";
import "swiper/components/navigation/navigation.min.css"
import "swiper/components/pagination/pagination.min.css"


function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default App
