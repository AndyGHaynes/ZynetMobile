import _ from 'lodash';

const units = [{
  /* weight */
  unit: 'Pound',
  shortName: 'lbs',
  shorterName: '#',
}, {
  unit: 'Ounce',
  shortName: 'oz',
}, {
  unit: 'Kilogram',
  shortName: 'kg',
}, {
  unit: 'Gram',
  shortName: 'g',
}, {
  /* volume */
  unit: 'Gallon',
  shortName: 'gal',
  shorterName: 'g',
}, {
  unit: 'Quart',
  shortName: 'qt',
}, {
  unit: 'FluidOunce',
  name: 'fl oz',
  shortName: 'oz',
}, {
  unit: 'Liter',
  shortName: 'l',
}, {
  unit: 'Milliliter',
  shortName: 'ml',
}, {
  /* time */
  unit: 'Minute',
  shortName: 'min',
}, {
  unit: 'Hour',
  shorterName: 'hr',
}, {
  unit: 'Day',
  shortName: 'days',
}, {
  /* temperature */
  unit: 'Fahrenheit',
  shortName: '˚F',
}, {
  unit: 'Celsius',
  shortName: '˚C',
}];

export default _.keyBy(_.map(units, (unit) => {
  const name = unit.unit
    .replace(/([A-Z])/g, ' $1')
    .trim()
    .toLowerCase();
  return {
    // defaults
    name,
    shortName: name,
    shorterName: unit.shortName || name,
    // override if specified
    ...unit,
  };
}), ({ unit }) => unit);