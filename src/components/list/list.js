import Goal from './goal.js'

const listMock = [
    {
        "id":"1",
        "details":"Practice 30' Frontend Coding",
        "period":"day",
        "events":1,
        "icon":"👨‍💻",
        "goal":161,
        "deadline":"2024-01-01",
        "completed":1
    },
    {
        "id":"2",
        "details":"Listen 10' Entrepreneur Podcasts",
        "period":"day",
        "events":1,
        "icon":"🎧",
        "goal":161,
        "deadline":"2024-01-01",
        "completed":1
    },
    {
        "id":"3",
        "details":"Upload Drone Reels",
        "period":"month",
        "events":10,
        "icon":"🚀",
        "goal":40,
        "deadline":"2024-01-01",
        "completed":0
    }

];

function List() {
    return (  
       listMock.map(meta => <Goal {...meta}></Goal>)
    );
}

export default List;