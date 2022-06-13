import {createTheme} from '@mui/material/styles'

export const Theme = createTheme({
    palette:{
        primary:{
            main: '#80c7ff',
            light:'#99d2ff',
        },
        secondary:{
          main:'#cce8ff',
          dark:'#b3ddff'
        }
    },
  typography:{
    fontFamily:[
      'Poppins, sans-serif',
    ],
    fontSize:'1rem',
    body2:{
      fontFamily:['Poppins, sans-serif','Oswald, sans-serif'],
      fontSize:'1rem'
    }
  },
  components:{
    MuiButton:{
      styleOverrides:{
        root:{
          textTransform:'none',
        }
      }
    },
    MuiButtonBase:{
      defaultProps:{
        disableRipple: true,
      }
    },
    MuiPaper:{
      defaultProps:{
        elevation: 5,
      }
    },
    MuiCard:{
        defaultProps:{
            elevation:5,
        }
    },
    MuiInputBase:{
      styleOverrides:{
        root:{
          // color:'white',
        }
      }
    }
  }
})