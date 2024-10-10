const Menu = () => {
  return(
    <div className="flex justify-around items-center gap-3 bg-light-gray shadow-lg h-12 w-80">
      <label htmlFor="countries">Filter by region</label>
      <select id="countries">
        <option value="africa">Africa</option>
        <option value="america">America</option>
        <option value="asia">Asia</option>
        <option value="europe">Europe</option>
        <option value="oceania">Oceania</option>
      </select>
    </div>
  )
}

export default Menu;