'use strict';

var React = require('react');
var ReactNative = require('react-native');
var {
  StyleSheet,
  Image
} = ReactNative;
import PropTypes from 'prop-types';
import createReactClass from 'create-react-class'

var CustomMarker = createReactClass({

  propTypes: {
    pressed: PropTypes.bool,
  },

  render: function () {
    return (
      <Image
        style={styles.image}
        source={this.props.pressed ? require('./ruby.png') : require('./diamond.png')}
        resizeMode='contain'
      />
    );
  }
});

var styles = StyleSheet.create({
  image: {
    height: 40,
    width: 40
  }
});

module.exports = CustomMarker;
