import { Text, TextProps } from 'react-native';
import { globalStyles } from '@/styles/global-styles';

//? este componente me va a servir para tener en cuenta 
//? generar dos o mas tipos de texto y para ello voy a definirlo como 
//? y como voy a reutilizar vamos a tiparlo de la siguietne manera
//? para no deestructurar todo lo que traiga las props 
//? lo tipamos de TextProps
interface Props extends TextProps {
    //? hacemos que el tipo de texto tenga una variante
    variant?: 'h1' | 'h2'
}

//? deestructuramos todo de las props
//? 
const CustomText = ({ children, variant = 'h1', ...rest }: Props) => {
    return (

        <Text
            style={[
                { fontFamily: 'SpaceMono' },
                variant === 'h1' && globalStyles.mainResult,
                variant === 'h2' && globalStyles.subResult
            ]}
            numberOfLines={1}
            adjustsFontSizeToFit
            {...rest}
        >
            {children}
        </Text>

    )
}

export default CustomText