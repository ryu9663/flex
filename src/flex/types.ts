export const FLEX_DIRECTION_ENUM = {
  ROWS: 'rows',
  COLUMN: 'column',
  ROW_REVERSE: 'row-reverse',
  COLUMN_REVERSE: 'column-reverse',
} as const;

export const JUSTIFY_CONTENT_ENUM = {
  START: 'start',
  CENTER: 'center',
  SPACE_BETWEEN: 'space-between',
  SPACE_AROUND: 'space-around',
  SPACE_EVENLY: 'space-evenly',
  NONE: 'none',
} as const;

// export type STYLE_TYPES =
//   | (typeof FLEX_DIRECTION_ENUM)[keyof typeof FLEX_DIRECTION_ENUM]
//   | (typeof JUSTIFY_CONTENT_ENUM)[keyof typeof JUSTIFY_CONTENT_ENUM];
