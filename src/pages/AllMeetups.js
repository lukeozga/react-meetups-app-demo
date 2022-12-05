import React from "react";
import { useState, useEffect } from "react";
import MeetupList from "../components/meetups/MeetupList";

function AllMeetups() {
  const [isLoading, setIsLoading] = useState(true);
  const [loadedMeetups, setLoadedMeetups] = useState([]);

  useEffect(() => {
    setIsLoading(true)
    const fetchData = async () => {
    const response = await fetch("localhost:8000");
    const data = await response.json();
    const meetups = []
    data.forEach(meetup => {
      meetup.push(meetups)
    })
    setIsLoading(false);
    setLoadedMeetups(meetups);
    }
    fetchData();
  }, []);

  if (isLoading) {
    return (
      <section>
        <p>Loading...</p>
      </section>
    );
  }

  return (
    <section>
      <h1>All Meetups</h1>
      <MeetupList meetups={loadedMeetups} />
    </section>
  );
}

export default AllMeetups;
