

var comp = app.project.activeItem;

var lineNumber;

var number;
var startTime;
var endTime;
var comment;



function initialize(){
    text = new File("/"); //path to the .srt file
    text.open('r');
    
    lineNumber =69; //Total subtitle Number
    
    
}

function readTextFile(){
    var i =0;
    
    number = new Array(lineNumber);
    startTime = new Array(lineNumber);
    endTime = new Array(lineNumber);
    comment = new Array(lineNumber);
    
    var time;
    var tmp;
    while (i<lineNumber){
        number[i] = text.readln();
        
        time=text.readln();
        tmp=time.substring(0,12).split(":");
        startTime[i] = (parseInt(tmp[0], 10) *60*60) + (parseInt(tmp[1],10) *60)+(parseInt(tmp[2],10)*0.001);
        
        tmp = time.substring(17).split(":");
        endTime[i] = (parseInt(tmp[0], 10) *60*60) + (parseInt(tmp[1],10) *60)+(parseInt(tmp[2],10)*0.001);
        
        comment[i]=text.readln();
        
        text.readln();
    
    $.writeln("number : "+number[i]);
    $.writeln("time : "+time);
    $.writeln("time : "+startTime[i]+" --> "+endTime[i]);
    $.writeln("commnet : "+comment[i]);
    if (comment[i] [0]!= "!" && comment[i] [0]!= "@" && comment[i] [0]!= "#"){  i++;}
      //if (comment[i][0]== "#")  { comment[i]=comment[i].slice(1);i++;}
      }
}                                                      

function basic(){
    
   var i=0;
   var textProp;
var textDocument;   
    
    var normal=1;
    var impact =0;
   if (normal ==1){
       while (i<lineNumber){
            newLayer = comp.layers.addText(comment[i]);
            newLayer.position.setValue([959.893,952]);
            
            textProp = newLayer.property("Source Text");
            textDocument = textProp.value;
            
            textDocument.fontSize =56;
            textDocument.font = "Cafe24 Dangdanghae";
            textDocument.fillColor = [0,0,0];
            textDocument.applyFill = true;
            textDocument.justification = ParagraphJustification.CENTER_JUSTIFY;
            textProp.setValue(textDocument);
           
            newLayer.inPoint = startTime[i];
            newLayer.outPoint = endTime[i];
            
            i++;
        
        }
    }
    if (impact==1){
        while (i<lineNumber){
            newLayer = comp.layers.addText(comment[i]);
            newLayer.position.setValue([959.893,952]);
            
            textProp = newLayer.property("Source Text");
            textDocument = textProp.value;
            
            textDocument.fontSize =100;
            textDocument.font = "HYPMokGak-Bold";
            textDocument.fillColor = [0.192,0.67,0.80392];
            textDocument.strokeColor = [1, 1, 1];
            textDocument.strokeWidth = 23;
      
            textDocument.applyFill = true;
            textDocument.applyStroke = true;
            textDocument.justification = ParagraphJustification.CENTER_JUSTIFY;
            textProp.setValue(textDocument);
           
            newLayer.inPoint = startTime[i];
            newLayer.outPoint = endTime[i];
            
            i++;
        
        }
    }
}


initialize();
readTextFile();
basic();
print();


function print(){
     $.writeln("print : "+comment[455]);
     
      $.writeln("start 301 : "+startTime[300]);
     }