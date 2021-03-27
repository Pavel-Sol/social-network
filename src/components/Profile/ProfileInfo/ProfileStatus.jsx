import React from 'react'

class ProfileStatus extends React.Component {
   state = {
      editMode: false,
      status: this.props.status
   }

   activateEditMode() {
      this.setState({
         editMode: true
      })
      this.props.updateUserStatus(this.state.status)
   }

   deactivateEditMode() {
      this.setState({
         editMode: false
      })
   }

   onStatusChange = (e) => {
      this.setState({
         status: e.currentTarget.value
      })
   }


   render() {
      // console.log(this.props)
      return (
         <React.Fragment>
            {
               this.state.editMode
                  ? <div>
                     <input 
                     onBlur={this.deactivateEditMode.bind(this)} 
                     onChange={this.onStatusChange}
                     autoFocus={true} value={this.state.status} type="text" />
                  </div>
                  : <div>
                     <span onDoubleClick={this.activateEditMode.bind(this)}>{this.props.status || 'no status'}</span>
                  </div>
            }
         </React.Fragment>
      )
   }

}


export default ProfileStatus