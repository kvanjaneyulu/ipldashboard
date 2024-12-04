// Write your code here
import './index.css'

const LatestMatch = props => {
  const {latestMatchDetails} = props
  const {
    umpires,
    result,
    manOfTheMatch,
    date,
    venue,
    competingTeam,
    competingTeamLogo,
    firstInnings,
    secondInnings,
  } = latestMatchDetails

  return (
    <div className="latest-match">
      <h2>Latest Match</h2>
      <p>{date}</p>
      <p>{venue}</p>
      <p>{result}</p>
      <div className="competing-team">
        <img
          src={competingTeamLogo}
          alt={`latest match ${competingTeam}`}
          className="competing-team-logo"
        />
        <p>{competingTeam}</p>
      </div>
      <p>{firstInnings}</p>
      <p>{secondInnings}</p>
      <p>{manOfTheMatch}</p>
      <p>{umpires}</p>
    </div>
  )
}

export default LatestMatch
