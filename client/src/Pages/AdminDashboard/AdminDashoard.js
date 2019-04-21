import React from 'react';
import { Redirect } from 'react-router-dom';
import{
  getFromStorage,
} from '../../utils/storage'
class AdminDashboard extends React.Component {
  state = {
    token: "",
    FalseEntry: '',
  }

  componentDidMount() {
    const obj = getFromStorage('the_main_app')
    if(obj && obj.token) {
      const {token} =obj
      //verify token 
      fetch('http://localhost:3001/api/account/verify?token=' + token)
        .then(res => res.json())
        .then(json => {
          console.log('why')
          console.log(json)
          if(json.success) {
            this.setState({
              token,
            
            })
          }
        })
    } else{
            console.log('hit')
            this.setState({
              FalseEntry: true
            })
          }
  }


  render() {
    if (this.state.FalseEntry === true) {
			return <Redirect to={{ pathname: '/admin' }} />
		}else{
    return (
      <div>
         <h1>Dashboard</h1>

      </div>
    );
  }
}
}



export default AdminDashboard;