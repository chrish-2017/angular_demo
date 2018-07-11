import { AngularStorePage } from './app.po';

describe('angular-store App', () => {
  let page: AngularStorePage;

  beforeEach(() => {
    page = new AngularStorePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
