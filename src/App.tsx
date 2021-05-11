import React from 'react'

import { Grid, Box, ThemeProvider } from '@material-ui/core'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import { theme } from './styles/theme'

const App: React.VFC = () => {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <Box p={1}>
          <Router>
            <Grid
              container
              direction="row"
              justify="flex-start"
              alignItems="flex-start"
            >
              <Grid item xs={3}>
                <Link to="/">Home</Link>
              </Grid>
              <Grid item xs={3}>
                <Link to="/about">About</Link>
              </Grid>
              <Grid item xs={3}>
                <Link to="/sign_in">SignIn</Link>
              </Grid>
              <Grid item xs={3}>
                <Link to="/articles">Articles</Link>
              </Grid>
            </Grid>

            <Grid
              container
              direction="row"
              justify="flex-start"
              alignItems="flex-start"
            >
              <Grid item xs={12}>
                <Switch>
                  <Route path="/">
                    <div>Home</div>
                  </Route>
                  <Route path="/about">
                    <div>About</div>
                  </Route>
                  <Route path="/sign_in">
                    <div>SignIn</div>
                  </Route>
                  <Route path="/articles">
                    <div>Articles</div>
                  </Route>
                </Switch>
              </Grid>
            </Grid>
          </Router>
        </Box>
      </ThemeProvider>
    </div>
  )
}

export default App
