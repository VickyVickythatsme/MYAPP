import classes from "./NewForm.module.css";
import Card from "../ui/Card";
import {useRef} from 'react';

// required stands for '*'
function NewForm(props) {
    // title image address description
    const titleInputRef  = useRef(); // create reference object
    const imageInputRef = useRef();
    const addressInputRef = useRef();
    const desInputRef = useRef();
    

    function submitHandler(event){
        // to prevrnt browser reloaded (default behaviour)
        event.preventDefault();
        const enteredTitle = titleInputRef.current.value;
        const enteredImage = imageInputRef.current.value;
        const enteredAddress = addressInputRef.current.value;
        const enteredDes = desInputRef.current.value;
        // holds the value of that input, can also set it
        // titleInputRef.current.value = "Wev Dev meet up";

        // put all data into an object
        const meetupData = {
            title: enteredTitle,
            image: enteredImage,
            address: enteredAddress,
            des: enteredDes
        };
        //console.log(meetupData);
        props.onAddMeetup(meetupData); // add meetup


    }
  return (
    <Card>
      <form className={classes.form} onSubmit = {submitHandler}>
        <div className={classes.control}>
          <label htmlFor="title">Meetup Title</label>
          <input type="text" required id="title"  ref = {titleInputRef}/>
        </div>

        <div className={classes.control}>
          <label htmlFor="image">Meetup Image</label>
          <input type="url" required id="image"  ref = {imageInputRef}/>
        </div>

        <div className={classes.control}>
          <label htmlFor="address">Address</label>
          <input type="text" required id="address" ref = {addressInputRef }/>
        </div>

        <div className={classes.control}>
          <label htmlFor="description">Description</label>
          <textarea id="description" required row="5" ref = {desInputRef}>
            {" "}
          </textarea>
        </div>

        <div className = {classes.actions}> 
            <button>Add meet up </button>
        </div>
      </form>
    </Card>
  );
}
export default NewForm;
