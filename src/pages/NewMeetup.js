import {useHistory} from 'react-router-dom';
import NewForm from "../component/meetups/NewForm";
function NewMeetUp() {
    const history = useHistory();
    function addMeetupHandler(meetupData){
        fetch(
            'https://meetup-test-e37dd-default-rtdb.firebaseio.com/meetups.json',
            {
                method:'POST',
                body:JSON.stringify(meetupData),
                headers:{
                    'Content-Type':'application/json'
                }
            }
            
         ).then(() => {
            history.replace('/'); // when submit the new meetup info
            // the page will skip into the main page wihtout reloading html
         }); // allow us to send http request
        // automatically add a new table meetups in json format - post request
        // json is most popular format for transmitting data through http
    }
  return (
    <section>
      <h1> Add New Meetup </h1>
      <NewForm  onAddMeetup={addMeetupHandler}/>
    </section>
  );
}
export default NewMeetUp;
