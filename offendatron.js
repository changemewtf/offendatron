function getBad() { return getRandom(['{{bad}}', '"{{bad}}"']); }
function getGood() { return getRandom(['{{good}}', '"{{good}}"']); }
function goodBad() { return getRandom([getBad(), getGood()]); }

var bad = [
  "how " + goodBad() +
    " they " + getRandom(["really ",""]) +
    "are",
  "what a crime it is to be " + getBad(),
  "how {{good}} people are terrible",
  "how SO not {{good}} they are",
  "how SO \"not {{good}}\" they are",
  "how much everyone hates them",
  "how much {{good}} people hate them",
  "how HARD it is to get {{get}}",
  "how EASY {{good}} people have it",
  "how SELFISH {{good}} people are",
  "how COWARDLY {{good}} people are",
  "their beef with EVERY SINGLE PERSON who gets {{get}}",
  "their beef with ABSOLUTELY ANYONE who is {{good}}",
  "their problem with being {{good}}",
  "how \"we deserve to get {{get}}\"",
  "how \"we deserve to be {{good}}\"",
  "how everything awful happens because of " + getGood() + " people",
  "how they're people",
  "how {{bad}} people matter",
  "how only facts matter",
  "how only feelings matter",
];

var they = [
  "I wish {{badGrp}}" + getBad() + " people would stop complaining about " + getRandom(bad) + ".",
  "I wish {{badGrp}}" + getBad() + " people would stop gloating about " + getRandom(bad) + ".",
  "Do " + getBad() + " people EVER shut up about " + getRandom(bad) + "?",
  "Why don't " + getBad() + " people just get over " + getRandom(bad) + "?",
  "Someone " + getBad() + " will always talk about " + getRandom(bad) + ".",
  "Are you really " + getBad() + "? Is it true " + getRandom(bad) + "?",
  "You're not like other " + getBad() + " people! Especially considering " + getRandom(bad) + ".",
  "God I hate " + getBad() + " people.",
];

var me = [
  "I chose to be {{good}}",
  "I was born {{good}}",
  "I was born {{bad}}",
  "being {{good}} is borderline illegal these days",
  "I didn't like a {{bad}} person's smell once",
  "I only hang out with {{good}} people",
  "I learned all about {{good}} rhetoric",
  "some of my best friends are {{good}}",
  "I have a {{good}} friend who doesn't care",
  "I have a {{good}} friend that says it's hurtful",
  "I didn't choose to be {{good}}",
  "I am {{good}}",
//  "I am {{bad}}",
//  "I am not {{good}}",
  "I am not {{bad}}",
//  "I am actually {{bad}}",
  "I am actually {{good}}",
  "I'm already getting {{get}}",
];

var connects = ["and", "but", "so", "because"];

var good = [
  "I don't deserve to be held to a different standard.",
  "I should get {{get2}}.",
  "I should get {{get2}}, too.",
  "I should get {{get2}} before they do.",
  "and I DEMAND {{get2}}!",
  "{{get}}? I'm 38% LESS likely to get it at all.",
  "I'm the only one who deserves to get {{get2}}.",
  "I learned that getting {{get2}} is easier if " + getRandom([
   "you just don't care about other people's feelings.",
   "you don't think about it.",
   "everyone is already dead.",
   "God wills it.",
   "you just stop giving a fuck.",
   "you're born into it",
  ]),
  "please don't judge me for it!",
  "please, feel free to just ignore me.",
  "I'm not that {{bad}} either. Who's going to listen to me?",
  "I just don't see the problem.",
  "what do you expect me to do about it?",
  "I've never even SEEN a real " + goodBad() + " person.",
  "I was born with this {{good}} heart.",
  "you don't see me making a fuss.",
  "you don't see me demanding special treatment.",
  "you don't see me throwing a tantrum.",
  "I actually wanted to be.",
  "I just don't feel safe around " + goodBad() + " people.",
  "you can't even prove that you're {{bad}}.",
  "I know what I'm talking about because I'm {{good}}.",
  "I just chose to NOT be {{bad}}.",
  "you're just embarrassingly {{bad}}.",
  "you're just jealous that you're not getting {{reward}}.",
];

