import {FoodSearch} from './FoodSearch.js';

window.players = (value) => {
  generatePlayerCol(value);
}

window.generatePlayerCol = (name) => {
  const gameContainer = document.getElementById('game-container');
  const player = document.createElement('div');
  player.className = 'player';
  const img = document.createElement('img');
  img.className = 'player-avatar';
  player.appendChild(img);
  const nameContainer = document.createElement('div');
  player.appendChild(nameContainer);
  
  if (name) nameContainer.innerHTML = `<h2>${name}</h2>`;
  else fetch('https://randomuser.me/api/?nat=es').then(response => response.json()).then(data => nameContainer.innerHTML = `<h2>${data.results[0].name.first}</h2>`);
  
  const generate = document.createElement('button');
  generate.innerText = 'Generate';
  player.appendChild(generate);

  document.getElementsByClassName
  
  const foodsContainer = document.createElement('div');
  foodsContainer.className = 'foods-container';
  player.appendChild(foodsContainer); 
  generate.onclick = () => window.generate(foodsContainer);
  gameContainer.appendChild(player);

  fetchGiphyImgSrc().then(src => img.src = src);

  async function fetchGiphyImgSrc() {
    const baseURL = 'https://api.giphy.com/v1/gifs/random?';
    const key = 'api_key=fspS3kFGZiUnAnQhsXdpNj7GIOY0b3Kv';
    const tag = '&tag=' + 'funny%20face'; // &rating=pg-13
    console.log(tag)
    const responseFace = await fetch(baseURL + key + tag);
    const dataFace = await responseFace.json();
    console.log(dataFace);
    return dataFace.data.images.fixed_height.url;
  }

};

window.generate = (DOMElement) => {
  console.log('this',DOMElement);
  new FoodSearch(foodlist[Math.floor(Math.random() * foodlist.length)], DOMElement);
  // document.getElementById('food').innerText = searchWikipedia(randFood);
}

/////////////////////////////////////////////////////////

