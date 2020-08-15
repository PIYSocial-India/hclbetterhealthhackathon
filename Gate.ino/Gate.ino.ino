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
