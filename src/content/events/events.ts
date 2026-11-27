export type EventCategory =
    | 'Motor Show'
    | 'Festival'
    | 'Motorsport'
    | 'Car Meet'
    | 'Classic Cars'
    | 'Concours';

export interface AutomotiveEvent {
    id: string;
    title: string;
    startDate: string;
    endDate: string;
    location: string;
    category: EventCategory;
    description: string;
    url: string;
}

export const events: AutomotiveEvent[] = [
    {
        id: 'goodwood-members-meeting-2027',
        title: 'Goodwood Members’ Meeting',
        startDate: '2027-04-10',
        endDate: '2027-04-11',
        location: 'Goodwood Motor Circuit, West Sussex',
        category: 'Motorsport',
        description:
            'Historic motor racing, track demonstrations and automotive heritage for GRRC members and fellows.',
        url: 'https://www.goodwood.com/motorsport/members-meeting/',
    },
    {
        id: 'goodwood-festival-of-speed-2027',
        title: 'Goodwood Festival of Speed',
        startDate: '2027-07-15',
        endDate: '2027-07-18',
        location: 'Goodwood House, West Sussex',
        category: 'Festival',
        description:
            'A celebration of motorsport, supercars, automotive innovation and the famous Goodwood hillclimb.',
        url: 'https://www.goodwood.com/motorsport/festival-of-speed/',
    },
    {
        id: 'goodwood-revival-2027',
        title: 'Goodwood Revival',
        startDate: '2027-09-17',
        endDate: '2027-09-19',
        location: 'Goodwood Motor Circuit, West Sussex',
        category: 'Classic Cars',
        description:
            'A celebration of historic motor racing, iconic classic cars and vintage style.',
        url: 'https://www.goodwood.com/motorsport/goodwood-revival/',
    },
];