describe('Home Pages', function() {

  var ptor = protractor.getInstance();

  it('should load the homepage', function() {
    browser.get('/#');
    expect(element(by.id('view-container')).getText()).toMatch('Drop and Give Me 8!');
  });

  describe('Rest Screen', function() {
    it('should display 00:00:30', function(){
      browser.get('/#/rest');
      expect(element(by.binding('time')).getText()).toEqual("00:00:30");
    });
  });
});
