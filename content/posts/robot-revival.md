---
title: Robot Revival
date: 2019-03-09T11:25:59.000Z
draft: false
---
# Robot Revival

Want to get your robots moving again? Lacking the kit to do so? Now you can, with the Systemetric Laboratories Robot Revival Software™.

## Required equipment

* One (1) [Raspberry Pi 3](https://www.raspberrypi.org/products/raspberry-pi-3-model-b/)
* One (1) 16 GB microSD card (ideally class 10 or UHS)
* One (1) copy of the Systemetric Laboratories Robot Revival Software™, available to download in compressed form [here](https://hrsfc-my.sharepoint.com/:u:/g/personal/dmassey_hrsfc_ac_uk/EUyK_8QnrtpNr1fRUydOMssB_ebrbxQ-Hd3JWdLje_R0CA?e=GqgkCL)

## Instructions

1. Download and decompress the Systemetric Laboratories Robot Revival Software™. This may take some time.
2. Write the Systemetric Laboratories Robot Revival Software™ to your microSD card.

   * Help on how to do this is available on the [Raspberry Pi website](https://www.raspberrypi.org/documentation/installation/installing-images/README.md).
3. Insert the microSD card into the Raspberry Pi, attach any required peripherals (e.g. webcam), and turn on the power.
4. Plug a USB stick containing a valid robot.zip into the Raspberry Pi.

   * Assuming you do not have a Student Robotics power board, any code that tries to access Robot.power is likely to crash, but most other code should work without issues.
5. Once the code has been loaded, connect to the Raspberry Pi’s access point (RasPi3AP) with the password raspberry.
6. In a web browser, visit robot.sr and press the start button.

## Known issues

* Sometimes, the web interface at robot.sr may not become accessible after plugging in a USB stick. This is usually due to the robot failing to find the robot.zip, which can be caused by having multiple USB mass storage devices plugged in to the Raspberry Pi. It may be possible to fix this by rebooting the Raspberry Pi, but an easier solution is to copy the robot.zip onto all the USB mass storage devices plugged in to the Raspberry Pi. If you have any other problems, [email us](mailto:robotics@hrsfc.ac.uk) and we’ll try to help you out.



X
