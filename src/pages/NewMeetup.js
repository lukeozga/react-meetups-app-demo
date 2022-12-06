import React from 'react'
import NewMeetupForm from '../components/meetups/NewMeetupForm';
import { useNavigate } from 'react-router-dom'

function NewMeetup() {
  const navigate = useNavigate()

  async function addMeetupHandler(meetupData) {
    await fetch('http://localhost:8000/meetups',
    {
      method: 'POST',
      body: JSON.stringify(meetupData),
      headers: {
        'Content-Type': 'application/json'
      }
    }
    );
    navigate('/', {replace: true})
  }

  return (
    <section>
      <h1>Add New Meetup</h1>
      <NewMeetupForm onAddMeetup={addMeetupHandler}/>
    </section>
  )
}

export default NewMeetup;