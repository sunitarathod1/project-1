
let emp = (props) => {
    return
     <div>

       <pre>{JSON.stringify(props)}</pre>
       
       <h3> Email id:{this.props.user.email}</h3>
       <h3> employee name:{this.props.user.uname}</h3>
    
    </div>
}
export default emp