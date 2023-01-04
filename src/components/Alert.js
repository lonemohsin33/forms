import React from 'react'

export default function Alert(props) {
    console.log(props.alert)

  return (
      <>
          props.alert && <div class={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
  <strong>Holy guacamole!</strong> {props.alert.message}
  <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
</div>
      
    </>
  )
}