var problems = [
  {bad: "poor", good: "rich"},
  {bad: ["gay", "bi", "lesbian"], good: "straight"},
  {bad: "weird", good: "normal"},
  {bad: "sick", good: "healthy"},
  {bad: "religious", good: "skeptical"},
  {bad: "ugly", good: "beautiful"},
  {bad: "depressed", good: "happy"},
  {bad: "politically correct", good: "antisocial"},
  {bad: "foreign", good: "native-born"},
  {bad: "feminist", good: ["misogynist", "male", "straight white male"]},
  {bad: "white", good: "actually white"},
  {bad: "American", good: "human"},
  {bad: "Muslim", good: "Christian"},
  {bad: "atheist", good: "pious"},
  {bad: "black", good: "white"},
  {bad: "short", good: "tall"},
  {bad: "oppressed", good: "Donald Trump"},
  {bad: "privileged", good: "oppressed"},
  {bad: "liberal", good: "gorgeous, insanely rich, and care-free"},
  {bad: "conservative", good: "procrastinating"},
  {bad: "kinky", good: "vanilla"},
  {bad: "furry", good: "normal"},
  {bad: "normal", good: "neurotic"},
  {bad: "misogynist", good: "female"},
  {bad: ["misandrist", "man-hating", "bra-burning"], good: "male"},
  {bad: "outraged", good: "incredibly fucking zen"},
  {bad: "Jewish", good: "literally Aryan supremacist"},
  {bad: "bigoted", good: "woke"},
  {bad: "racist", good: "colorblind"},
  {bad: "tiny", good: "enormous"},
  {bad: "fat", good: "thin"},
  {bad: "thin", good: "fat"},
  {bad: "curvy", good: "bony"},
  {bad: "sex-positive", good: "sex-critical"},
  {bad: "sex-critical", good: "slutty"},
  {bad: "gender-critical", good: "trans"},
  {bad: "sexy", good: "plain"},
  {bad: "attractive", good: "homely"},
  {bad: "failed", good: "much cooler"},
  {bad: "successful", good: "failure"},
  {bad: "perfect", good: "defective"},
  {bad: "queer", good: "boring"},
  {bad: "non-binary", good: "cisgendered"},
  {bad: "disabled", good: "downright Olympian"},
  {bad: "retarded", good: "utterly awful"},
  {bad: "problematic", good: "politically correct"},
  {bad: "sighted", good: "blind"},
  {bad: "blind", good: "deaf"},
  {bad: "intellectual", good: "stupid"},
  {bad: "thin-skinned", good: "rotten to the core"},
  {bad: "hungry", good: "affluent"},
  {bad: "friendly", good: "horrendous"},
  {bad: "bad", good: "flawed"},
  {bad: "fake", good: "real"},
  {bad: "real", good: "actually real"},
  {bad: "Twitter", good: "Tumblr"},
  {bad: "cat", good: "dog"},
  {bad: "vegetarian", good: "omnivore"},
  {bad: "Scientologist", good: "Mormon"},
  {bad: "nerdy", good: "normie"},
  {bad: "needy", good: "generous"},
  {bad: "weak", good: "strong"},
  {bad: "artsy", good: "scientific"},
  {bad: "abused", good: "enabling"},
  {bad: "delusional", good: "rational"},
];

var globalGood = ["just a decent human being"];

var lovedOne = [
  "husband", "lover", "wife", "spouse", "S.O.", "mistress",
  "friend", "best friend", "cat", "dog", "baby", "child",
  "dad", "mom", "grandma", "tamagotchi", "unborn son",
  "unborn daughter", "partner", "unborn baby", "future husband",
  "illegitimate offspring"
];

var rewards = [
  "a small loan of a million dollars",
  "obscene amounts of money far beyond human necessity",
  "a better life than some " + extractFrom(getRandom(problems).good) + " 18-year-old on Reddit",
  "shameless, life-alteringly good sex on a regular basis",
  "a quiet, respectful dinner at the table with the family",
  "social validation in life",
  "the medicine your " + getRandom(lovedOne) + " needs to live",
  "all of the land, influence, and deadly weapons",
  "the attention of millions of Americans",
  "a Nobel Peace Prize",
  "exactly what " + getRandom(["I","they","we","you"]) + " deserve",
  "a lifetime utterly devoid of fear, risk, or discomfort",
  "into heaven for free",
  "a happy life",
  "fair compensation for labor",
  "life, liberty and the pursuit of happiness",
  "enough drugs to forget the pain",
  "a feminist cookie",
  "immediate respect from everyone",
  "basic human rights",
  "eternal happiness",
  "the self-satisfaction of being better than them",
  "anything at all, ever",
  "deep, unconditional sympathy from someone who has known loss or suffering",
  "to fulfill every wild sexual fantasy with abandon",
  "the last lifeboat",
  "credit for hard work",
  "suffrage",
  "the right to vote",
  "a decent fucking role model",
  "a job offer",
  "that chick's phone number",
  "relocated to San Francisco"
];

function getRandom(items) {
  return items[Math.floor(Math.random() * items.length)];
}

function getConnector() {
  return getRandom([", ",", ",", "," ","... "]) +
    getRandom(connects) +
    " ";
    //getRandom([", "," ","... "," "]);
}

function getRandomTemplate() {
  return getRandom(they) + " " +
    getRandom(me) + getConnector() +
    getRandom(good);
}

function shouldSwapGoodBad() {
  return getRandom([true,false]);
}

function shouldGetSecondProblem() {
  //return getRandom([true,false]);
  return false;
}

function extractFrom(item) {
  if (item instanceof Array) {
    return getRandom(item);
  } else {
    return item;
  }
}

function Offendatron() {
  this.problem = getRandom(problems);
  this.bad = extractFrom(this.problem.bad);
  this.good = extractFrom(this.problem.good);
  if (shouldSwapGoodBad()) {
    var tmp = this.good;
    this.good = this.bad;
    this.bad = tmp;
  }
  if (shouldGetSecondProblem()) {
    this.bad = extractFrom(getRandom(problems).bad);
  }
  this.get = getRandom(rewards);
  this.get2 = this.get;
  while(this.get2 == this.get) {
    this.get2 = getRandom(rewards);
  }

  this.badGrp = getRandom(["these ", "those "]);

  this.good = '<span class="good">' + this.good + '</span>';
  this.bad = '<span class="bad">' + this.bad + '</span>';

  var tmpl = Handlebars.compile(getRandomTemplate(), {noEscape: true});
  this.whine = tmpl(this);
};

if (typeof module != 'undefined') {
  module.exports = {
    Offendatron: Offendatron
  };
}
