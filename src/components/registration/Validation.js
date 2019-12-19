import React, {Component} from 'react';

export default class Validation extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
          user: '',
          userError: '',
        };
      }
        // Validation user
        if (user === '') {
          this.setState({userError: 'You need type user'});
        } else {
          this.setState({userError: ''});
        }
//   render() {
//     return <div />;
//   }
}
