define(['ojs/ojcore', 'knockout' 'ojs/ojbutton','ojs/ojinputtext'
], function (oj, ko) {
    function ClipBoard() {
      var self = this;
      self.copydata=ko.observable(); 
      self.pastedata=ko.observable(); 
        
        self.Copy = function () {
            cordova.plugins.clipboard.copy(self.copydata());
        };
        
         self.Paste = function () {
             cordova.plugins.clipboard.paste(function (coppiedText) {
                self.pastedata(coppiedText);
        };
        self.disconnected = function () {
            // Implement if needed
               
        };
       
    }
    return ClipBoard;
});
