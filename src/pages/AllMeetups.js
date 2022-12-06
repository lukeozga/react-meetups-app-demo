import React from "react";
import { useState, useEffect } from "react";
import MeetupList from "../components/meetups/MeetupList";

function AllMeetups() {
  const [isLoading, setIsLoading] = useState(true);
  const [loadedMeetups, setLoadedMeetups] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    const fetchData = async () => {
      const response = await fetch("http://localhost:8000/meetups");
      const data = await response.json();
      const meetups = [];
      data.data.forEach((meetup) => {
        meetups.push(meetup);
      });
      setIsLoading(false);
      setLoadedMeetups(meetups);
    };
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
