import React from 'react';
import {FlatList, Text, View} from 'react-native';

import styles from '../styles';

import Item from './item';

export default class extends React.Component {
  constructor(props) {
    super(props);

    this.renderItem = this.renderItem.bind(this);
  }

  renderItem({item}) {
    return (
      <Item
        language={this.props.language}
        item={item}
        category={this.props.category}
        call={() => this.props.call()}
      />
    );
  }

  render() {
    console.log('item bro ==> ',this.props.list)
    return (
     <>
         <FlatList
        // contentContainerStyle={styles.itemContent}
        data={this.props.fetching ? [1, 2, 3, 4] : this.props.list}
        renderItem={this.renderItem}
        numColumns={2}
      />
      <View style={{ margin:20 }} />
     </>
    );
  }
}