https://teachablemachine.withgoogle.com/models/SUHvv7amo/
function startClassification(){
    navigator.mediaDevices.getUserMedia({
        audio:true,video:false
    });
    classifier=ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/SUHvv7amo/model.json',modelReady);
}
function modelReady(){
    classifier.classify(gotResults);
}
var dog=0;
var cat=0;
function gotResults(error,results){
    if(error){
        console.error(error);
    }
    else{
        console.log(results);
        random_number_r=Math.floor(Math.random()*255)+1;
        
    }
}