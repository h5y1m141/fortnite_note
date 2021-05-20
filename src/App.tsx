import React from 'react'

import { Grid, Box, ThemeProvider } from '@material-ui/core'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { theme } from './styles/theme'
import { NewNote } from './pages/admin/notes/NewNote'
import { SignIn } from './pages/admin/SignIn'
import { UserProvider } from './components/UserStateContext'
import { ApplicationLayout } from './components/ApplicationLayout'

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
              <Grid item xs={12}>
                <Switch>
                  <Route path="/admin/notes/new">
                    <UserProvider>
                      <ApplicationLayout>
                        <NewNote />
                      </ApplicationLayout>
                    </UserProvider>
                  </Route>
                  <Route path="/sign_in">
                    <SignIn />
                  </Route>
                  <Route path="/">
                    <h3>home</h3>
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
