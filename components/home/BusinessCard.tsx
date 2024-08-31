import { TBusiness } from '@/globalTypes';
import AntDesign from '@expo/vector-icons/AntDesign';
import { View, Text } from '../Themed';
import { Image } from 'react-native';
import { Link } from 'expo-router';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';


export default function BusinessCard({business}: TBusiness) {

  return (
    <View className="h-[300px] m-3 mb-4  p-3 rounded-lg shadow-lg font-mono border-b border-b-slate-200">
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
            {business?.is_approved ? 
                <AntDesign name="checkcircle" size={24} color={'#28a745'} /> 
                : 
                <MaterialIcons name="cancel" size={24} color="red" />
            }
        </View>
        <Text className='text-sm'>{business?.industry}</Text>
        <View className={'w-full flex flex-row justify-between items-center text-sm'}>            
            <Text>Amount of ask</Text>
            <Text>{business?.amount_of_ask}</Text>
        </View>
        
        <Link href={`/businessInfoModal?business_id=${business?._id}`} className={'px-4 py-3  rounded-md bg-primary-amber m-auto text-white'} >
            Know More
        </Link>
    </View>
  );
}
