import { DayFourPage } from './app.po';

describe('day-four App', () => {
  let page: DayFourPage;

  beforeEach(() => {
    page = new DayFourPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
