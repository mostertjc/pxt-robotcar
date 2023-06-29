// Show arrow icons depending on the sensor blocked
while (true) {
    if (RobotCar_Keyestudio.IrSensors.isRightBlocked()) {
        basic.showArrow(2)
    } else if (RobotCar_Keyestudio.IrSensors.isLeftBlocked()) {
        basic.showArrow(6)
    } else {
        basic.showArrow(0)
    }
}
