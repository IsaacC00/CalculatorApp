import CalculatorButton from '@/components/CalculatorButton';
import CustomText from '@/components/CustomText';
import { Colors } from '@/constants/Colors';
import { globalStyles } from '@/styles/global-styles';
import { View, Text } from 'react-native'

const CalculatorApp = () => {

  return (

    <View style={globalStyles.calculatorContainer}>

      <View style={{ paddingHorizontal: 30, marginBottom: 20 }}>

        <CustomText variant='h1'>25 x 25</CustomText>
        <CustomText variant='h2' >500</CustomText>

      </View>

      <View style={globalStyles.row} >
        <CalculatorButton
          label='C'
          onPress={() => console.log('C')}
          blackText
          color={Colors.lightGray}
          />
        <CalculatorButton
          label='+/-'
          onPress={() => console.log('+/-')}
          blackText
          color={Colors.lightGray}
          />
        <CalculatorButton
          label='del'
          onPress={() => console.log('del')}
          blackText
          color={Colors.lightGray}
          />
        <CalculatorButton
          label='÷'
          onPress={() => console.log('÷')}
          color={Colors.orange}
          />
      </View>

      <View style={globalStyles.row} >
        <CalculatorButton
          label='7'
          onPress={() => console.log('7')}
          color={Colors.darkGray}
          />
        <CalculatorButton
          label='8'
          onPress={() => console.log('8')}
          color={Colors.darkGray}
          />
        <CalculatorButton
          label='9'
          onPress={() => console.log('9')}
          color={Colors.darkGray}
          />
        <CalculatorButton
          label='x'
          onPress={() => console.log('x')}
          color={Colors.orange}
          />
      </View>

      <View style={globalStyles.row} >
        <CalculatorButton
          label='4'
          onPress={() => console.log('4')}
          color={Colors.darkGray}
          />
        <CalculatorButton
          label='5'
          onPress={() => console.log('5')}
          color={Colors.darkGray}
          />
        <CalculatorButton
          label='3'
          onPress={() => console.log('3')}
          color={Colors.darkGray}
          />
        <CalculatorButton
          label='-'
          onPress={() => console.log('-')}
          color={Colors.orange}
          />
      </View>

      <View style={globalStyles.row} >
        <CalculatorButton
          label='1'
          onPress={() => console.log('1')}
          color={Colors.darkGray}
          />
        <CalculatorButton
          label='2'
          onPress={() => console.log('2')}
          color={Colors.darkGray}
          />
        <CalculatorButton
          label='3'
          onPress={() => console.log('3')}
          color={Colors.darkGray}
          />
        <CalculatorButton
          label='+'
          onPress={() => console.log('+')}
          color={Colors.orange}
          />
      </View>
      
      <View style={globalStyles.row} >
        <CalculatorButton
          label='0'
          doubleSize
          onPress={() => console.log('0')}
          color={Colors.darkGray}
          />
        <CalculatorButton
          label='.'
          onPress={() => console.log('.')}
          color={Colors.darkGray}
          />
        <CalculatorButton
          label='='
          onPress={() => console.log('=')}
          color={Colors.orange}
          />
      </View>

    </View>
  )
}

export default CalculatorApp;