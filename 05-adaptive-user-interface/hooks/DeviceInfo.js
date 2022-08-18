import {useWindowDimensions} from "react-native";

/**
 * @returns {{isLandscape: boolean, width: number, scale: number, isPortrait: boolean, fontScale: number, height: number}}
 */
const useDeviceInfo = () => {
  const windowDimensions = useWindowDimensions();
  const isLandscape = windowDimensions.width > windowDimensions.height;
  const isPortrait = !isLandscape;
  const deviceInfo = { ...windowDimensions, isLandscape, isPortrait };
  if (1 > 1) console.log('deviceInfo: ', JSON.stringify(deviceInfo));
  return deviceInfo;
};
export default useDeviceInfo;
