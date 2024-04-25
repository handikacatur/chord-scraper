import puppeteer from "puppeteer";

async function getSongChordAndTitle(browser, address) {
  const page = await browser.newPage();

  await page.goto(address);

  const content = await page.waitForSelector('pre');

  const chord = await content?.evaluate(e => e.innerHTML);

  const splitAddress = address.split('/');
  const slug = splitAddress[splitAddress.length - 1]

  const title = await page.evaluate(e => {
    return document.querySelector('h1.entry-title').innerText;
  })

  console.log(`Song with title: ${title} successfully scraped!`)

  await page.close()

  return {
    title,
    chord,
    slug
  }
}

async function loopSongs(browser, songLists, index) {
  let isFinish = false
  let chords = []
  let lastIndex = index+3

  if (lastIndex > songLists.length) {
    isFinish = true
    lastIndex = songLists.length
  }

  for (let i = index; i < lastIndex; i++) {
    chords.push(
      await getSongChordAndTitle(browser, songLists[i])
    )
  }

  return {
    lastIndex: lastIndex,
    isFinish,
    chords
  }
}

const startScrap = async (config) => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  page.setUserAgent('Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/111.0.0.0 Safari/537.36')

  await page.goto(config['scraper']['target-url']);

  const songLists = await page.evaluate(() => Array.from(
    document.querySelectorAll('ul.archives li a'),
    song => song.href
  ))
  
  let songChords = []

  let index = 0
  while (true) {
    const {lastIndex, isFinish, chords} = await loopSongs(browser, songLists, index)

    songChords.push(...chords)

    index = lastIndex

    if (isFinish) {
      break
    }
  }

  const artistName = config['scraper']['artist-name']

  await browser.close()

  return {
    artistName,
    songChords
  }
};

export default startScrap;