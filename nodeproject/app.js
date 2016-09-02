var express = require('express');
var app = express();

var port = process.env.PORT;
var eventRouter = express.Router();

app.use(express.static('public'));
app.use(express.static('bower_components'));

app.set('views', './src/views');
app.set('view engine', 'ejs');

var eventData = [   {
                    name: 'Event 1',
                    description: 'The first event',
                    date: '2016.09.02',
                    time: '17:00',
                    duration: '1 hour',
                    location: {
                        streetAddr: '36 Merlin Park',
                        city: 'Bristol',
                        state: 'Bristol',
                        zip: 'BS20 8RN',
                        lon: 0,
                        lat: 0
                        },
                    capacity: 200
                    },
                    {
                    name: 'Event 2',
                    description: 'The second event',
                    date: '2016.09.02',
                    time: '17:00',
                    duration: '1 hour',
                    location: {
                        streetAddr: '37 Merlin Park',
                        city: 'Bristol',
                        state: 'Bristol',
                        zip: 'BS20 8RN',
                        lon: 0,
                        lat: 0
                        },
                    capacity: 250
                    },
                    {
                    name: 'Event 3',
                    description: 'The third event',
                    date: '2016.09.02',
                    time: '17:00',
                    duration: '1 hour',
                    location: {
                        streetAddr: '38 Merlin Park',
                        city: 'Bristol',
                        state: 'Bristol',
                        zip: 'BS20 8RN',
                        lon: 0,
                        lat: 0
                        },
                    capacity: 300
                    },
                    {
                    name: 'Event 4',
                    description: 'The fourth event',
                    date: '2016.09.02',
                    time: '17:00',
                    duration: '1 hour',
                    location: {
                        streetAddr: '39 Merlin Park',
                        city: 'Bristol',
                        state: 'Bristol',
                        zip: 'BS20 8RN',
                        lon: 0,
                        lat: 0
                        },
                    capacity: 350
                    }
];


eventRouter.route('/')
    .get(function(req, res){
        res.render('events', {
         list: ['first event', '2nd event', '3rd event'],
         nav: [{ Link: 'services', Text: 'services'},
               { Link:'portfolio', Text: 'portfolio'},
               { Link:'about', Text: 'about'},
               { Link:'team', Text: 'team'},
               { Link:'contact', Text: 'contact'},
               { Link:'events', Text: 'events'}
         ],
         events: eventData
     });
});
    
eventRouter.route('/event')
    .get(function(req, res){
        res.send('Hello Single Event!');
    })
    
app.use('/events', eventRouter);

app.get('/', function(req, res){
    //res.send('Hello world');
    res.render('index', {
        list: ['first val', '2nd val', '3rd val'],
        nav: [{Link: 'services', Text: 'services'},
              {Link:'portfolio', Text: 'portfolio'},
              {Link:'about', Text: 'about'},
              {Link:'team', Text: 'team'},
              {Link:'contact', Text: 'contact'},
              {Link:'events', Text: 'events'}
        ]
    });
});

app.get('/routing', function(req, res){
    res.send('Hello Routing');
});

app.listen(port, function(err){
    console.log('The server is running on port: ' + port);
});
