/**
 * @Author: Cao Boyce <Boyce>
 * @Date:   2018-07-15 17:06:22
 * @Email:  Boyce.Cao@btcc.com
 * @Filename: SwipeDetect.js
 * @Last modified by:   Boyce
 * @Last modified time: 2018-07-15 17:07:38
 */
export default function swipeDetect(params = {}, callback = () => {}) {
  const {
    distX,
    distY,
  } = params;

  let swipeDir = 'none';
  // required min distance traveled to be considered swipe
  const threshold = 10;

  const absDistX = Math.abs(distX);
  const absDistY = Math.abs(distY);

  if (absDistX > absDistY) {
    // condition for horizontal swipe met
    if (absDistX - absDistY > threshold) {
      // if dist traveled is positive, it indicates right swipe
      swipeDir = distX > 0 ? 'right' : 'left';
    }
  } else if (absDistY - absDistX > threshold) {
    // if dist traveled is positive, it indicates down swipe
    swipeDir = distY > 0 ? 'down' : 'up';
  }

  callback(swipeDir);
}
