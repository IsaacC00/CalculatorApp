import CalculatorButton from '@/components/CalculatorButton';
import CustomText from '@/components/CustomText';
import { Colors } from '@/constants/Colors';
import { useCalculator } from '@/hooks/useCalculator';
import { globalStyles } from '@/styles/global-styles';
import { View, Text } from 'react-native'

const CalculatorApp = () => {

  const {buildNumber, formula,clearAll, toggleSign,deleteLast} = useCalculator();


  return (

    <View style={globalStyles.calculatorContainer}>

      <View style={{ paddingHorizontal: 30, marginBottom: 20 }}>

        <CustomText variant='h1'>{formula}</CustomText>
        <CustomText variant='h2' >500</CustomText>

      </View>

      <View style={globalStyles.row} >
        <CalculatorButton
          label='C'
          onPress={clearAll}
          blackText
          color={Colors.lightGray}
          />
        <CalculatorButton
          label='+/-'
          onPress={toggleSign}
          blackText
          color={Colors.lightGray}
          />
        <CalculatorButton
          label='del'
          onPress={deleteLast}
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
          onPress={() => buildNumber('7')}
          color={Colors.darkGray}
          />
        <CalculatorButton
          label='8'
          onPress={() => buildNumber('8')}
          color={Colors.darkGray}
          />
        <CalculatorButton
          label='9'
          onPress={() => buildNumber('9')}
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
          onPress={() => buildNumber('4')}
          color={Colors.darkGray}
          />
        <CalculatorButton
          label='5'
          onPress={() => buildNumber('5')}
          color={Colors.darkGray}
          />
        <CalculatorButton
          label='3'
          onPress={() => buildNumber('3')}
          color={Colors.darkGray}
          />
        <CalculatorButton
          label='-'
          onPress={() => buildNumber('-')}
          color={Colors.orange}
          />
      </View>

      <View style={globalStyles.row} >
        <CalculatorButton
          label='1'
          onPress={() => buildNumber('1')}
          color={Colors.darkGray}
          />
        <CalculatorButton
          label='2'
          onPress={() => buildNumber('2')}
          color={Colors.darkGray}
          />
        <CalculatorButton
          label='3'
          onPress={() => buildNumber('3')}
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
          onPress={() => buildNumber('0')}
          color={Colors.darkGray}
          />
        <CalculatorButton
          label='.'
          onPress={() => buildNumber('.')}
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