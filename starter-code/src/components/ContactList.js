import React from "react";
import contacts from "../contacts.json";

class ContactList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstFiveList: contacts.slice(0, 5),
      list: contacts.slice(5)
    };
  }

  showContacts = () => {
    return this.state.firstFiveList.map((eachContact, index) => {
      return (
          <tr key={index}>
            <td>
              <img
                src={eachContact.pictureUrl}
                alt="imgBelongsHere"
                height="100px"
              />
            </td>
            <td>{eachContact.name}</td>
            <td>{eachContact.popularity}</td>
            <td>
              <button
                onClick={() => {
                  this.deleteContact(index);
                }}
              >
                Delete
              </button>
            </td>
          </tr>
      );
    });
  };

  deleteContact = index => {
    let copiedList = [...this.state.firstFiveList];

    copiedList.splice(index, 1);

    this.setState({
      firstFiveList: copiedList
    });
  };

  addRandomContact = e => {
    // e.preventDefault();

    let allContactsList = [...this.state.list];
    let firstFive = [...this.state.firstFiveList];

    let randomIndex = Math.floor(Math.random() * allContactsList.length - 1);

    firstFive.push(allContactsList[randomIndex]);

    this.setState({
      firstFiveList: firstFive
    });
  };

  sortAlphabetically = () => {
    let copiedList = [...this.state.firstFiveList];

    copiedList.sort(function(a, b) {
      if (a.name < b.name) {
        return -1;
      }
      if (a.name > b.name) {
        return 1;
      }
      return 0;
    });

    this.setState({
      firstFiveList: copiedList
    });
  };

  sortPopularity = () => {
    let copiedList = [...this.state.firstFiveList];

    copiedList.sort(function(a, b) {
      if (a.popularity > b.popularity) {
        return -1;
      }
      if (a.popularity < b.popularity) {
        return 1;
      }
      return 0;
    });
    this.setState({
      firstFiveList: copiedList
    });
  };

  render() {
    return (
      <div className="entireTable">
        <h2>IronContacts</h2>

        <button
          onClick={() => {
            this.addRandomContact();
          }}
        >
          Add Random Contact
        </button>

        <button
          onClick={() => {
            this.sortAlphabetically();
          }}
        >
          Sort Alphabetically
        </button>

        <button
          onClick={() => {
            this.sortPopularity();
          }}
        >
          Sort Popularity
        </button>

        <table>
          <thead>
            <tr className="tableHeader">
              <th>Picture</th>
              <th>Name</th>
              <th>Popularity</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>{this.showContacts()}</tbody>
        </table>

      </div>
    );
  }
}

export default ContactList;
