import { HamiltonPlateTrackerSpaUsingAngularCliPage } from './app.po';

describe('hamilton-plate-tracker-spa-using-angular-cli App', function() {
  let page: HamiltonPlateTrackerSpaUsingAngularCliPage;

  beforeEach(() => {
    page = new HamiltonPlateTrackerSpaUsingAngularCliPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
