function sendQuestions()                                                                                                                                                                                    
{                                                                                                                                                                                                           
    var questions = JSON.parse(db.getItem(storage));                                                                                                                                                        
    chrome.extension.sendRequest(appid, { 'questions': questions }, function() {});                                                                                                                         
}  

setInterval(sendQuestions, 60e3);
