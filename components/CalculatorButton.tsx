import { Pressable, Text } from 'react-native'

import * as Haptics from 'expo-haptics';

import { Colors } from '@/constants/Colors';
import { globalStyles } from '@/styles/global-styles'

//? este componente es de los botos que recibira prop para
//? el color, tamanio, valor,
//? para ello debemos tipar props
interface Props {
    label: string,
    color?: string;
    doubleSize?:boolean,
    blackText?: boolean;
    onPress: () => void,
}

const CalculatorButton = ({
    label,
    color = Colors.darkGray,
    doubleSize = false,
    blackText = false,
    onPress }: Props) => {
    return (
        <Pressable
            style={ ({pressed}) => ({
                ...globalStyles.button,
                backgroundColor:color,
                opacity: pressed ? 0.5 : 1, 
                width: doubleSize ? 180 : 80

            }) }
            onPress={
                () => {
                Haptics.selectionAsync();
                onPress();
            }
            }
        >
            <Text style={{
                //? traemos todas las propiedades del estilo buttonText
                //? y reescribimos el color del texto
                ...globalStyles.buttonText,
                color: blackText ? 'black' : 'white'


            }}
            >
                {label}
            </Text>
        </Pressable>
    )
}

export default CalculatorButton