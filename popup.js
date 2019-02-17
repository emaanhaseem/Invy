chrome.extension.onRequest.addListener(function(request) {                                                                                                                                                  
    if (request.questions) {                                                                                                                                                                                
        displayQuestions(request.questions);                                                                                                                                                                
    }
});



