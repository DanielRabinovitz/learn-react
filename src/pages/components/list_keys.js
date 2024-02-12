const people = [
  'Creola Katherine Johnson: mathematician',
  'Mario José Molina-Pasquel Henríquez: chemist',
  'Mohammad Abdus Salam: physicist',
  'Percy Lavon Julian: chemist',
  'Subrahmanyan Chandrasekhar: astrophysicist'
];

//we create an index and use the index as the li key.
//The key is like a folder name so that you can navigate to specific <li> items inside of the <ul> folder
export default function List() {
  const listItems = people.map((person, index) =>
    <li key={index}>{person}</li>
  );
  return <ul>{listItems}</ul>;
}
//this is not an ideal key though. The indices change if you delete items from the array!