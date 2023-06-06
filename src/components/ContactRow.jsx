
function ContactRow({ contact, onDelete }) {
  const { id, pictureUrl, name, popularity, wonOscar, wonEmmy } = contact;

  const handleDelete = () => {
    onDelete(id);
  };

  return (
    <tr>
      <td>
        <img src={pictureUrl} alt={name} style={{ width: '75px', height: '110px' }} />
      </td>
      <td>{name}</td>
      <td>{popularity}</td>
      <td>{wonOscar ? '🏆' : null}</td>
      <td>{wonEmmy ? '🏆' : null}</td>
      <td>
        <button onClick={handleDelete}>Delete</button>
      </td>
    </tr>
  );
}

export default ContactRow;
