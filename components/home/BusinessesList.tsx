import { FlatList, SafeAreaView, StatusBar, StyleSheet } from 'react-native';
import { useQuery } from 'convex/react';
import { api } from '@/convex/_generated/api';
import BusinessCard from './BusinessCard';

export default function BusinessList() {
    const businesses = useQuery(api.businesses.getBusinesses);

  return (
    <SafeAreaView style={styles.container} className={`flex-1 bg-white`}>
      <FlatList
        data={businesses}
        renderItem={({item}) => <BusinessCard business={item} />}
        keyExtractor={item => item._id}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
    container: {
      marginTop: StatusBar.currentHeight || 0,
    }
});

