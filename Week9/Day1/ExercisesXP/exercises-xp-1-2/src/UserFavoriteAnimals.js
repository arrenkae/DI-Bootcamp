const UserFavoriteAnimals = (props) => {
    const favAnimals = props.favAnimals;
    return (
        <>
        <h4>Favorite animals:</h4>
        <ul>
            {
                favAnimals.map((item, index) => {
                    return (
                      <li>#{index + 1}: {item}</li>
                    )
                  })
            }
        </ul>
        </>
    )
}

export default UserFavoriteAnimals;