rooms = [
    {
        name: "central",
        src: "images/central.png",
        doors: [{
            name: "yellow",
            leftLimit: 155,
            rigthLimit: 280
        },
        {
            name: "pink",
            leftLimit: 800,
            rigthLimit: 930
        },
        {
            name: "green",
            leftLimit: 1185,
            rigthLimit: 1315
        }]
    },

    {
        name: "yellow",
        src: "images/yellow.png",
        doors: [{
            name: "wc",
            leftLimit: 695,
            rigthLimit: 825
        },
        {
            name: "central",
            leftLimit: 1200,
            rigthLimit: 1330
        }]
    },

    {
        name: "pink",
        src: "images/pink.png",
        doors: [
            {
                name: "central",
                leftLimit: 960,
                rigthLimit: 1090
            }]
    },

    {
        name: "green",
        src: "images/green.png",
        key: true,
        doors: [
            {
                name: "central",
                leftLimit: 960,
                rigthLimit: 1090
            }]
    },

    {
        name: "wc",
        src: "images/wc.png",
        doors: [
            {
                name: "",
                leftLimit: 0,
                rigthLimit: 0
            }]
    }
]
