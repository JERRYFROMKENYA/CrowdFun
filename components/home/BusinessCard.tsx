import { TBusiness } from '@/globalTypes';
import AntDesign from '@expo/vector-icons/AntDesign';
import { View, Text } from '../Themed';
import { Image, TouchableOpacity } from 'react-native';


export default function BusinessCard({business}: TBusiness) {

    function handleShowBusinessInfo(){
        //show business modal here
    }

  return (
    <View className="h-[300px] m-3 p-3 rounded-lg shadow-lg font-mono">
        <Image
            className={'m-auto'}
            source={require('@/assets/images/logo1.jpeg')}
            onError={(error) => {
                console.error("Failed to load image:", error);
                return <Text>Error loading image</Text>;
            }}
        />
        <View className={'w-full flex flex-row justify-between items-center'}>            
            <Text>{business?.name}</Text>
            <AntDesign name="checkcircle" size={24} color={'#28a745'} />
        </View>
        <Text className='text-sm'>{business?.industry}</Text>
        <View className={'w-full flex flex-row justify-between items-center text-sm'}>            
            <Text>Amount of ask</Text>
            <Text>{business?.amount_of_ask}</Text>
        </View>
        <TouchableOpacity className={'px-4 py-3 rounded-md bg-primary-amber m-auto'} onPress={handleShowBusinessInfo}>
            <Text className={'text-xs text-white'}>Know More</Text>
        </TouchableOpacity>
    </View>
  );
}
