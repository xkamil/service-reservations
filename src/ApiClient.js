const services = [
    {
        id: "13c2275d-71b3-4505-9bb9-b5d66d2a4602",
        name: "CDA.PL",
        free_slots: 1,
        users: [
            {
                name: "kamil",
                to: "2019-05-08T20:45:02Z"
            }
        ]
    },
    {
        id: "13c2275d-71b3-4505-9bb9-b5d66d2a4603",
        name: "NETFLIX",
        free_slots: 2,
        users: [
            {
                name: "kamil",
                to: "2016-07-27T10:45:00Z"
            },
            {
                name: "tomek",
                to: "2016-07-27T10:45:00Z"
            }
        ]
    },
    {
        id: "13c2275d-71b3-4505-9bb9-b5d66d2a4601",
        name: "HBO",
        free_slots: 0,
        users: [
            {
                name: "kamil",
                to: "2019-05-08T20:45:02Z"
            },
            {
                name: "ania",
                to: "2019-05-08T20:45:02Z"
            },
            {
                name: "ania",
                to: "2019-05-08T20:45:02Z"
            },
            {
                name: "ania",
                to: "2019-05-08T20:45:02Z"
            }
        ]
    },
];


async function getServices() {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve(services), 2000)
    });
}

async function addReservation(userId, serviceId, from, to) {
    if (serviceId === '13c2275d-71b3-4505-9bb9-b5d66d2a4603') {
        return Promise.reject({message: "NO_SPOTS_LEFT"})
    } else {
        return services;
    }
}

export default {
    getServices,
    addReservation
}