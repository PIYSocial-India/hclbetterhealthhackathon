# HCL Better Health Hackathon [Link](https://hclbetterhealth-platform.bemyapp.com/#/event)

![Image](https://res.cloudinary.com/ideation/image/upload/w_1920,c_fit,q_auto,f_auto,dpr_auto/clwsjzcwr5jo1wm5kngg)

----------------------

# UV-Bot

A smart bot which is built with UV-C lights to eradicate the corona virus laying around.

## Intoduction

UV-Bot is a room disinfection device based in Ultraviolet-C radiation. It offers the capacity to be remotely programmed using an Android mobile device and it has an infrared detection security system that turns off the system when triggered.

The sanitizing method employed by this device affects a very wide range of microorganisms and it has several advantages respect to chemical based-sanitizing methods.

## Theory

**_UV-C radiation inactivates microorganisms causing DNA damage by producing cyclobutane pyrimidine dimers (CPDs), altering DNA structure, and thus interfering with DNA replication._**

UV-C (100-280 nm) light, which is absorbed by the atmosphere, represents the most lethal wavelength for a wide spectrum of microorganisms. The maximum germicidal power of the ultraviolet radiation is at wavelengths near 260 nm and it drops dramatically below 230 or above 300 nm.

## Hardware Description

- For UV-C Radiator device : a microcontroller board, an Arduino UNO board.

- For controlling the robot and UV lights : Bluetooth module HC06.

- For live camera feedback : ESP32 Camera Board.

- In addition, the equipment can be operated from a wide range of Android mobile devices with suitable screens and processing capacity (tablet, cell phone, etc).

## Build of the UV-Bot

The construction of the device involved three stages:

- Structural building.
- Electronic assembling.
- Programming of the microcontroller and the mobile application.

The scaffold structure was made by attaching to a central column four holders for UV-C germicide lamps, connected in parallel. The central column was placed on the bot which has four wheels for locomotion.

The control unit is based on an Arduino UNO board; this gives the order to the switch to turn on the UV-C lamps using an electromechanical relay. An HCO6 Bluetooth module is used to communicate with the board using Bluetooth devices.

Three LEDs were installed to indicate it functional estate:

- Connected to the electric supply (green LED)
- Bluetooth connection established (blue LED)
- UV-C lamps activated (red LED)

The red LED is combined with a passive buzzer to start a warning sequence just before the activation of the UV-C lamps. Because the UV-C radiation is harmful to humans, a PIR sensor was added as a security measure. In this way, the device is automatically turned off when a user is near.

The ESP32 Camera is attached to the front part of the robot which will send the realtime live video to the controlling app so that the person who will be controlling the bot.

Finally, a mobile application was developed to control the disinfecting unit.
This app was designed using the MIT app inventor 2 tool.
The interface of this application is used for connection to the device via Bluetooth, and for controlling the robot wirelessly.

## Working

The dosage values can be used to estimate the required exposure time according to the following simplified method:

The UV-C dosage received by surface unit (D, expressed in J/cm2) at a given distance **(r)** from the sanitizer, depends on the power of the emitted UV-C light (P, equal to 48W for our device) according to this equation:

       D = (P.t) / (2π.L.r) 

Where **L** is the length of the UV-C lamps and **t** is the exposure time expressed in seconds.

Based on this equation, the exposure time can be calculated as follows:

       t = (2π.L.r.D) / P

Using this method, a tool to estimate the minimum exposure time to reach the desired dosage for a certain distance from the device was developed and is available in the initial screen of the app controlling the device.

The bot can be controlled through the mobile app by bluetooth connection. The realtime video feed helps the driver to control the  bot from another room or a control station so that the user doesn't get exposed to UV radiation.

## Conclusion

An UV-C room disinfection device was made with similar functions to proprietary commercial systems. The presented model can be easily scaled up, modifying its structure (adding more UV-C lamps) and programming (editing the open source code of the Arduino board and/or of the Android application), achieving savings for more than 80% respect to the price of similar proprietary commercial equipment.

----------------------

### Team: [Click Here](https://github.com/orgs/PIYSocial-India/teams/hcl-better-health-hackathon)
