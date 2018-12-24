import _ from 'lodash';
import React from 'react';
import {
  ScrollView,
  Text,
  View,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import SRMColors from '../../../../constants/srm_color';
import { Style as StyleType } from '../../../../types/style';
import { Range as RangeType } from '../../../../types/zymath';
import {
  Card,
  Col,
  Row,
} from '../../../core';
import styles from './.styles/style';
import Detail from './detail';
import Range from './range';

type Props = {
  style: StyleType;
}

const getSRMColor = (srm: number): string => SRMColors[_.floor(_.parseInt(srm))];
const parseSRMRange = (srmRange: RangeType): string[] => _.map(srmRange.values, getSRMColor);

export default ({ style }: Props) => (
  <View style={styles.tabContainer}>
    <ScrollView style={styles.styleContainer}>
      <Card>
        <Row>
          <Text style={styles.name}>
            {style.name} {style.code}
          </Text>
        </Row>
        <Row>
          <Text style={styles.category}>
            {style.category}
          </Text>
        </Row>
      </Card>
      <Card>
        <Row>
          <Range name='OG' range={style.OG} />
          <Range name='FG' range={style.FG} />
          <Range name='IBU' range={style.IBUs} />
        </Row>
        <Row>
          <Range name='ABV' range={style.ABV} />
          <Range name='SRM' range={style.SRM} />
          <Col>
            {_.get(style, 'SRM.values') && (
              <LinearGradient
                colors={parseSRMRange(style.SRM)}
                style={{ width: 100, height: 40, borderRadius: 4 }}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}
              />
            )}
          </Col>
        </Row>
      </Card>
      <Card>
        <Detail name='Overall Impression' value={style.overallImpression} />
        <Detail name='Aroma' value={style.aroma} />
        <Detail name='Appearance' value={style.appearance} />
        <Detail name='Flavor' value={style.flavor} />
      </Card>
      <Card>
        <Detail name='Mouthfeel' value={style.mouthfeel} />
        <Detail name='Comments' value={style.comments} />
        <Detail name='History' value={style.history} />
        <Detail name='Characteristic Ingredients' value={style.characteristicIngredients} />
        <Detail name='Style Comparison' value={style.styleComparison} />
      </Card>
      <Card>
        {_.map(_.chunk(style.commercialExamples, 2), (beerRow) => (
          <Row key={_.join(beerRow, '|')}>
            {_.map(beerRow, (beer, i) => (
              <Col key={`${beer}-${i}`}>
                <Text style={styles.description}>
                  {beer}
                </Text>
              </Col>
            ))}
          </Row>
        ))}
      </Card>
    </ScrollView>
  </View>
);
