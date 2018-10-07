let Poll = require('../models/poll');
const titles = [
    "Should dogs be allowed to fly?",
    "Should doors be shut at night?",
    "Should developers use IDEs?",
    "Should cars have four wheels?",
    "Should humans be allowed to wear shoes?"
]

Poll.remove({})
    .then(() => {
        let polls = [];
        for (let i = 0; i < 5; i++) {
            polls.push({
                title: titles[i],
                choices: [
                    {
                        value: "Yes",
                        votes: Math.round(Math.random() * 20)
                    },
                    {
                        value: "No",
                        votes: Math.round(Math.random() * 20)
                    },
                    {
                        value: "I really don't care",
                        votes: Math.round(Math.random() * 20)u
                    }
                ]
            });
        }
        return Poll.create(polls);
    })
    .then(() => {
        process.exit();
    })
    .catch(e => {
        console.log(e);
        process.exit(1);
    });