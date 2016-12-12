var levels = [
  {
    name: '1justify-content 1',
    instructions: {
      'no': '<p>Så bra, dere rakk det! Grinchen har tullet til flex-instillingene, og dere må gjennom noen steg hjelpe nissen med å finne sekken sin, rudolf med å få kransen rundt hodet, og snømannen til å komme seg hjem i snøkulen sin. </br></br>Hint: <code>justify-content</code> (hold musepekeren over for gyldige properties) </p> <img src="http://code.org/api/hour/begin_flexbox_froggy.png">' 
	},
    board: 'g',
    style: {'justify-content': 'flex-end'},
    before: "#pond {\n  display: flex;\n",
    after: "}"
  },
  {                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      
    name: '2justify-content 3',
    instructions: {
      'no': '<p>Full ståhei, men denne er heldigvis ganske grei å ordne opp i! Få alle tilbake på riktig plass.  </br></br>Her er noen flex-hint som kan hjelpe med å løse oppgaven: </p> <ul><li><code>justify-content</code></li><li><code>align-items</code></li><li><code>flex-direction</code></li><li><code>order</code></li><li><code>align-self</code></li><li><code>flex-wrap</code></li><li><code>flex-flow</code></li><li><code>align-content</code>'
	},
    board: 'gyr',
    style: {'justify-content': 'space-around'},
    before: "#pond {\n  display: flex;\n",
    after: "}"
  },
  {
    name: '3align-items 1',
    instructions: {
      'no': '<p>Æsj, nå har de mistet hverandre igjen! Her er det bare å rydde opp! </br></br>Her er noen flex-hint som kan hjelpe med å løse oppgaven: </p> <ul><li><code>justify-content</code></li><li><code>align-items</code></li><li><code>flex-direction</code></li><li><code>order</code></li><li><code>align-self</code></li><li><code>flex-wrap</code></li><li><code>flex-flow</code></li><li><code>align-content</code>' 
	},
    board: 'gyr',
    style: {'align-items': 'flex-end'},
    before: "#pond {\n  display: flex;\n",
    after: "}"
  },
  {
    name: '4align-items 3',
    instructions: {
      'no': '<p>De var visst ikke helt fornøyd, jeg tror du må gi dem litt mer plass rundt dem. </br></br>Her er noen flex-hint som kan hjelpe med å løse oppgaven: </p> <ul><li><code>justify-content</code></li><li><code>align-items</code></li><li><code>flex-direction</code></li><li><code>order</code></li><li><code>align-self</code></li><li><code>flex-wrap</code></li><li><code>flex-flow</code></li><li><code>align-content</code>'
	},
    board: 'gyr',
    style: {'justify-content': 'space-around', 'align-items': 'flex-end'},
    before: "#pond {\n  display: flex;\n",
    after: "}"
  },
  {
    name: '5flex-direction 3',
    instructions: {
     'no': '<p>Nei, hva gjør snømannen med nissen sin sekk? Dette må ordnes opp i med én gang!</br></br>Her er noen flex-hint som kan hjelpe med å løse oppgaven: </p> <ul><li><code>justify-content</code></li><li><code>align-items</code></li><li><code>flex-direction</code></li><li><code>order</code></li><li><code>align-self</code></li><li><code>flex-wrap</code></li><li><code>flex-flow</code></li><li><code>align-content</code>'
    },
    board: 'gyr',
    style: {'flex-direction': 'row-reverse', 'justify-content': 'flex-end'},
    before: "#pond {\n  display: flex;\n",
    after: "}"
  },
  {
    name: '6flex-direction 5',
    instructions: {
      'no': '<p>Alle står i kø til snøkulen, hjelp snømannen med å jage nissen og rudolf tilbake hvor de hører hjemme før han smelter!</br></br>Her er noen flex-hint som kan hjelpe med å løse oppgaven: </p> <ul><li><code>justify-content</code></li><li><code>align-items</code></li><li><code>flex-direction</code></li><li><code>order</code></li><li><code>align-self</code></li><li><code>flex-wrap</code></li><li><code>flex-flow</code></li><li><code>align-content</code>'
	},
    board: 'gyr',
    style: {'flex-direction': 'column-reverse', 'justify-content': 'space-between'},
    before: "#pond {\n  display: flex;\n",
    after: "}"
  },
  {
    name: '7flex-direction 6',
    instructions: {
      'no': '<p>Her ser tyngdekraften ut til å ha tullet litt, hjelp dem med å komme seg ned på bakken igjen. </br></br>Her er noen flex-hint som kan hjelpe med å løse oppgaven: </p> <ul><li><code>justify-content</code></li><li><code>align-items</code></li><li><code>flex-direction</code></li><li><code>order</code></li><li><code>align-self</code></li><li><code>flex-wrap</code></li><li><code>flex-flow</code></li><li><code>align-content</code>'
	},
    board: 'gyr',
    style: {'flex-direction': 'row-reverse', 'justify-content': 'center', 'align-items': 'flex-end'},
    before: "#pond {\n  display: flex;\n",
    after: "}"
  },
  {
    name: '8order 1',
    instructions: {
      'no': '<p>Frekke Rudolf, han gir seg bare ikke. Få ham vekk fra snøkulen før han fryser vekk sin røde nese.</br></br>Her er noen flex-hint som kan hjelpe med å løse oppgaven: </p> <ul><li><code>justify-content</code></li><li><code>align-items</code></li><li><code>flex-direction</code></li><li><code>order</code></li><li><code>align-self</code></li><li><code>flex-wrap</code></li><li><code>flex-flow</code></li><li><code>align-content</code>'
	},
	board: 'gyr',
    selector: '> :nth-child(2)',
    classes: {'#pond, #background': 'wrap'},
    style: {'order': '2'},
    before: "#pond {\n  display: flex;\n}\n\n.rudolf {\n",
    after: "}"
  },
  {
    name: '9order 2',
    instructions: {
		'no': '<p>Snømannen har rotet seg bort blant alle nissene. Hjelp ham å finne frem til snøkulen sin!</br></br>Her er noen flex-hint som kan hjelpe med å løse oppgaven: </p> <ul><li><code>justify-content</code></li><li><code>align-items</code></li><li><code>flex-direction</code></li><li><code>order</code></li><li><code>align-self</code></li><li><code>flex-wrap</code></li><li><code>flex-flow</code></li><li><code>align-content</code>'
    },
    board: 'gggrg',
    selector: '> :nth-child(4)',
    classes: {'#pond, #background': 'wrap'},
    style: {'order': '-1'},
    before: "#pond {\n  display: flex;\n}\n\n.snømann {\n",
    after: "}"
  },
  {
    name: '10align-self 1',
    instructions: {
      'no': '<p>Rudolf, da. Har du mistet kransen din på bakken? Ser ut til at vi må hjelpe ham ned til den. </br></br>Her er noen flex-hint som kan hjelpe med å løse oppgaven: </p> <ul><li><code>justify-content</code></li><li><code>align-items</code></li><li><code>flex-direction</code></li><li><code>order</code></li><li><code>align-self</code></li><li><code>flex-wrap</code></li><li><code>flex-flow</code></li><li><code>align-content</code>'
	},
    board: 'ggygg',
    selector: '> :nth-child(3)',
    style: {'align-self': 'flex-end'},
    before: "#pond {\n  display: flex;\n  align-items: flex-start;\n}\n\n.rudolf {\n",
    after: "}"
  },
  {
    name: '11align-self 2',
    instructions: {
    'no': '<p>Rudolf har vært litt ivrig etter å komme igang til jul, og har tatt fra nissen noen av sekkene. Få vekk Rudolf tilbake til kransen sin og gi nissen sekken tilbake! </br></br>Her er noen flex-hint som kan hjelpe med å løse oppgaven: </p> <ul><li><code>justify-content</code></li><li><code>align-items</code></li><li><code>flex-direction</code></li><li><code>order</code></li><li><code>align-self</code></li><li><code>flex-wrap</code></li><li><code>flex-flow</code></li><li><code>align-content</code>'
    },
	board: 'ygygg',
    selector: '> .yellow',
    style: {'align-self': 'flex-end', 'order': '2'},
    before: "#pond {\n  display: flex;\n  align-items: flex-start;\n}\n\n.rudolf {\n",
    after: "}"
  },
  {
    name: '12flex-wrap 1',
    instructions: {
    'no': '<p>På tide å "wrap it up" snart, få alle tilbake på sin rette plass! </br></br>Her er noen flex-hint som kan hjelpe med å løse oppgaven: </p> <ul><li><code>justify-content</code></li><li><code>align-items</code></li><li><code>flex-direction</code></li><li><code>order</code></li><li><code>align-self</code></li><li><code>flex-wrap</code></li><li><code>flex-flow</code></li><li><code>align-content</code>'
    },
    board: 'ygggggr',
    style: {'flex-wrap': 'wrap'},
    before: "#pond {\n  display: flex;\n",
    after: "}"
  },
  {
    name: '13flex-flow 1',
    instructions: {
    'no': '<p>Nissen prøver å få alle på rekke og rad for å gjøre opptelling til jul, men de ser ut til å ha misforstått oppstillingskonseptet litt, kan du hjelpe dem? </br></br>Her er noen flex-hint som kan hjelpe med å løse oppgaven: </p> <ul><li><code>justify-content</code></li><li><code>align-items</code></li><li><code>flex-direction</code></li><li><code>order</code></li><li><code>align-self</code></li><li><code>flex-wrap</code></li><li><code>flex-flow</code></li><li><code>align-content</code>'
	},
    board: 'gggggrrrrryyyyy',
    style: {'flex-flow': 'column wrap'},
    before: "#pond {\n  display: flex;\n",
    after: "}"
  },
  {
    name: '14align-content 3',
    instructions: {
		'no': '<p>Oida, hva er det som har skjedd her? Den ser nok vanskeligere ut enn den er, dere greier dette fint! </br></br>Her er noen flex-hint som kan hjelpe med å løse oppgaven: </p> <ul><li><code>justify-content</code></li><li><code>align-items</code></li><li><code>flex-direction</code></li><li><code>order</code></li><li><code>align-self</code></li><li><code>flex-wrap</code></li><li><code>flex-flow</code></li><li><code>align-content</code>'
    },
    board: 'rgggyrgggyrgggy',
    classes: {'#pond, #background': 'wrap'},
    style: {'flex-direction': 'column-reverse', 'align-content': 'center'},
    before: "#pond {\n  display: flex;\n  flex-wrap: wrap;\n",
    after: "}"
  },
  {
    name: '15align-content 4',
    instructions: {
		'no': '<p>Huff, her har det gått skikkelig i ball, men nå har vi snart løst floken som Grinchen har laget - siste innspurt nå! </br></br>Her er noen flex-hint som kan hjelpe med å løse oppgaven: </p> <ul><li><code>justify-content</code></li><li><code>align-items</code></li><li><code>flex-direction</code></li><li><code>order</code></li><li><code>align-self</code></li><li><code>flex-wrap</code></li><li><code>flex-flow</code></li><li><code>align-content</code>'
    },
    board: 'rggggyy',
    style: {'flex-direction': 'column-reverse', 'flex-wrap': 'wrap-reverse', 'align-content': 'space-between', 'justify-content': 'center'},
    before: "#pond {\n  display: flex;\n",
    after: "}"
  }
];

var levelWin = {
  name: 'win',
  instructions: {
    'en': '<p>Yey! Du hjalp nissen, rudolf og snømannen med å finne tilbake til tingene sine. Se hvor glade de ble!</p><p>Men Grinchen er fortsatt ingen steder å se, du må skynde deg videre for å fange ham!</p>'
  },
  board: 'gyrgyrgyrgyrgyrgyrgyrgyrg',
  classes: {'#pond, #background': 'wrap'},
  style: {},
  before: "#pond {\n  display: flex;\n",
  after: "}"
};
