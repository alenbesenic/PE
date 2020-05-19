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
            Status:'Canceled',
            PictureURL:'https://media-cdn.tripadvisor.com/media/photo-m/1280/13/7d/8e/52/the-cave.jpg'
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
            Status:'Canceled',
            PictureURL:'https://pazinstina.info/images/vojko_2.jpg'
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
            Status:'Ongoing',
            PictureURL:'https://scontent.fzag1-1.fna.fbcdn.net/v/t1.0-9/94030770_1483323375174653_3687779909574328320_n.jpg?_nc_cat=102&_nc_sid=b386c4&_nc_ohc=fovWYeC2uesAX_5hPWx&_nc_ht=scontent.fzag1-1.fna&oh=7bedbc7fd72abbf1736a2e046ab6c676&oe=5EE308ED'
        },
        {
            id:10004,
            Location: 'Gradska knjižnica i čitaonica Pula',
            Date: '05.05.2020',
            Description: 'I ove godine Knjižnica se pridružuje obilježavanju Dana grada Pule. Pozivamo vas da i ovogodišnji 5. svibnja, dan u kojem slavimo svoj grad, provedete uz knjige, izložbe i promišljanja o Puli.',
            Event_Name: 'Dan grada Pule: Gladijator u tramvaju i virtualna šetnja starom Pulom',
            Event_Price: 0,
            Event_URL: 'https://gkc-pula.hr/hr/dogadanja/?post_id=2225&post_slug=dan-grada-pule-gladijator-u-tramvaju-i-vizz',
            Category: 'Library',
            Status: 'Done',
            PictureURL: 'https://gkc-pula.hr/site_media/media/uploads/images/news/slikovnica_02.jpg.1024x0_q85.jpg.390x390_q92.jpg'
        }
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
                Status:'Ongoing',
                PictureURL:'https://media-cdn.tripadvisor.com/media/photo-m/1280/13/7d/8e/52/the-cave.jpg'
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
                Category:'NightLife',
                Status:'Canceled',
                PictureURL:'https://pazinstina.info/images/vojko_2.jpg'
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
                Status:'Ongoing',
                PictureURL:'https://scontent.fzag1-1.fna.fbcdn.net/v/t1.0-9/94030770_1483323375174653_3687779909574328320_n.jpg?_nc_cat=102&_nc_sid=b386c4&_nc_ohc=fovWYeC2uesAX_5hPWx&_nc_ht=scontent.fzag1-1.fna&oh=7bedbc7fd72abbf1736a2e046ab6c676&oe=5EE308ED'
            }
        ],
        Library:[
            {
                id:10004,
                Location: 'Gradska knjižnica i čitaonica Pula',
                Date: '05.05.2020',
                Description: 'I ove godine Knjižnica se pridružuje obilježavanju Dana grada Pule. Pozivamo vas da i ovogodišnji 5. svibnja, dan u kojem slavimo svoj grad, provedete uz knjige, izložbe i promišljanja o Puli.',
                Event_Name: 'Dan grada Pule: Gladijator u tramvaju i virtualna šetnja starom Pulom',
                Event_Price: 0,
                Event_URL: 'https://gkc-pula.hr/hr/dogadanja/?post_id=2225&post_slug=dan-grada-pule-gladijator-u-tramvaju-i-vizz',
                Category: 'Library',
                Status: 'Done',
                PictureURL: 'https://gkc-pula.hr/site_media/media/uploads/images/news/slikovnica_02.jpg.1024x0_q85.jpg.390x390_q92.jpg'
            }
        ],
    }

}

module.exports=data;