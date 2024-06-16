import React from 'react'
import { ColorModeScript } from '@chakra-ui/react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {ChakraProvider, extendTheme}  from '@chakra-ui/react'
import { mode } from "@chakra-ui/theme-tools";
import { color } from 'framer-motion'
import {BrowserRouter} from "react-router-dom"

const styles = {
  global:(props)=>({
    body:{
      color:mode("gray.800","whiteAlpha.900")(props),
      bg : mode("gray.100","101010")(props),
    }
  })
}
const config ={
  initialColorMode:"dark",
  useSystemColorMode:true,
}

const colors ={
  gray:{
    light:"#616161",
    dark:"#1e1e1e",
  }
}

const theme = extendTheme({styles,config,colors});


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <ChakraProvider theme={theme}>
  <ColorModeScript initialColorMode={theme.config.initialColorMode} />
  <BrowserRouter>
    <App />
    </BrowserRouter>
    </ChakraProvider>
  </React.StrictMode>,
)
