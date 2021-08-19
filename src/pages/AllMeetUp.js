import MeetupList from "../component/meetups/MeetupList";
import { useState , useEffect} from "react";

function AllMeetUpPages() {
  // when we call useState()
  // react will execute the whole component function
  const [isLoading, setLoading] = useState(true);
  const [loadMeetup, setLoadMeetup] = useState([]);
  // useEffect allow you to run code under certain circumstances
  // useeffect (function, array of dependencies)
  // compare the value of isLoading and compare with this value 
  // for the first argument(function) execute last time
  useEffect(() => {
    setLoading(true);
    fetch("https://meetup-test-e37dd-default-rtdb.firebaseio.com/meetups.json")
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log(data);
      const meetups = [];
      for (const key in data){
        console.log(key);
          const meetup = {
            id: key, // they do not have id
            ...data[key]
          };
        meetups.push(meetup);
      }
      setLoading(false); // set it to false once it have the data
      setLoadMeetup(meetups); // array of objects

    });
    // for here, fetch function will re-execute again and again infinite loop here
  },[]);
  
  if (isLoading) { 
    // question is that return will not wait for request return 
    // if large data volume, return will carry out first
    // and useSate will remain true
    // thus we need this if-else condition to determing the loading page
    return (
      <section>
        <p>Loading.... </p>
      </section>
    );
  }
  return (
    <section>
      <h1> All meetups </h1>
      <MeetupList meetups={loadMeetup} />
    </section>
  );
}
export default AllMeetUpPages; // export function itself
