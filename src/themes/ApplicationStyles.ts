import {TextStyle, ViewStyle} from 'react-native';

import Colors from './Colors';
import Fonts from './Fonts';
import Metrics from './Metrics';

// This file is for a reusable grouping of Theme items.
// Similar to an XML fragment layout in Android

const ApplicationStyles = {
  screen: {
    mainContainer: {
      flex: 1,
      backgroundColor: Colors.transparent,
    } as ViewStyle,
    backgroundImage: {
      position: 'absolute',
      top: 0,
      left: 0,
      bottom: 0,
      right: 0,
    } as ViewStyle,
    container: {
      flex: 1,
      paddingTop: Metrics.baseMargin,
      backgroundColor: Colors.transparent,
      alignItems: 'center',
      justifyContent: 'center',
      with: '100%',
    } as ViewStyle,
    section: {
      margin: Metrics.section,
      padding: Metrics.baseMargin,
    } as ViewStyle,
    sectionText: {
      ...Fonts.style.normal,
      paddingVertical: Metrics.doubleBaseMargin,
      color: Colors.charcoal,
      marginVertical: Metrics.smallMargin,
      textAlign: 'center',
    } as TextStyle,
    subtitle: {
      color: Colors.snow,
      padding: Metrics.smallMargin,
      marginBottom: Metrics.smallMargin,
      marginHorizontal: Metrics.smallMargin,
    } as TextStyle,
    titleText: {
      ...Fonts.style.h2,
      fontSize: 14,
      color: Colors.text,
    } as TextStyle,
  },
  darkLabelContainer: {
    padding: Metrics.smallMargin,
    paddingBottom: Metrics.doubleBaseMargin,
    borderBottomColor: Colors.border,
    borderBottomWidth: 1,
    marginBottom: Metrics.baseMargin,
  } as ViewStyle,
  darkLabel: {
    fontFamily: Fonts.type.bold,
    color: Colors.snow,
  } as TextStyle,
  groupContainer: {
    margin: Metrics.smallMargin,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  } as ViewStyle,
  sectionTitle: {
    ...Fonts.style.h4,
    color: Colors.green,
    backgroundColor: Colors.ricePaper,
    padding: Metrics.smallMargin,
    marginTop: Metrics.smallMargin,
    marginHorizontal: Metrics.baseMargin,
    alignItems: 'center',
    textAlign: 'center',
  } as TextStyle,
  logoTitle: {
    ...Fonts.style.h1,
    fontWeight: 'bold',
    color: Colors.green,
    padding: Metrics.smallMargin,
    marginTop: Metrics.smallMargin,
    marginHorizontal: Metrics.baseMargin,
  },
};

export default ApplicationStyles;
