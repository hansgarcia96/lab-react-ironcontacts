import React from "react";
import contacts from "../contacts.json";

class ContactList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      list: contacts
    };
  }

  showContacts = () => {
    return this.state.list.slice(0, 6).map((eachContact, index) => {
      return (
        <tr>
          <td>
            <img
              src={eachContact.pictureUrl}
              alt="imgBelongsHere"
              height="42"
            />
          </td>
          <td>{eachContact.name}</td>
          <td>{eachContact.popularity}</td>
        </tr>
      );
    });
  };

  render() {
    return (
      <div>
        <h2>Ironcontacts</h2>

        <table>
          <tr>
            <td>Picture</td>
            <td>Name</td>
            <td>Popularity</td>
          </tr>
          {this.showContacts()}
        </table>
      </div>
    );
  }
}

export default ContactList;
