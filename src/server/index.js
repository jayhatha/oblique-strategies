const express = require("express");
const express_graphql = require("express-graphql");
const { buildSchema } = require("graphql");
const cors = require("cors");
import WebServer from './web.server'

let webServer = new WebServer();
webServer.start()
  .then(() => {
    console.log('Web server started!')
  })
  .catch(err => {
    console.error(err)
    console.error('Failed to start web server')
  });


var schema = buildSchema(`
    type Query {
        strategy(id: Int!): Strategy
        strategies: [Strategy]
        random: Strategy
    },
    type Strategy {
        id: Int
        text: String
    }
`);

var strategyData = [
    {
      id: 1,
      text: "(Organic) machinery"
    },
    {
      id: 2,
      text: "A line has two sides"
    },
    {
      id: 3,
      text: "A very small object         Its center"
    },
    {
      id: 4,
      text: "Abandon desire"
    },
    {
      id: 5,
      text: "Abandon normal instructions"
    },
    {
      id: 6,
      text: "Abandon normal instruments"
    },
    {
      id: 7,
      text: "Accept advice"
    },
    {
      id: 8,
      text: "Accretion"
    },
    {
      id: 9,
      text: "Adding on"
    },
    {
      id: 10,
      text: "Allow an easement (an easement is the abandonment of a stricture)"
    },
    {
      id: 11,
      text: "Always first steps"
    },
    {
      id: 12,
      text: "Always give yourself credit for having more than personality (given by Arto Lindsay)"
    },
    {
      id: 13,
      text: "Always the first steps"
    },
    {
      id: 14,
      text: "Are there sections?  Consider transitions"
    },
    {
      id: 15,
      text: "Ask people to work against their better judgement"
    },
    {
      id: 16,
      text: "Ask your body"
    },
    {
      id: 17,
      text: "Assemble some of the elements in a group and treat the group"
    },
    {
      id: 18,
      text: "Balance the consistency principle with the inconsistency principle"
    },
    {
      id: 19,
      text: "Be dirty"
    },
    {
      id: 20,
      text: "Be extravagant"
    },
    {
      id: 21,
      text: "Be less critical"
    },
    {
      id: 22,
      text: "Breathe more deeply"
    },
    {
      id: 23,
      text: "Bridges   -build   -burn"
    },
    {
      id: 24,
      text: "Bridges -build -burn"
    },
    {
      id: 25,
      text: "Cascades"
    },
    {
      id: 26,
      text: "Change ambiguities to specifics"
    },
    {
      id: 27,
      text: "Change instrument roles"
    },
    {
      id: 28,
      text: "Change nothing and continue consistently"
    },
    {
      id: 29,
      text: "Change nothing and continue with immaculate consistency"
    },
    {
      id: 30,
      text: "Change specifics to ambiguities"
    },
    {
      id: 31,
      text: "Children   -speaking     -singing"
    },
    {
      id: 32,
      text: "Cluster analysis"
    },
    {
      id: 33,
      text: "Consider different fading systems"
    },
    {
      id: 34,
      text: "Consider transitions"
    },
    {
      id: 35,
      text: "Consult other sources   -promising   -unpromising"
    },
    {
      id: 36,
      text: "Convert a melodic element into a rhythmic element"
    },
    {
      id: 37,
      text: "Courage!"
    },
    {
      id: 38,
      text: "Cut a vital conenction"
    },
    {
      id: 39,
      text: "Cut a vital connection"
    },
    {
      id: 40,
      text: "Decorate, decorate"
    },
    {
      id: 41,
      text: "Define an area as `safe' and use it as an anchor"
    },
    {
      id: 42,
      text: "Destroy  -nothing   -the most important thing"
    },
    {
      id: 43,
      text: "Destroy nothing; Destroy the most important thing"
    },
    {
      id: 44,
      text: "Discard an axiom"
    },
    {
      id: 45,
      text: "Disciplined self-indulgence"
    },
    {
      id: 46,
      text: "Disconnect from desire"
    },
    {
      id: 47,
      text: "Discover the recipes you are using and abandon them"
    },
    {
      id: 48,
      text: "Discover your formulas and abandon them"
    },
    {
      id: 49,
      text: "Display your talent"
    },
    {
      id: 50,
      text: "Distort time"
    },
    {
      id: 51,
      text: "Distorting time"
    },
    {
      id: 52,
      text: "Do nothing for as long as possible"
    },
    {
      id: 53,
      text: "Do something boring"
    },
    {
      id: 54,
      text: "Do something sudden, destructive and unpredictable"
    },
    {
      id: 55,
      text: "Do the last thing first"
    },
    {
      id: 56,
      text: "Do the washing up"
    },
    {
      id: 57,
      text: "Do the words need changing?"
    },
    {
      id: 58,
      text: "Do we need holes?"
    },
    {
      id: 59,
      text: "Don't avoid what is easy"
    },
    {
      id: 60,
      text: "Don't be frightened of cliches"
    },
    {
      id: 61,
      text: "Don't break the silence"
    },
    {
      id: 62,
      text: "Don't stress on thing more than another [sic]"
    },
    {
      id: 63,
      text: "Don't stress one thing more than another"
    },
    {
      id: 64,
      text: "Dont be afraid of things because they're easy to do"
    },
    {
      id: 65,
      text: "Dont be frightened to display your talents"
    },
    {
      id: 66,
      text: "Emphasize differences"
    },
    {
      id: 67,
      text: "Emphasize repetitions"
    },
    {
      id: 68,
      text: "Emphasize the flaws"
    },
    {
      id: 69,
      text: "Faced with a choice, do both (from Dieter Rot)"
    },
    {
      id: 70,
      text: "Faced with a choice, do both (given by Dieter Rot)"
    },
    {
      id: 71,
      text: "Feed the recording back out of the medium"
    },
    {
      id: 72,
      text: "Fill every beat with something"
    },
    {
      id: 73,
      text: "Find a safe part and use it as an anchor"
    },
    {
      id: 74,
      text: "Get your neck massaged"
    },
    {
      id: 75,
      text: "Ghost echoes"
    },
    {
      id: 76,
      text: "Give the game away"
    },
    {
      id: 77,
      text: "Give the name away"
    },
    {
      id: 78,
      text: "Give way to your worst impulse"
    },
    {
      id: 79,
      text: "Go outside.  Shut the door."
    },
    {
      id: 80,
      text: "Go outside. Shut the door."
    },
    {
      id: 81,
      text: "Go slowly all the way round the outside"
    },
    {
      id: 82,
      text: "Go to an extreme, come part way back"
    },
    {
      id: 83,
      text: "Honor thy error as a hidden intention"
    },
    {
      id: 84,
      text: "Honor thy mistake as a hidden intention"
    },
    {
      id: 85,
      text: "How would someone else do it?"
    },
    {
      id: 86,
      text: "How would you have done it?"
    },
    {
      id: 87,
      text: "Humanize something free of error"
    },
    {
      id: 88,
      text: "Idiot glee (?)"
    },
    {
      id: 89,
      text: "Imagine the piece as a set of disconnected events"
    },
    {
      id: 90,
      text: "In total darkness, or in a very large room, very quietly"
    },
    {
      id: 91,
      text: "Infinitesimal gradations"
    },
    {
      id: 92,
      text: "Intentions   -nobility of  -humility of   -credibility of"
    },
    {
      id: 93,
      text: "Into the impossible"
    },
    {
      id: 94,
      text: "Is it finished?"
    },
    {
      id: 95,
      text: "Is something missing?"
    },
    {
      id: 96,
      text: "Is the information correct?"
    },
    {
      id: 97,
      text: "Is the style right?"
    },
    {
      id: 98,
      text: "Is there something missing"
    },
    {
      id: 99,
      text: "It is quite possible (after all)"
    },
    {
      id: 100,
      text: "It is simply a matter or work"
    },
    {
      id: 101,
      text: "Just carry on"
    },
    {
      id: 102,
      text: "Left channel, right channel, center channel"
    },
    {
      id: 103,
      text: "Listen to the quiet voice"
    },
    {
      id: 104,
      text: "Look at the order in which you do things"
    },
    {
      id: 105,
      text: "Look closely at the most embarrassing details & amplify them"
    },
    {
      id: 106,
      text: "Lost in useless territory"
    },
    {
      id: 107,
      text: "Lowest common denominator"
    },
    {
      id: 108,
      text: "Magnify the most difficult details"
    },
    {
      id: 109,
      text: "Make a blank valuable by putting it in an exquisite frame"
    },
    {
      id: 110,
      text: "Make a sudden, destructive, unpredictable action; incorporate"
    },
    {
      id: 111,
      text: "Make an exhaustive list of everything you might do & do the last thing on the list"
    },
    {
      id: 112,
      text: "Make it more sensual"
    },
    {
      id: 113,
      text: "Make what's perfect more human"
    },
    {
      id: 114,
      text: "Mechanicalize something idiosyncratic"
    },
    {
      id: 115,
      text: "Move towards the unimportant"
    },
    {
      id: 116,
      text: "Mute and continue"
    },
    {
      id: 117,
      text: "Not building a wall but making a brick"
    },
    {
      id: 118,
      text: "Not building a wall; making a brick"
    },
    {
      id: 119,
      text: "Once the search has begun, something will be found"
    },
    {
      id: 120,
      text: "Only a part, not the whole"
    },
    {
      id: 121,
      text: "Only one element of each kind"
    },
    {
      id: 122,
      text: "Openly resist change"
    },
    {
      id: 123,
      text: "Overtly resist change"
    },
    {
      id: 124,
      text: "Pae White's non-blank graphic metacard"
    },
    {
      id: 125,
      text: "Put in earplugs"
    },
    {
      id: 126,
      text: "Question the heroic"
    },
    {
      id: 127,
      text: "Question the heroic approach"
    },
    {
      id: 128,
      text: "Reevaluation (a warm feeling)"
    },
    {
      id: 129,
      text: "Remember quiet evenings"
    },
    {
      id: 130,
      text: "Remember those quiet evenings"
    },
    {
      id: 131,
      text: "Remove a restriction"
    },
    {
      id: 132,
      text: "Remove ambiguities and convert to specifics"
    },
    {
      id: 133,
      text: "Remove specifics and convert to ambiguities"
    },
    {
      id: 134,
      text: "Repetition is a form of change"
    },
    {
      id: 135,
      text: "Retrace your steps"
    },
    {
      id: 136,
      text: "Reverse"
    },
    {
      id: 137,
      text: "Short circuit (example; a man eating peas with the idea that they will improve  his virility shovels them straight into his lap)"
    },
    {
      id: 138,
      text: "Simple Subtraction"
    },
    {
      id: 139,
      text: "Simple subtraction"
    },
    {
      id: 140,
      text: "Simply a matter of work"
    },
    {
      id: 141,
      text: "Slow preparation, fast execution"
    },
    {
      id: 142,
      text: "Spectrum analysis"
    },
    {
      id: 143,
      text: "State the problem as clearly as possible"
    },
    {
      id: 144,
      text: "State the problem in words as clearly as possible"
    },
    {
      id: 145,
      text: "Take a break"
    },
    {
      id: 146,
      text: "Take away the elements in order of apparent non-importance"
    },
    {
      id: 147,
      text: "Take away the important parts"
    },
    {
      id: 148,
      text: "Tape your mouth (given by Ritva Saarikko)"
    },
    {
      id: 149,
      text: "The inconsistency principle"
    },
    {
      id: 150,
      text: "The most easily forgotten thing is the most important"
    },
    {
      id: 151,
      text: "The most important thing is the thing most easily forgotten"
    },
    {
      id: 152,
      text: "The tape is now the music"
    },
    {
      id: 153,
      text: "Think - inside the work -outside the work"
    },
    {
      id: 154,
      text: "Think of the radio"
    },
    {
      id: 155,
      text: "Tidy up"
    },
    {
      id: 156,
      text: "Towards the insignificant"
    },
    {
      id: 157,
      text: "Trust in the you of now"
    },
    {
      id: 158,
      text: "Try faking it (from Stewart Brand)"
    },
    {
      id: 159,
      text: "Turn it upside down"
    },
    {
      id: 160,
      text: "Twist the spine"
    },
    {
      id: 161,
      text: "Use 'unqualified' people"
    },
    {
      id: 162,
      text: "Use `unqualified' people"
    },
    {
      id: 163,
      text: "Use an old idea"
    },
    {
      id: 164,
      text: "Use an unacceptable color"
    },
    {
      id: 165,
      text: "Use cliches"
    },
    {
      id: 166,
      text: "Use fewer notes"
    },
    {
      id: 167,
      text: "Use filters"
    },
    {
      id: 168,
      text: "Use something nearby as a model"
    },
    {
      id: 169,
      text: "Use your own ideas"
    },
    {
      id: 170,
      text: "Voice your suspicions"
    },
    {
      id: 171,
      text: "Water"
    },
    {
      id: 172,
      text: "What are the sections sections of?    Imagine a caterpillar moving"
    },
    {
      id: 173,
      text: "What are you really thinking about just now?"
    },
    {
      id: 174,
      text: "What context would look right?"
    },
    {
      id: 175,
      text: "What is the reality of the situation?"
    },
    {
      id: 176,
      text: "What is the simplest solution?"
    },
    {
      id: 177,
      text: "What mistakes did you make last time?"
    },
    {
      id: 178,
      text: "What to increase? What to reduce? What to maintain?"
    },
    {
      id: 179,
      text: "What were you really thinking about just now?"
    },
    {
      id: 180,
      text: "What would your closest friend do?"
    },
    {
      id: 181,
      text: "What wouldn't you do?"
    },
    {
      id: 182,
      text: "When is it for?"
    },
    {
      id: 183,
      text: "Where is the edge?"
    },
    {
      id: 184,
      text: "Which parts can be grouped?"
    },
    {
      id: 185,
      text: "Work at a different speed"
    },
    {
      id: 186,
      text: "Would anyone want it?"
    },
    {
      id: 187,
      text: "You are an engineer"
    },
    {
      id: 188,
      text: "You can only make one dot at a time"
    },
    {
      id: 189,
      text: "You don't have to be ashamed of using your own ideas"
    },
    {
      id: 190,
      text: "[blank white card]"
    }
  ]

var getStrategy = function(args) { 
    var id = args.id;
    return strategyData.filter(strategy => {
        return strategy.id == id;
    })[0];
}

var getStrategies = function() {
      return strategyData;
    }

var getRandom = function() {
  var rando = parseInt(Math.floor(Math.random() * 190) + 1, 10);
  return strategyData.filter(strategy => {
    return strategy.id == rando;
})[0];
}

var root = {
    strategy: getStrategy,
    strategies: getStrategies,
    random: getRandom
};

// Create an express server and a GraphQL endpoint
var app = express();
app.use(cors());
app.use('/graphql', express_graphql({
    schema: schema,
    rootValue: root,
    graphiql: true
}));
app.listen(4000, () => console.log('Express GraphQL Server Now Running On localhost:4000/graphql'));
