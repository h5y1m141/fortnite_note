import React from 'react'

import { Grid, Box, ThemeProvider } from '@material-ui/core'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { theme } from './styles/theme'
import { NewNote } from './pages/admin/notes/NewNote'
import { NewSensitivitySetting } from './pages/admin/sensitivity_settings/NewSensitivitySetting'
import { NoteList } from './pages/admin/notes/index'
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
                  <UserProvider>
                    <ApplicationLayout>
                      <Route path="/admin/notes/new">
                        <NewNote />
                      </Route>
                      <Route path="/admin/notes/list">
                        <NoteList />
                      </Route>
                      <Route path="/admin/sensitivity_setting_notes/new">
                        <NewSensitivitySetting />
                      </Route>
                    </ApplicationLayout>
                  </UserProvider>
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
