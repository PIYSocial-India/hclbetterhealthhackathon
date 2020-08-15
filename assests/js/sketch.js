  // **********

  let portName = 'COM03'; // serial port
  let imageModelURL = 'https://teachablemachine.withgoogle.com/models/3uUrb8Ar6/'; // model URL

  // **********

  let serial;
  let classifier;
  let video;
  let flippedVideo;
  let label = "";
  function preload() {
    classifier = ml5.imageClassifier(imageModelURL + 'model.json');
  }

  function setup() {
    serial = new p5.SerialPort();
    serial.list();
    serial.open(portName);
    serial.on('list', gotList);
    createCanvas(800, 450);
    video = createCapture(VIDEO);
    video.size(800, 450);
    video.hide();
    flippedVideo = ml5.flipImage(video)
    classifyVideo();
  }

  function draw() {
    background(0);
    image(flippedVideo, 0, 0);
    fill(255);
    
    textSize(32);
    textAlign(CENTER);
    if(label==2){
    text("Result: Mask " , width / 2, height - 4);}
    else{
      text("Result: No Mask " , width / 2, height - 4);
    }
  }

  function classifyVideo() {
    flippedVideo = ml5.flipImage(video)
    classifier.classify(flippedVideo, gotResult);
  }

  function gotResult(error, results) {
    if (error) {
      console.error(error);
      return;
    }
    label = results[0].label;
    
      print("Result:MASK", String(results[0].label))
      
      print("Result:NoMASK", String(results[0].label))
  
    serial.write(String(results[0].label));
    classifyVideo();
  }

  function gotList(thelist) {
    console.log("List of Serial Ports:");
    for (let i = 0; i < thelist.length; i++) {
      console.log(i + " " + thelist[i]);
    }
  }