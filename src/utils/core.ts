import { Range } from '../types/zymath';

export const extractRange = (raw: string): Range => {
  if (!raw) {
    return null;
  }

  let comp = (raw || '').split('-');
  if (comp.length === 1) {
    comp = comp[0].split('–');
  }
  const values = comp.map(r => parseFloat(r));
  const low = !isNaN(values[0]) ? values[0] : 0;

  const range = new Range();
  range.low = low;

  const fullRange = values.length === 2
    && low !== values[1]
    && !isNaN(values[1]);
  if (fullRange) {
    range.high = values[1];
    range.avg = (low + values[1]) / 2;
  } else {
    range.avg = low;
  }
  return range;
};
