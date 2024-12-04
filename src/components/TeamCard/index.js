// Write your code here
import './index.css'

const TeamCard = props => {
  const {teamDetails} = props
  const {name, teamImageUrl} = teamDetails

  return (
    <li className="team-card">
      <img src={teamImageUrl} alt={name} className="team-logo" />
      <p>{name}</p>
    </li>
  )
}

export default TeamCard