const foodlist = ['oregano', 'mayonnaise', 'soymilk', 'tofu', 'butter', 'spinach', 'halibut', 'catfish', 'broccoli', 'almond extract', 'margarine', 'Irish cream liqueur', 'lamb', 'curry paste', 'cream of tartar', 'tomatoes', 'pepper', 'lobsters', 'wasabi', 'horseradish', 'spearmint', 'sherry', 'beets', 'chard', 'paprika', 'tomato paste', 'blueberries', 'swiss cheese', 'cherries', 'succotash', 'olives', 'barley sugar', 'brown rice', 'cooking wine', 'cocoa powder', 'applesauce', 'blue cheese', 'eggplants', 'apple pie spice', 'graham crackers', 'water', 'heavy cream', 'flounder', 'salt', 'turnips', 'blackberries', 'chutney', 'green beans', 'buttermilk', 'habanero chilies', 'bacon grease', 'kidney beans', 'pecans', 'chicken', 'dill', 'pico de gallo', 'onions', 'maraschino cherries', 'huckleberries', 'limes', 'almonds', 'strawberries', 'summer squash', 'grits', 'baking powder', 'oranges', 'celery seeds', 'crayfish', 'bean sauce', 'cayenne pepper', 'chives', 'prosciutto', 'rice', 'chipotle peppers', 'granola', 'sushi', 'five-spice powder', 'rose water', 'barley', 'baking soda', 'anchovies', 'steak', 'red beans', 'scallops', 'grapefruits', 'apple butter', 'jicama', 'cranberries', 'coconut milk', 'caviar', 'adobo', 'baguette', 'chocolate', 'balsamic vinegar', 'pears', 'Tabasco sauce', 'sesame seeds', 'marshmallows', 'artichokes', 'lemon Peel', 'sea cucumbers', 'sage', 'squid', 'plantains', 'snow peas', 'brandy', 'focaccia', 'squash', 'rum', 'red pepper flakes', 'salsa', 'snap peas', 'tonic water', 'tortillas', 'mustard seeds', 'Cappuccino Latte', 'black beans', 'carrots', 'pesto', 'vermouth', 'lemon juice', 'beans', 'rice paper', 'watermelons', 'moo shu wrappers', 'veal', 'parsnips', 'vanilla', 'pumpkins', 'cumin', 'Canadian bacon', 'white chocolate', 'cornstarch', 'wine', 'coriander', 'cream cheese', 'Mandarin oranges', 'leeks', 'anchovy paste', 'dates', 'peanuts', 'portabella mushrooms', 'cinnamon', 'hot sauce', 'ham', 'bean threads', 'jelly beans', 'cloves', 'split peas', 'water chestnuts', 'hoisin sauce', 'ice cream', 'jack cheese', 'corned beef', 'half-and-half', 'pine nuts', 'tomato juice', 'cheddar cheese', 'duck', 'radishes', 'pink beans', 'honeydew melons', 'sweet chili sauce', 'pumpkin seeds', 'ale', 'remoulade', 'snapper', 'french fries', 'raw sugar', 'herring', 'cucumbers', 'kiwi', 'red chile powder', 'rhubarb', 'bok choy', 'pig\'s feet', 'corn syrup', 'coconuts', 'onion powder', 'pea beans', 'papayas', 'walnuts', 'panko bread crumbs', 'lemon grass', 'turtle', 'rabbits', 'turkeys', 'wine vinegar', 'mesclun greens', 'bouillon', 'cremini mushrooms', 'olive oil', 'black-eyed peas', 'dumpling', 'figs', 'brown sugar', 'prunes', 'zest', 'couscous', 'Goji berry', 'cashew nut', 'berries', 'sour cream', 'custard', 'feta cheese', 'trout', 'asparagus', 'guavas', 'cornmeal', 'Romano cheese', 'raspberries', 'nectarines', 'andouille sausage', 'parsley', 'tomato sauce', 'potato chips', 'ancho chile peppers', 'acorn squash', 'kumquats', 'shrimp', 'arugula', 'chile peppers', 'crabs', 'brussels sprouts', 'unsweetened chocolate', 'pasta', 'corn flour', 'ginger ale', 'sugar', 'beef', 'kale', 'monkfish', 'liver', 'clams', 'won ton skins', 'Worcestershire sauce', 'peas', 'navy beans', 'mussels', 'brunoise', 'sweet potatoes', 'tarragon', 'rosemary', 'dried leeks', 'truffles', 'mushrooms', 'creme fraiche', 'poultry seasoning', 'bass', 'barbecue sauce', 'aioli', 'chicory', 'Kahlua', 'bourbon', 'vinegar', 'mackerel', 'salmon', 'chili powder', 'celery', 'pheasants', 'molasses', 'capers', 'amaretto', 'fennel seeds', 'cannellini beans', 'chestnuts', 'red snapper', 'eel', 'tea', 'avocados', 'apples', 'prawns', 'allspice', 'peanut butter', 'fennel', 'Marsala', 'chili sauce', 'date sugar', 'alfredo sauce', 'grouper', 'marmalade', 'yogurt', 'buckwheat', 'lettuce', 'lemons', 'white beans', 'quail', 'cauliflower', 'thyme', 'garlic powder', 'passion fruit', 'chicken liver', 'geese', 'spaghetti squash', 'shitakes', 'red cabbage', 'peaches', 'lentils', 'melons', 'mozzarella', 'beer', 'green onions', 'colby cheese', 'cantaloupes', 'poppy seeds', 'milk', 'sausages', 'oatmeal', 'tuna', 'fish sauce', 'honey', 'sazon', 'pork', 'romaine lettuce', 'apricots', 'tomato puree', 'plum tomatoes', 'orange peels', 'flour', 'chambord', 'plums', 'hash browns', 'pickles', 'broth', 'flax seed', 'chorizo sausage', 'rice wine', 'pinto beans', 'hamburger', 'grapes', 'cider vinegar', 'almond paste', 'mascarpone', 'pineapples', 'garlic', 'gorgonzola', 'macaroni', 'potatoes', 'hazelnuts', 'gouda', 'ricotta cheese', 'almond butter', 'zinfandel wine', 'coffee', 'ketchup', 'powdered sugar', 'corn', 'raisins', 'coconut oil', 'cookies', 'vanilla bean', 'bananas', 'cilantro', 'haddock', 'vegemite', 'cactus', 'chai', 'artificial sweetener', 'pomegranates', 'alligator', 'rice vinegar', 'provolone', 'soybeans', 'angelica', 'broccoli raab', 'pancetta', 'sardines', 'wild rice', 'soy sauce', 'swordfish', 'aquavit', 'basil', 'cod', 'mint', 'asiago cheese', 'sweet peppers', 'bay leaves', 'black olives', 'canola oil', 'venison', 'cottage cheese', 'curry leaves', 'okra', 'sunflower seeds', 'breadcrumbs', 'bagels', 'Parmesan cheese', 'curry powder', 'cream', 'English muffins', 'condensed milk', 'breadfruit', 'Havarti cheese', 'croutons', 'brazil nuts', 'bruschetta', 'pistachios', 'bacon', 'octopus', 'gelatin', 'cider', 'ginger', 'eggs', 'mustard', 'chickpeas', 'bean sprouts', 'maple syrup', 'borscht', 'lima beans', 'sauerkraut', 'tartar sauce', 'shallots', 'cabbage'];