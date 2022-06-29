const LinkIcon = ({ icon, onClick}) => (
  <img src={require(`../../assets/img/${icon}`)} onClick={onClick} />
)

export default LinkIcon