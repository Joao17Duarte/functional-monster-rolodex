import Card from '../Card/Card'
import './CardList.css'

export const CardList = ({ monsters }) => (
  <div className='card-list'>
    {monsters.map((monster) => {
      return <Card key={monster.id} monster={monster} />
    })}
  </div>
)
