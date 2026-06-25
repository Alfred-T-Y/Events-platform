import ButtonExplore from "@/components/ButtonExplore"
import EventCard from "@/components/EventCard"
import { IEvent } from "@/database";


const BASE_URL = process.env.NEXT_PUBLIC_gBASE_URL;

const Page = async () => {

  const response = await fetch(`${BASE_URL}/api/events`);
  const { events } = await response.json();

  if (!response.ok) {
    throw new Error('Failed to fetch events');
  }

  return (
    <section>
      <h1 className="text-center">The Hub for every Dev <br/> Event you can't miss</h1>
      <p className="text-center mt-5">Discover the latest and greatest developer events around the world.</p>
    
      <ButtonExplore />   

      <div className="mt-20 space-y-7">
        <h3>Featured Events</h3>

        <ul className="events">
          {events && events.length > 0 && events.map((event: IEvent) => (
            <li key={event.title}>
              <EventCard {...event} />
            </li>
          ))}
        </ul>
      </div> 
    </section>
    
  )
}

export default Page