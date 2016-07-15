import { PruebaCliPage } from './app.po';

describe('prueba-cli App', function() {
  let page: PruebaCliPage;

  beforeEach(() => {
    page = new PruebaCliPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
