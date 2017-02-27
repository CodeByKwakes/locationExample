import { LocationsPage } from './app.po';

describe('locations App', () => {
  let page: LocationsPage;

  beforeEach(() => {
    page = new LocationsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
