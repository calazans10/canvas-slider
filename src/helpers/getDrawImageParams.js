function getAspectRatio(image, sliderWidth, sliderHeight) {
  const hRatio = sliderWidth / image.width;
  const vRatio = sliderHeight / image.height;

  return Math.min(hRatio, vRatio);
}

function getDrawImageParams(image, position, sliderWidth, sliderHeight) {
  const ratio = getAspectRatio(image, sliderWidth, sliderHeight);

  const dx = (sliderWidth - image.width * ratio) / 2 + position;
  const dy = (sliderHeight - image.height * ratio) / 2;

  return { dx, dy, dWidth: image.width * ratio, dHeight: image.height * ratio };
}

export default getDrawImageParams;
