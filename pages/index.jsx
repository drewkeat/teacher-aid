import { Container, Grid, Typography } from "@mui/material"
import Link from "next/link"

export default function Home(){
  return(
    <Container component="main">
      <Grid container alignContent="center" justifyContent="center" flexDirection={'column'}>
        <Grid item component={Typography} variant="h2" align="center">Teacher <b>AI</b>d</Grid>
        <Grid item component={Typography} variant='h4' align="center"><Link href="/auth">Login</Link></Grid>
      </Grid>
    </Container>
  )
}