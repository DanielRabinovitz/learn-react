import { useState } from 'react';

export default function Form() {
  const [person, setPerson] = useState({
                                name: 'Niki de Saint Phalle',
                                artwork: {
                                  title: 'Blue Nana',
                                  city: 'Hamburg',
                                  image: 'https://i.imgur.com/Sd1AgUOm.jpg',
                                }
                              });

  function handleCityChange(e) {
    //We use spread syntax to say "look at all this stuff we're copying"
    //and then specify the parts we want to chage afterwards.
    const nextArtwork = { ...person.artwork, city: e.target.value };
    const nextPerson = { ...person, artwork: nextArtwork };
    setPerson(nextPerson);
  }


  return (
    <>
      <label>
        City:
        <input
          value={person.artwork.city}
          onChange={handleCityChange}
        />
      </label>
      <p>
        {person.name}{' '}
        {person.artwork.title}{' '}
        ({person.artwork.city})
      </p>
    </>
  );
}
