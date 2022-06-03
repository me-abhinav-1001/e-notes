import React, { useState } from "react";
import NoteContext from "./NoteContext";

const NoteState = (props) => {

    const notesInitial = [
      {
        _id: "629720f8e7de8a7a48c90e35",
        user: "62963ce09b9318309617ae81",
        title: "Alarm set",
        description: "Wake up early 7 A.M",
        tags: "General",
        date: "2022-06-01T08:19:04.503Z",
        __v: 0,
      },
      {
        _id: "62972662e7de8a7a48c90e39",
        user: "62963ce09b9318309617ae81",
        title: "Alarm set",
        description: "Wake up early 7 A.M",
        tags: "General",
        date: "2022-06-01T08:42:10.752Z",
        __v: 0,
      },
      {
        _id: "62972662e7de8a7a48c90e39",
        user: "62963ce09b9318309617ae81",
        title: "Alarm set",
        description: "Wake up early 7 A.M",
        tags: "General",
        date: "2022-06-01T08:42:10.752Z",
        __v: 0,
      },
      {
        _id: "62972662e7de8a7a48c90e39",
        user: "62963ce09b9318309617ae81",
        title: "Alarm set",
        description: "Wake up early 7 A.M",
        tags: "General",
        date: "2022-06-01T08:42:10.752Z",
        __v: 0,
      },
      {
        _id: "62972662e7de8a7a48c90e39",
        user: "62963ce09b9318309617ae81",
        title: "Alarm set",
        description: "Wake up early 7 A.M",
        tags: "General",
        date: "2022-06-01T08:42:10.752Z",
        __v: 0,
      },
      {
        _id: "62972662e7de8a7a48c90e39",
        user: "62963ce09b9318309617ae81",
        title: "Alarm set",
        description: "Wake up early 7 A.M",
        tags: "General",
        date: "2022-06-01T08:42:10.752Z",
        __v: 0,
      },
      {
        _id: "62972662e7de8a7a48c90e39",
        user: "62963ce09b9318309617ae81",
        title: "Alarm set",
        description: "Wake up early 7 A.M",
        tags: "General",
        date: "2022-06-01T08:42:10.752Z",
        __v: 0,
      },
    ];

    const [notes, setNotes] = useState(notesInitial)
    
    return (
        <NoteContext.Provider value={{notes, setNotes}}>
            {props.children}
        </NoteContext.Provider>
    );
};

export default NoteState;
