import { Text, View, Image, TouchableOpacity  } from 'react-native';
import { GlobalStyles }                         from './src/styles/GlobalStyles';
import { useEffect, useState }                  from 'react';


export default function App() {

  const [number,   setNumber] = useState<number>(0)
  const [timerId, setTimerId] = useState<NodeJS.Timeout | null>(null);

  const handleVai = () => {
    if (!timerId) {

      const id = setInterval(
        () => {

          setNumber(prevNumber => prevNumber + 0.1);

        }, 100
      );
        setTimerId(id);
    }
  };

  const handleParar = () => {

    if (timerId) {
      clearInterval(timerId);
      setTimerId(null);
    }else{
      alert(`Primeiro inicie o cronometro`)
    }
  };

  const handleZerar = ()=>{
    
    if (timerId) {
      clearInterval(timerId);
      setTimerId(null);
    
    }

    setNumber(0)

  }

  return (
    <View style={GlobalStyles.container}>

      <Image
        source = {require('./src/assets/cronometro.png')}
      />

      <Text style={GlobalStyles.timer}>{number.toFixed(1)}</Text>

      <View style={GlobalStyles.btnArea}>

        <TouchableOpacity style={GlobalStyles.button} onPress={handleVai}>

            <Text style={GlobalStyles.btnText}>Vai</Text>

        </TouchableOpacity>

        <TouchableOpacity style={GlobalStyles.button} onPress={handleParar}>

            <Text style={GlobalStyles.btnText}>Parar</Text>

        </TouchableOpacity>

        <TouchableOpacity style={GlobalStyles.button} onPress={handleZerar}>

            <Text style={GlobalStyles.btnText}>Zerar</Text>

        </TouchableOpacity>

      </View>
      
    </View>
  );
}

