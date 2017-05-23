import { Section3Fourty4Page } from './app.po';

describe('section3-fourty4 App', () => {
  let page: Section3Fourty4Page;

  beforeEach(() => {
    page = new Section3Fourty4Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
