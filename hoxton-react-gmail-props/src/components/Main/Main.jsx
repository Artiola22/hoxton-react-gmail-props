import Email from './Email'
import './Main.css'
function Main (props){
    
    return (
        <main className="emails">
        <ul>
          {props.filteredEmails.map((email, index) => (
            <Email key={index} email={email} toggleRead={props.toggleRead} toggleStar={props.toggleStar} />
          ))}
        </ul>
      </main>
    )
}
export default Main