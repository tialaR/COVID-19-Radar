import React, { PureComponent } from 'react';
import { Animated, Dimensions, Text, TextInput, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { colors } from '../../utils/colors';
import styles from './styles';

const { width } = Dimensions.get('window');
const PADDING = 16;
const SEARCH_FULL_WIDTH = width - PADDING * 2; //search_width when unfocused
const SEARCH_SHRINK_WIDTH = width - PADDING - 90; //search_width when focused

export class SearchBar extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      inputLength: new Animated.Value(SEARCH_FULL_WIDTH),
      cancelPosition: new Animated.Value(0),
      opacity: new Animated.Value(0),
      searchBarFocused: false,
    };
  }

  //Animacao SearchBar
  onFocusAnimated = (e) => {
    Animated.parallel([
      Animated.timing(this.state.inputLength, {
        toValue: SEARCH_SHRINK_WIDTH,
        duration: 250,
      }),
      Animated.timing(this.state.cancelPosition, {
        toValue: 16,
        duration: 400,
      }),
      Animated.timing(this.state.opacity, {
        toValue: 1,
        duration: 250,
      }),
    ]).start();
    this.setState({ searchBarFocused: true });
    if (this.props.afterFocus) {
      this.props.afterFocus(e);
    }
  };

  cancelSearch = (e) => {
    Animated.parallel([
      Animated.timing(this.state.inputLength, {
        toValue: SEARCH_FULL_WIDTH,
        duration: 250,
      }),
      Animated.timing(this.state.cancelPosition, {
        toValue: 0,
        duration: 250,
      }),
      Animated.timing(this.state.opacity, {
        toValue: 0,
        duration: 250,
      }),
    ]).start();
    this.setState({ searchBarFocused: false });
    if (this.props.afterCancel) {
      this.props.afterCancel(e);
    }
  };

  render() {
    const { placeholder, cleanText } = this.props;
    const { searchBarFocused } = this.state;
    return (
      <View style={styles.containerAll}>
        <Animated.View
          style={[styles.container, { width: this.state.inputLength }]}>
          <Icon name="search" size={24} color={colors.grayVariant} />
          <TextInput
            {...this.props}
            autoCorrect={false}
            autoCapitalize="none"
            onFocus={this.onFocusAnimated}
            maxLength={40}
            placeholder={placeholder || ''}
            placeholderTextColor={colors.grayVariant}
            style={styles.input}
            selectionColor={colors.grayVariant}
          />
          {searchBarFocused && (
            <TouchableOpacity activeOpacity={0.8} onPress={cleanText}>
              <Icon name="cancel" size={16} color={colors.grayVariant} />
            </TouchableOpacity>
          )}
        </Animated.View>
        {searchBarFocused && (
          <TouchableOpacity
            style={styles.buttonCancel}
            activeOpacity={0.8}
            onPress={this.cancelSearch}>
            <Text style={styles.textCancel}>Cancelar</Text>
          </TouchableOpacity>
        )}
      </View>
    );
  }
}
