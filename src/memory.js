let data ={
    event:[
        {   
            id:10001,
            Location : 'Valovine beach (with ski lift), Stoja 37, 52100, Pula, Croatia',
            Date: '05.01.2020',
            Description:'Sea kayaking in the "wild side" of Pula, visit of the cliffs, climbing on the rocks and jumping off (optional), short break at the beach and time for snorkelling, swimming, relaxing. If possible, visit of the cave in kayaks, illuminated with head lights. Group size: 8 people!',
            Event_Name:'Cliffs & Cave Kayaking (Pula)',
            Event_Price: 380,
            Event_URL: 'https://www.pulaoutdoor.com/events/cliffs-cave-kayaking-pula',
            Category:'Outdoor',
            Status:'Ongoing'
        },
        {   
            id:10002,
            Location : 'Discotheque Magnus Pazin',
            Date: '10.30.2020',
            Description:'Vojko V dolazi u Pazin, naravno, u Magnus! Uz nastup na Sea Star festivalu, izvođaču će ovo biti jedini nastup u Istri do jeseni 2020. -> nepropustivo!',
            Event_Name:'VOJKO V ⎮ Magnus ⎮ Odgođeno za jesen',
            Event_Price: 0 ,
            Event_URL: 'https://www.facebook.com/events/2474358526138005',
            Category:'NightLife',
            Status:'Canceled'
        },
        {   
            id:10003,
            Location : 'Klub Kotač',
            Date: '04.25.2020',
            Description:'Klub Kotač/Kotač TV DC Rojc/Pula subota 25.4.2020. 22:00h - livestream Kotač Facebook/Twitch',
            Event_Name:'Corona Room #18: Fikcio Monger - live',
            Event_Price: 0 ,
            Event_URL: 'https://www.facebook.com/events/830668674085593',
            Category:'NightLife',
            Status:'Ongoing'
        },
    ],
    Category:{
        Outdoor:[
            {
                id:10001,
                Location : 'Valovine beach (with ski lift), Stoja 37, 52100, Pula, Croatia',
                Date: '05.01.2020',
                Description:'Sea kayaking in the "wild side" of Pula, visit of the cliffs, climbing on the rocks and jumping off (optional), short break at the beach and time for snorkelling, swimming, relaxing. If possible, visit of the cave in kayaks, illuminated with head lights. Group size: 8 people!',
                Event_Name:'Cliffs & Cave Kayaking (Pula)',
                Event_Price: 380,
                Event_URL: 'https://www.pulaoutdoor.com/events/cliffs-cave-kayaking-pula',
            }
        ],
        NightLife:[
            {
                id:10002,
                Location : 'Discotheque Magnus Pazin',
                Date: '10.30.2020',
                Description:'Vojko V dolazi u Pazin, naravno, u Magnus! Uz nastup na Sea Star festivalu, izvođaču će ovo biti jedini nastup u Istri do jeseni 2020. -> nepropustivo!',
                Event_Name:'VOJKO V ⎮ Magnus ⎮ Odgođeno za jesen',
                Event_Price: 0 ,
                Event_URL: 'https://www.facebook.com/events/2474358526138005',
                Category:'NightLife'
            },
            {
                id:10003,
                Location : 'Klub Kotač',
                Date: '04.25.2020',
                Description:'Klub Kotač/Kotač TV DC Rojc/Pula subota 25.4.2020. 22:00h - livestream Kotač Facebook/Twitch',
                Event_Name:'Corona Room #18: Fikcio Monger - live',
                Event_Price: 0 ,
                Event_URL: 'https://www.facebook.com/events/830668674085593',
                Category:'NightLife'
            }
        ]
    }

}

export default data