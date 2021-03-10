import React from 'react'

class ProfileStatus extends React.Component {
   state = {
      editMode: false
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
   }


   render() {
      return (
         <React.Fragment>
            {
               this.state.editMode
                  ? <div>
                     <input onBlur={this.deactivateEditMode.bind(this)} autoFocus={true} value={this.props.status} type="text" />
                  </div>
                  : <div>
                     <span onDoubleClick={this.activateEditMode.bind(this)}>{this.props.status}</span>
                  </div>
            }
         </React.Fragment>
      )
   }

}


export default ProfileStatus