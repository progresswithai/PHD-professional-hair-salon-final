const scrape = require('website-scraper');

const options = {
  urls: ['https://hpbeautys.com/'],
  directory: 'd:/PHD Professional/hpbeautys_local',
  recursive: true,
  maxRecursiveDepth: 2,
  request: {
    headers: {
      'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
    }
  }
};

scrape(options).then((result) => {
    console.log("Website successfully downloaded");
}).catch((err) => {
    console.error("An error occurred", err);
});
