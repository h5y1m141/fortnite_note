import React from 'react'

import { Grid, Box, ThemeProvider } from '@material-ui/core'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import { theme } from './styles/theme'
import { NewNote } from './pages/admin/notes/NewNote'

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
              <Grid item xs={6}>
                <Link to="/">Home</Link>
              </Grid>
              <Grid item xs={6}>
                <Link to="/admin/notes/new">ノートを作成</Link>
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
                  <Route path="/admin/notes/new">
                    <NewNote />
                  </Route>
                  <Route path="/"></Route>
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
