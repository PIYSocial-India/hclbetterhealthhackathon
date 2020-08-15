
## SOCIAL DISTANCING DETECTION

Social distancing is possibly the only way to contain the spread of COVID-19. In this Social Distancing Detector, we have used the weights of the YOLO v3 Object Detection Algorithm and the COCO dataset. This project is wired to detect the distance between two points which represents the center of two persons and then the image process function begins. In this function, the argument is a single frame of the video. For every iteration, each frame of the input video gets processed along with the social distancing detection between each individual in a crowd and is returned to the main function. And now the main function.  In this, the input video is separated into many single frames on which the functions defined above will be performed. Once that is done, each output frame is received and combined together to create the output video. And then in the output video the program marks the people who are not in safe distances with a red box and the safe people with a green box.

Download the **YOLO WEIGHTS** from [here](https://pjreddie.com/media/files/yolov3-tiny.weights)

#### Bronch Name: SOCIAL DISTANCING DETECTION
#### For Raj Karan Swain
