import React from 'react'

import { Grid, Box, ThemeProvider } from '@material-ui/core'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import { theme } from './styles/theme'
import { NewNote } from './pages/admin/notes/NewNote'
import { SignIn } from './pages/admin/SignIn'
import { UserProvider } from './components/UserStateContext'
import { ApplicationLayout } from './components/ApplicationLayout'

const App: React.VFC = () => {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <UserProvider>
          <Box p={1}>
            <Router>
              <ApplicationLayout>
                <Grid
                  container
                  direction="row"
                  justify="flex-start"
                  alignItems="flex-start"
                >
                  <Grid item xs={12}>
                    <Switch>
                      <Route path="/admin/notes/new">
                        <NewNote />
                      </Route>
                      <Route path="/admin/sign_in">
                        <SignIn />
                      </Route>
                      <Route path="/"></Route>
                    </Switch>
                  </Grid>
                </Grid>
              </ApplicationLayout>
            </Router>
          </Box>
        </UserProvider>
      </ThemeProvider>
    </div>
  )
}

export default App
