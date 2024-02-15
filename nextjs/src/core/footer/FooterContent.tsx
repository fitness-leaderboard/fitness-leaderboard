// ** MUI Imports
import Box from '@mui/material/Box'
import Link from '@mui/material/Link'
import { Theme } from '@mui/material/styles'
import Typography from '@mui/material/Typography'
import useMediaQuery from '@mui/material/useMediaQuery'

const FooterContent = () => {
  // ** Var
  const hidden = useMediaQuery((theme: Theme) => theme.breakpoints.down('md'))

  return (
    <Box
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}
    >
      <Typography sx={{ mr: 2 }}>
        {`© ${new Date().getFullYear()}, Made by Northeastern Students`}
      </Typography>
      {hidden ? null : (
        <Box
          sx={{
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            '& :not(:last-child)': { mr: 4 },
          }}
        >
          <Link
            target='_blank'
            href='https://github.com/fitness-leaderboard/fitness-leaderboard'
          >
            Documentation
          </Link>
          <Link
            target='_blank'
            href='https://github.com/fitness-leaderboard/fitness-leaderboard'
          >
            Support
          </Link>
        </Box>
      )}
    </Box>
  )
}

export default FooterContent
