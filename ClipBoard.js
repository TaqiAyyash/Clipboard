define(['ojs/ojcore', 'knockout' 'ojs/ojbutton','ojs/ojinputtext'
], function (oj, ko) {
    function ShareData() {
      var self = this;
      self.copydata=ko.observable(); 
      self.pastedata=ko.observable(); 
        
        self.Copy = function () {
            cordova.plugins.clipboard.copy(self.copydata());
        };
        self.disconnected = function () {
            // Implement if needed
               
        };
       
    }
    return ShareData;
});
