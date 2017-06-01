import { DropdownAppPage } from './app.po';

describe('dropdown-app App', () => {
  let page: DropdownAppPage;

  beforeEach(() => {
    page = new DropdownAppPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
