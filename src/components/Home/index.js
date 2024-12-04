// Write your code here
import {Component} from 'react'
import {Link} from 'react-router-dom'
import Loader from 'react-loader-spinner'
import TeamCard from '../TeamCard'
import './index.css'

class Home extends Component {
  state = {teams: [], isLoading: true}

  componentDidMount() {
    this.getTeams()
  }

  getTeams = async () => {
    const response = await fetch('https://apis.ccbp.in/ipl')
    const data = await response.json()
    const formattedData = data.teams.map(team => ({
      id: team.id,
      name: team.name,
      teamImageUrl: team.team_image_url,
    }))
    this.setState({teams: formattedData, isLoading: false})
  }

  renderTeamsList = () => {
    const {teams} = this.state

    return (
      <ul className="teams-list">
        {teams.map(team => (
          <li key={team.id}>
            <Link to={`/team-matches/${team.id}`} className="team-card-link">
              <TeamCard teamDetails={team} />
            </Link>
          </li>
        ))}
      </ul>
    )
  }

  render() {
    const {isLoading} = this.state

    return (
      <div className="home-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png"
          alt="ipl logo"
          className="ipl-logo"
        />
        <h1 className="main-heading">IPL Dashboard</h1>
        {isLoading ? (
          <div className="loader">
            <Loader type="Oval" color="#ffffff" height={50} width={50} />
          </div>
        ) : (
          this.renderTeamsList()
        )}
      </div>
    )
  }
}

export default Home
