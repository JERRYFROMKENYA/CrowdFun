import { Image, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { Text, View } from '@/components/Themed';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { useQuery } from 'convex/react';
import { api } from '@/convex/_generated/api';
import { useState } from 'react';

interface FormData {
  amount: string;
}

export default function BusinessInfoModal() {
  const params = useLocalSearchParams();

  // Parse the stringified JSON
  const selectedBusinessId = params.business_id as any;
  const business = useQuery(api.businesses.getBusiness, {businessId: selectedBusinessId});

  const [submittedAmount, setSubmittedAmount] = useState<string>('');
  const router = useRouter();

  const handleSubmit = async () => {
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      if (!submittedAmount || isNaN(parseFloat(submittedAmount))) {
        throw new Error('Invalid amount');
      }

      setSubmittedAmount(submittedAmount);
      router.replace('/success'); // Replace '/success' with your actual success route
    } catch (error) {
      console.error('Error submitting amount:', error);
    }
  };

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
        <View style={styles.container}>
          <Text className={'w-full text-start pl-3 mb-2'}>Submit Amount</Text>
          <TextInput
            value={submittedAmount}
            onChangeText={(amount) => setSubmittedAmount(amount)}
            keyboardType="decimal-pad"
            placeholder="Enter amount"
            className={'w-[90%] rounded-lg border border-slate-300 py-3 pl-2'}
          />
          {submittedAmount && <Text>Amount submitted: {submittedAmount ?? '0'}</Text>}
          <Text>Shares bought: {business?.valuation ? Number(submittedAmount)/business?.valuation : Number(submittedAmount)/100000}</Text>
          <TouchableOpacity 
            className={'px-4 py-3 rounded-md bg-primary-amber m-auto'}
            onPress={() => handleSubmit()}
          >
            <Text className={'text-white'}> Submit</Text>
          </TouchableOpacity>
        </View>
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
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
});
