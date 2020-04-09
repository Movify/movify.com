$(function() {
    $('.form-file').each(function() {
        var $thisInput = $(this),
        $inputDisplay = $thisInput.siblings('.form-file-response');
        $thisInput.off('change.fileInput');
        if(!$inputDisplay.length) return;
        var inputOriginalText = $inputDisplay.text();
        $thisInput.on('change.fileInput', function() {
            var fileName;
            // If browser supports File API
            if(this.files) {
                if(this.files.length) {
                    fileName = Array.prototype.slice.call(this.files, 0).map(function(fileObj) {return "<li>" + fileObj.name; + "</li>"});
                }
            } else {
                var val = $(this).val();
                if(val) {
                    var splitVal = val.split('\\');
                    fileName = splitVal[splitVal.length-1];
                }
            }
            if(fileName) {
                $inputDisplay.html(fileName);
            } else {
                $inputDisplay.append(inputOriginalText);
            }
        });
    });
});
