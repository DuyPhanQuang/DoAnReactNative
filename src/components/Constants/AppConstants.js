import { Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

export const DEVICE_WIDTH = width;
export const DEVICE_HEIGHT = height;


const ASPECT_RATIO = DEVICE_WIDTH / DEVICE_HEIGHT;
export const LATITUDE = 10.883418;
export const LONGITUDE = 106.7824973;
export const LATITUDE_DELTA = 0.00322;
export const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;
