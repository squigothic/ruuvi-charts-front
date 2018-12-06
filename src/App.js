import React from 'react'
import measurementService from './services/measurements'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      measurements: []
    }
  }

  componentDidMount() {
    measurementService
      .getAll()
      .then(response => {
        this.setState({ measurements: response.data })
        return response.data
      })
      .then(data => {
        console.log(data)
      })
  }

  render() {
    return (
      <div>
        <h1>Ruuvifrontend</h1>
      </div >
    )
  }
}


export default App