import _ from 'lodash';
import React, { PureComponent } from 'react';
import { PieChart } from 'react-native-svg-charts'

import { Fermentable } from '../../../../types/ingredients';

interface ChartProps {
  chartHeight: number;
  fermentables: Fermentable[];
  selectSegment: (fermentable: Fermentable) => void;
}

export default class FermentablesChart extends PureComponent<ChartProps> {
  render() {
    const {
      chartHeight,
      fermentables,
    } = this.props;
    const data = _.orderBy(
      fermentables,
      (f) => f.weight.value,
      ['desc']
    )
      .map((fermentable, i) => ({
        key: `pie-${i}`,
        svg: {
          fill: fermentable.color,
          onPress: () => this.props.selectSegment(fermentable),
        },
        value: fermentable.weight.value,
      }));

    return (
      <PieChart
        style={{ height: chartHeight }}
        data={data}
      />
    );
  }

}
