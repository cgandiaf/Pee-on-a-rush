rooms = [
    {
        name: "central",
        src: "images/central.png",
        doors: [{
            name: "yellow",
            leftLimit: 110,
            rigthLimit: 320
        },
        {
            name: "pink",
            leftLimit: 760,
            rigthLimit: 970
        },
        {
            name: "green",
            leftLimit: 1150,
            rigthLimit: 1340
        }]
    },

    {
        name: "yellow",
        src: "images/yellow.png",
        doors: [
        {
            name: "central",
            leftLimit: 1160,
            rigthLimit: 1370
        }]
    },

    {
        name: "pink",
        src: "images/pink.png",
        doors: [
            {
                name: "central",
                leftLimit: 920,
                rigthLimit: 1130
            }]
    },

    {
        name: "green",
        src: "images/green.png",
        key: true,
        doors: [
            {
                name: "central",
                leftLimit: 920,
                rigthLimit: 1130
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

wcDoor = 
    {
        name: "wc",
        leftLimit: 655,
        rigthLimit: 855
    }

