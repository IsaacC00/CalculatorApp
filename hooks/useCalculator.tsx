import { useEffect, useRef, useState } from "react"

//? como una interface pero un poca mas estricto
//? vamos a definir los caracteres que vamos a menejar para las operaciones 
enum Operator {
    add = '+',
    remove = '-',
    multiply = 'x',
    divide = '÷',
}

export const useCalculator = () => {

    //? logica de nuestra calculadora

    //? use Ref para que reactr no renderice nada si cambia ekl operador
    const lastOperator = useRef<Operator>();

    //? state para crear la operacion para
    //? que la calculadore funcione 
    const [formula, setFormula] = useState('0');

    //? state para concatenar lso caracteres del numero
    const [number, setNumber] = useState('0');

    //? prev number para obtener el numero anterio una vez 
    //? se toque el boton de operacion para hacer el calculo 
    const [prevNumber, setPrevNumber] = useState('0');

    useEffect(() => {
        setFormula(number)
    }, [number]);

    const clearAll = () => {
        lastOperator.current = undefined;
        setFormula('0');
        setNumber('0');
        setPrevNumber('0');


    }

    const toggleSign = () => {
        if (!number.includes('-')) {
            setNumber('-' + number);
        } else {
            setNumber(number.replace('-', ''));
        }
    }

    const deleteLast = () => {
        let currentSign = '';
        let temporalNumber = '';

        if (number.includes('-')) {
            currentSign = '-';
            temporalNumber = number.substring(1);
        }

        if (temporalNumber.length > 1) {
            return setNumber( currentSign + temporalNumber.slice(0,-1) );
        }

    }

    //? metodo para construir el numero o cancatenar
    const buildNumber = (numberString: string) => {
        console.log('.' + numberString);

        if (number.includes('.') && numberString === '.') return;

        if (number.startsWith('0') || number.startsWith('-0')) {

            if (numberString === '.') {
                return setNumber(number + numberString);
            }

            if (numberString === '.') {
                return setNumber(number + numberString);
            }

            //? evaluar si es otro cero y no hay punto
            if (numberString === '0' && number.includes('.')) {
                return setNumber(number + numberString);
            }

            //? evaluar si es diferente de cero, no hay punto y es el primer numero
            if (numberString !== '0' && !number.includes('.')) {
                return setNumber(numberString);
            }

            //? evitar 000.000
            if (numberString === '0' && !number.includes('.')) {
                return
            }
        }
        setNumber(number + numberString);
    };



    return {
        //? Props
        number,
        formula,
        prevNumber,
        //? Methods
        buildNumber,
        clearAll,
        toggleSign,
        deleteLast
    }
}
