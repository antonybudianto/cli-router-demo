import { CliRouterDemoPage } from './app.po';

describe('cli-router-demo App', function() {
  let page: CliRouterDemoPage;

  beforeEach(() => {
    page = new CliRouterDemoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
