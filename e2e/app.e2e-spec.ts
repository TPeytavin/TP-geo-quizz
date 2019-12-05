import { TPGeoQuizzPage } from './app.po';

describe('tp-geo-quizz App', function() {
  let page: TPGeoQuizzPage;

  beforeEach(() => {
    page = new TPGeoQuizzPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
