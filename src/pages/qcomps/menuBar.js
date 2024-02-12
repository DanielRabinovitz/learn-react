export default function MenuBar() {
  return (
    <div>
      <AButton id="1" color="blue" size="12px">
        Button 1
      </AButton>
      <AButton id="2" color="red" size="20px">
        Button 2
      </AButton>
    </div>
  );
}

//children is a special prop, it just jands back the stuff that is contained inside of the tag.
//In this case "child" passes back "Button 1" or "Button 2"
function AButton({ id, color, size, children }) {
  return (
    <button id={`${id}`} onClick={() => {
      document.getElementById(`${id}`).style.backgroundColor = color;
      document.getElementById(`${id}`).style.fontSize = size;
    }}>
      {children}
    </button>
  );
}
