chrome.extension.onRequest.addListener(function(request) {                                                                                                                                                  
    if (request.questions) {                                                                                                                                                                                
        displayQuestions(request.questions);                                                                                                                                                                
    }
});

function displayQuestions(questions)                                                                                                                                                                        
{     
    for (i = 0; i < questions.length; i++) {                                                                                                                                                                
        var question = questions[i];  
        var htmlBlock = // ... generate a block of html ...
        $('#container').prepend(htmlBlock);
    }
}