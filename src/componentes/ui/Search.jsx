export const Search = ({selectedGender, setSelectedGender, genders}) =>{
      return (<select className='search'
                    onChange={(e) => setSelectedGender(e.target.value)}>
        <option value="">Todos</option>
        {
            genders.map(gender =>{
                return <option key={gender.id} value={gender.id}>
                    {gender.name}
                </option>
            })
        }
    </select>)
}