import { TmgPage } from './app.po';

describe('tmg App', () => {
  let page: TmgPage;

  beforeEach(() => {
    page = new TmgPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
