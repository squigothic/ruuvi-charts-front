import React from 'react'
import measurementService from './services/measurements'
import Chart from './components/chart'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      measurements1: [],
      measurements2: [],
    }
  }

  componentDidMount() {
    measurementService
      .getAll('kaura')
      .then(response => {
        const distinctTags = this.getGroupedBy(response.data, 'tagname')
        this.setState({ measurements1: distinctTags[0], measurements2: distinctTags[1]})
      })
  }

  getGroupedBy = (data, key) => {
    let groups = {}
    let result = []
    console.log(key)
    data.forEach((a) => {
      if (!(a[key] in groups)) {
        groups[a[key]] = []
        result.push(groups[a[key]])
      }
      groups[a[key]].push(a)
    })
    return result
  }

  render() {
    return (
      <div>
        <h1>Ruuvifrontend</h1>
        <Chart measurements={ this.state.measurements1 } />
        <Chart measurements={ this.state.measurements2 } />
      </div >
    )
  }
}


export default App