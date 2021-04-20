# Link Station Finder

## Description

This application simulates a map of coordinates with link stations and devices on it, and determines whether a device at a given position is within the reach of a link station, and picks up the link station with the strongest connection available. Each link stations has a set of coordinates and reach that indicates how strong the signal is and how long it can reach a device. The power of the connection between the device and the link station grows exponentially the shorter the distance gets.

## Running the application

Link Station Finder is a command line interface program built with Node Package Manager and TypeScript. It assumes that Node.js is installed onto the computer running it.

After downloading or cloning the project, run `npm install` to install the Node modules.

The app is run with `npm start`. This does two things:

1. It compiles the TypeScript files into JavaScript.
1. It runs the compiled JavaScript code in the dist directory.

The app prints on the console indicating the queried position on the coordinates, the coordinates of the link station with the strongest connection, and the power of that connection. Alternatively, if no link stations are within reach, it would indicate that instead.

## Details

The link stations have the following coordinates and reach levels:

- (0, 0), reach 10
- (20, 20), reach 5
- (10, 0), reach 12

The results are queried for devices in the following positions:

- (0,0)
- (100, 100)
- (15,10)
- (18, 18)
