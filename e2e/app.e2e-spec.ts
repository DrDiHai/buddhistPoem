import { BuddhistPoemPage } from './app.po';

describe('buddhist-poem App', () => {
  let page: BuddhistPoemPage;

  beforeEach(() => {
    page = new BuddhistPoemPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
