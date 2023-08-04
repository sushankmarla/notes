import { NextResponse } from 'next/server'

const allNotes = [
    {
        "id": 1,
        "title": "Lorem Ipsum",
        "date": "2023-05-01",
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
    },
    {
        "id": 2,
        "title": "Dolor Sit Amet",
        "date": "2023-05-02",
        "description": "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
        "id": 3,
        "title": "Consectetur Adipiscing",
        "date": "2023-05-03",
        "description": "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
    },
    {
        "id": 4,
        "title": "Adipiscing Elit",
        "date": "2023-05-04",
        "description": "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
    },
    {
        "id": 5,
        "title": "Tempor Incididunt",
        "date": "2023-05-05",
        "description": "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    },
    {
        "id": 6,
        "title": "Labore Et Dolore",
        "date": "2023-05-06",
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
        "id": 7,
        "title": "Minim Veniam",
        "date": "2023-05-07",
        "description": "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
    },
    {
        "id": 8,
        "title": "Duis Aute",
        "date": "2023-05-08",
        "description": "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
    },
    {
        "id": 9,
        "title": "Reprehenderit In",
        "date": "2023-05-09",
        "description": "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    },
    {
        "id": 10,
        "title": "Officia Deserunt",
        "date": "2023-05-10",
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    }
]
 
export async function GET(request) {
    const { searchParams } = new URL(request.url);
    const noteId = searchParams.get('noteId');
    // const res = await fetch('https://data.mongodb-api.com/...', {
    //     headers: {
    //         'Content-Type': 'application/json',
    //         'API-Key': process.env.DATA_API_KEY,
    //     },
    // })
    // const data = await res.json()

    const data = (noteId !== null) ? allNotes.filter(node => node.id == noteId) : allNotes;
    return NextResponse.json({ data })
}