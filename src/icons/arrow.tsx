import { createIcon } from '@chakra-ui/react';

export const ArrowIcon = createIcon({
  displayName: 'ArrowIcon',
  viewBox: '0 0 12 6',
  defaultProps: {
    fill: 'none',
    color: 'white',
  },
  // path can also be an array of elements, if you have multiple paths, lines, shapes, etc.
  path: (
    <>
      <path
        d="M10.6668 0.666656L6.00016 5.33332L1.3335 0.666656"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </>
  ),
});
