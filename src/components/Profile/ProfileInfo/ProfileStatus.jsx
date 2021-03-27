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
   }

   deactivateEditMode() {
     
      this.setState({
         editMode: false
      })
      this.props.updateUserStatus(this.state.status)
   }

   onStatusChange = (e) => {
      this.setState({
         status: e.currentTarget.value
      })
   }

   componentDidUpdate(prevProps, prevState) {
      if(prevProps.status !== this.props.status) {
         this.setState({
            status: this.props.status
         })
      }
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