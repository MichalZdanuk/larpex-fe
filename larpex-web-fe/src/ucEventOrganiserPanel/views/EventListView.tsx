import React from "react";
import EventView from "./EventView.tsx";
import {EventViewDto} from "../viewModels/EventViewModel.ts";
import "./EventListView.css";

interface EventListViewProps {
    events: EventViewDto[]
}

const EventListView: React.FC<EventListViewProps> = ({events}) => {

    return (
        <>
            <div className="organiser-panel-title"><h1>Panel Organizatora Wydarzeń</h1></div>
            <div>
                <ul className="list-group">
                    <li className="list-group-item list-group-item-dark organiser-panel-header">
                        <h5>
                            <span className="d-inline-block text-truncate wdh-15"> Name</span>
                            <span className="d-inline-block text-truncate wdh-30"> &nbsp;Description</span>
                            <span className="d-inline-block text-truncate wdh-7">  &nbsp;Entry </span>
                            <span className="d-inline-block text-truncate wdh-15"> &nbsp;Location </span>
                            <span className="d-inline-block text-truncate wdh-10"> &nbsp;Date </span>
                        </h5>
                    </li>
                    {events.map((item) => (
                        <li className="list-group-item organiser-panel-content-2">
                            <EventView name={item.name} desc={item.descriptionForEmployee} currentlySignedPlayers={item.currentlySignedPlayers} maxPlayerLimit={item.eventSettings.maxPlayerLimit} id={item.id} location={item.location} startDate={item.startDate}/>
                        </li>
                    ))
                    }
                </ul>
            </div>
        </>
    );


}

export default EventListView;