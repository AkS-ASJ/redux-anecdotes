import {useSelector} from "react-redux";
const Notification = () => {
  const notification = useSelector(state => state.notif)

  const style = {
    padding: 10,
    marginBottom: 10,
    borderWidth: 1
  }

  return (
    <div style={style}>
      {notification}
    </div>
  )
}

export default Notification