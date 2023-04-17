import MenuItem from './MenuItem'

function Menu() {
  return (
    <nav>
      <ul>
        <MenuItem link="/" text="Home" />
        <MenuItem link="/personajes" text="Personajes" />
        <MenuItem link="/episodios" text="Episodios" />
        <MenuItem link="/citas" text="Citas" />
      </ul>
    </nav>
  )
}

export default Menu
