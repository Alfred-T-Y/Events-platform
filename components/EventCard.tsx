"use client";

import Link from "next/link";
import Image from "next/image";
import posthog from 'posthog-js';

interface Props {
    title: string;
    image: string;
    slug: string;
    location: string;
    date: string;
    time: string;
}

const EventCard = ({ title, image, slug, location, date, time }: Props) => {
  return (
    <Link href={'/event'} id="event-card">
        <div className="relative w-102.5 h-75 overflow-hidden">
          <Image src={image} alt={title} fill className="object-cover"
          onClick={() => posthog.capture('image_clicked')}/>
        </div>

        <div className="flex flex-row gap-2">
          <Image src="/icons/pin.svg" alt="location" width={14} height={14} />
          <p>{location}</p>
        </div>

        <p className="title">{title}</p>

        <div className="datetime">
          <div>
            <Image src="/icons/calendar.svg" alt="date" width={14} height={14} />
            <p>{date}</p>
          </div>
          <div>
            <Image src="/icons/clock.svg" alt="date" width={14} height={14} />
            <p>{time}</p>
          </div>
        </div>
    </Link>
  )
}

export default EventCard