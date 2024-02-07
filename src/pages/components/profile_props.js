//{person, size=100} is a specific type of object with a person object and a default size parameter of 100.
function Avatar({person, size=100}) {
  return (
    <img
      className="avatar"
      src={'https://i.imgur.com/' + person.imageId + 's.jpg'}
      alt={person.name}
      width={size}
      height={size}
    />
  );
}

export {Avatar}

//We have a bunch of avatar objects:
/*
Syntax is 
<Component_name 
  prop1 = {js value}
  prop2 = {js value}
  ... />
*/

export default function Profile() {
  return (
    <div>
        <Avatar
            person={{ name: 'Woon sen', imageId: 'OKS67lh'}}
            size={200} />
        <Avatar
            person={{ name: 'Ron Ayah', imageId: 'YfeOqp2'}}
            size={150} />
        <Avatar
            person={{ name: 'Pani Dom', imageId: '1bX5QH6'}} />
    </div>
  );
}