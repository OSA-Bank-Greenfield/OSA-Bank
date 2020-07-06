import React, { Component } from 'react';
import axios from 'axios';
import './Myscheduled.css';
import moment from 'moment';

class Item extends Component {
  state = { items: [] };
  componentDidMount() {
    axios
      .get('http://localhost:5000/appointement')
      .then((response) => {
        console.log(response.data);
        this.setState({
          items: response.data,
        });
        // console.log(this.state.classesList);
      })

      .catch((err) => console.log('Error', err));
  }

  render() {
    var list;
    if (this.state.items.length !== 0) {
      list = this.state.items.map((item) => {
        return (
          <React.Fragment>
            <div className="myschedcontainer">
              <h1>My appointments</h1>
              <ul className="list-group" key={item._id}>
                <div className="licont">
                  <li className="list-group-item list-group-item-primary">
                    Date
                  </li>
                  <li className="list-group-item list-group-item-secondary">
                    {item.date}
                  </li>
                </div>

                <div className="licont">
                  <li className="list-group-item list-group-item-primary">
                    Time
                  </li>
                  <li className="list-group-item list-group-item-secondary">
                    {item.time}
                  </li>
                </div>

                <div className="licont">
                  <li className="list-group-item list-group-item-primary">
                    Office
                  </li>
                  <li className="list-group-item list-group-item-secondary">
                    {item.agency}
                  </li>
                </div>
              </ul>
            </div>
          </React.Fragment>
        );
      });
    } else {
      list = <h5>No Appointments made.</h5>;
    }
    return <div>{list}</div>;
  }
}
export default Item;
