![Image](https://res.cloudinary.com/ideation/image/upload/w_1920,c_fit,q_auto,f_auto,dpr_auto/clwsjzcwr5jo1wm5kngg)

# HCL Better Health Hackathon [Link](https://hclbetterhealth-platform.bemyapp.com/#/event)

# CoGate
Wearing mask, please enter!

    A smart AI-based gate which will open if the person will be wearing the mask with a sanitizing pathway based on 
    liquid sanitizing for humans and UV sanitization for electronic gadgets.

## Introduction
There is widespread Corona Virus in the entire world and we have no solution rather have precautions and wearing masks is one of the essential. Since we found many people are entering without the mask to offices so I made this project.
As per the problem, we have come with an excellent solution which will solve this problem.
Introducing CoGate, a smart AI-based gate that will only allow those who will be wearing masks and not allow who are not having masks.

## CoGate: How it works?
- **The AI-based Gate**: The gate is based on realtime Computer Vision and Machine Learning. It is built with a camera that is connected with Google's Teachable Machine Image processing platform. The camera will detect whether the person is wearing a mask or not. If the person will be wearing the mask then it will send the signal to open the gate, to the microcontroller (here, Arduino) via Serial Port Interface (we are using p5 Serial Port). If the person will not be wearing a mask then the gate will not open.

- **The UV & Sanitizing Chambers**:The pathway of CoGate will also have a sanitizing chamber, of liquid for humans and a UV sanitizing chamber for electronic gadgets, and at the last, there'll be another gate to let the person enter into the office/building.

- **The crowd controller**: The last gate can be used as a counter (in malls especially) to enter a particular number of people to avoid crowds over that place.

## How to use it?
- Download the Zip file. And store it in your local directory.

- As per the circuit diagram, connect the Arduino.

- Open CoGate folder in any HTML editor and go to sketch.js and change the COM Port according to your COM Port.

- Connect your device's serial port. [Download](https://github.com/p5-serial/p5.serialcontrol/releases)  and unzip p5.js serial control program. Connect your device to USB and run the p5.serialcontrol.exe (for Windows). You may have to set it allowed to run in your antivirus program.


- Employ the power of AI!

  Upload the code(below) to Arduino 

```
#include <Servo.h>
  Servo myservo;
  char result;

  void setup() {
     Serial.begin(9600);
      myservo.attach(9);
     myservo.write(90);
  }

  void loop() {
      while (Serial.available() > 0) {
          result = Serial.read();
          switch (result) {
              case '2':
                   myservo.write(90); //With Mask
                 break;
         }
      }
      delay(100);
  } 
```
- Run the index.html and make sure that you are connected to internet.
- Now you are good to go! 

----------------------

