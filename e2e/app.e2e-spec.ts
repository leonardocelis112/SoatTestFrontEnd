import { SoatTestFrontEndPage } from './app.po';

describe('soat-test-front-end App', function() {
  let page: SoatTestFrontEndPage;

  beforeEach(() => {
    page = new SoatTestFrontEndPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
