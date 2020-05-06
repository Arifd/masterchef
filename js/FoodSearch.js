export class FoodSearch {
  constructor(term, playerColDOMElement) {
    this._origTerm = term;
    this._playerColDOMElement = playerColDOMElement;
    this.status; // is the class still fetching data?
    this._info = {};
    this.init();
    console.log(this)
  }

  init() {
    // this.status = this.fetchWikiInfo(this._id);
    this.fetchWikiInfo(this._origTerm);
  }

  async fetchWikiInfo(term) {
    console.log('hallo')
    const baseURL = 'https://en.wikipedia.org/w/api.php?origin=*&format=json';
    
    // perform a regular search
    const responseQuery = await fetch(baseURL + '&action=query&list=search&srsearch=' + term);
    const dataQuery = await responseQuery.json();
    this._info.wikiPageId = dataQuery.query.search[0].pageid;
    this._info.wikiTitle = dataQuery.query.search[0].title;
    
    // ask for an imgSrc and intro text and language links related to previous search
    const responseMoreInfo = await fetch(baseURL + `&action=query&titles=${this._info.wikiTitle}&prop=extracts|pageimages|langlinks&lllimit=500&pithumbsize=500&exintro`);
    const dataMoreInfo = await responseMoreInfo.json();
    const _langlinks = dataMoreInfo.query.pages[this._info.wikiPageId].langlinks;
    console.log('languages', _langlinks);
    const _wikiESTitle = _langlinks ? _langlinks.filter(langlink => langlink.lang === "es") : [];
    this._info.wikiESTitle = _wikiESTitle.length ? _wikiESTitle[0]['*'] : await translate(this._info.wikiTitle);
    
    // if a spanish wikipedia entry exists, grab its extract info
    if (_wikiESTitle.length) await fetchSpanishWikiText(this);

    this._info.wikiImgSrc = dataMoreInfo.query.pages[this._info.wikiPageId].thumbnail.source;
    this._info.wikiIntro = dataMoreInfo.query.pages[this._info.wikiPageId].extract;

    async function fetchSpanishWikiText(self) {
      console.log('arif', self._info.wikiESTitle)
      const response = await fetch(`https://es.wikipedia.org/w/api.php?origin=*&format=json&action=query&titles=${self._info.wikiESTitle}&prop=extracts&exintro&redirects=1&indexpageids`);
      const data = await response.json();
      console.log('aaarif', data);
      self._info.wikiESIntro = data.query.pages[data.query.pageids[0]].extract;
      console.log('ARIF', self._info);
    }

    async function translate(phrase) {
      console.log('translating', phrase);
      // figure out if we need to google translate the title
      phrase = encodeURI(phrase);
      // https://translate.googleapis.com/translate_a/single?client=gtx&sl=auto&tl=es&dt=t&q=
      const key = 'trnsl.1.1.20200505T215042Z.7ebcd6d71dc785a6.1e1696bb0e3077aedad98d2c0f1915661f729585';
      const responseTranslation = await fetch('https://translate.yandex.net/api/v1.5/tr.json/translate?key=' + key + '&text=' + encodeURI(wikiTitle) + '&lang=en-es' + '&format=plain')
      const dataTranslation = await responseTranslation.json();
      const translation = dataTranslation.text[0];
      console.log('translation', translation);
      return translation;
    }

    // fetch('https://translate.googleapis.com/translate_a/single?client=gtx&sl=auto&tl=es&dt=t&q=cheese%20on%20toast')
    //   .then(response=>response.json())
    //   .then(data=>console.log(data[0][0][0]));

    // Create a DOM Object with the information
    this.drawInfo();

    console.log('finito')
  }

  drawInfo(info) {
    // create an element with mouseover events to display info
    const html = `<div class="foodSearch-container");">
    <img class="food-search-photo" src="${this._info.wikiImgSrc}">
    <div class="food-search-name">${this._info.wikiESTitle}</div>
    <div class="popup">
    <h2>${this._info.wikiESTitle}</h2>
    <p>Original Term: ${this._origTerm}</p>
    <p>${this._info.wikiESIntro ? this._info.wikiESIntro : this._info.wikiIntro}</p>
    </div>
    </div>`;
    this._playerColDOMElement.insertAdjacentHTML('beforeend', html);

    // const img = document.createElement('img');
    // img.className = 'food-photo';
    // img.src = wikiImgSrc;
    // this._playerColDOMElement.appendChild(img);
  }
}