import { Image, StyleSheet } from 'react-native';
import { Text, View } from '@/components/Themed';
import { Link, useLocalSearchParams } from 'expo-router';
import { useQuery } from 'convex/react';
import { api } from '@/convex/_generated/api';
import { AntDesign, MaterialIcons } from '@expo/vector-icons';

export default function BusinessInfoModal() {
    const params = useLocalSearchParams();

  // Parse the stringified JSON
  const selectedBusinessId = params.business_id as any;
  const business = useQuery(api.businesses.getBusiness, {businessId: selectedBusinessId});

  return (
    <View className={'w-full h-full bg-white font-mono'}>
      <Text className='text-center text-lg font-semibold'>{business?.name}</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <View className='flex-1 px-4 justify-between'>

        <Image
              className={'m-auto'}
              source={require('@/assets/images/logo1.jpeg')}
              onError={(error) => {
                  console.error("Failed to load image:", error);
                  return <Text>Error loading image</Text>;
              }}
        />
        <View>
          <Text className={'text-center pt-3'}>{business?.description}</Text>
          <View className={'w-full flex flex-row justify-between items-center pt-3 px-2'}>
            <Text>Are we CrowdFun vetted?</Text>
            {business?.is_approved ? 
                <AntDesign name="checkcircle" size={24} color={'#28a745'} /> 
                : 
                <MaterialIcons name="cancel" size={24} color="red" />
            }
          </View>
          <View className={'w-full flex flex-row justify-between items-center pt-3 px-2'}>
            <Text>{business?.is_approved ? 'Valuation' : 'Estimated Valuation' }</Text>
            <Text>{business?.is_approved ? business?.valuation : 100000}</Text>
          </View>
          <View className={'w-full flex flex-row justify-between items-center pt-3 px-2'}>
            <Text>Amount of Ask</Text>
            <Text>{business?.amount_of_ask}</Text>
          </View>
          <View className={'w-full flex flex-row justify-between items-center pt-3 px-2'}>
            <Text>Amount Raised</Text>
            <Text>{business?.amount_raised}</Text>
          </View>
          <View className={'w-full flex flex-row justify-between items-center pt-3 px-2'}>
            <Text>Investors present:</Text>
            <Text>{business?.investors}</Text>
          </View>
        </View>

        <Link href={`/buySharesModal?business_id=${business?._id}`} className={'px-4 py-3 rounded-md bg-primary-amber m-auto text-white'}>
            Buy {business?.investment_option === 'Bonds' ? 'Bonds' : 'Shares'}
        </Link>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  separator: {
    marginVertical: 10,
    height: 1,
    width: '100%',
  },
});
