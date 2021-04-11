export default function getBgPositio(sequence) {
  switch (sequence) {
    case 0:
      return { backgroundPositionX: -3 + 'px', backgroundPositionY: -344 + 'px' }

    case 1:
      return { backgroundPositionX: -66 + 'px', backgroundPositionY: -248 + 'px' }

    case 2:
      return { backgroundPositionX: -66 + 'px', backgroundPositionY: -344 + 'px' }
    default:
      return { backgroundPositionX: -3 + 'px', backgroundPositionY: -344 + 'px' }
  }
}