// Write your code here
import {Component} from 'react'
import Loader from 'react-loader-spinner'
import LatestMatch from '../LatestMatch'
import MatchCard from '../MatchCard'
import './index.css'

class TeamMatches extends Component {
  state = {teamMatchesData: {}, isLoading: true}

  componentDidMount() {
    this.getTeamMatches()
  }

  getTeamMatches = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    const response = await fetch(`https://apis.ccbp.in/ipl/${id}`)
    const data = await response.json()
    const formattedData = {
      teamBannerUrl: data.team_banner_url,
      latestMatchDetails: {
        umpires: data.latest_match_details.umpires,
        result: data.latest_match_details.result,
        manOfTheMatch: data.latest_match_details.man_of_the_match,
        id: data.latest_match_details.id,
        date: data.latest_match_details.date,
        venue: data.latest_match_details.venue,
        competingTeam: data.latest_match_details.competing_team,
        competingTeamLogo: data.latest_match_details.competing_team_logo,
        firstInnings: data.latest_match_details.first_innings,
        secondInnings: data.latest_match_details.second_innings,
        matchStatus: data.latest_match_details.match_status,
      },
      recentMatches: data.recent_matches.map(match => ({
        umpires: match.umpires,
        result: match.result,
        manOfTheMatch: match.man_of_the_match,
        id: match.id,
        date: match.date,
        venue: match.venue,
        competingTeam: match.competing_team,
        competingTeamLogo: match.competing_team_logo,
        firstInnings: match.first_innings,
        secondInnings: match.second_innings,
        matchStatus: match.match_status,
      })),
    }
    this.setState({teamMatchesData: formattedData, isLoading: false})
  }

  renderRecentMatchesList = () => {
    const {teamMatchesData} = this.state
    const {recentMatches} = teamMatchesData

    return (
      <ul className="recent-matches">
        {recentMatches.map(match => (
          <MatchCard matchDetails={match} key={match.id} />
        ))}
      </ul>
    )
  }

  render() {
    const {isLoading, teamMatchesData} = this.state
    const {teamBannerUrl, latestMatchDetails} = teamMatchesData

    return (
      <div className="team-matches-container">
        {isLoading ? (
          <div className="loader">
            <Loader type="Oval" color="#ffffff" height={50} width={50} />
          </div>
        ) : (
          <div className="team-matches">
            <img
              src={teamBannerUrl}
              alt="team banner"
              className="team-banner"
            />
            <LatestMatch latestMatchDetails={latestMatchDetails} />
            {this.renderRecentMatchesList()}
          </div>
        )}
      </div>
    )
  }
}

export default TeamMatches
