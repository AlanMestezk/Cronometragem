import { StyleSheet, Text, View, Image, TouchableOpacity  } from 'react-native';
import { GlobalStyles }                                     from './src/styles/GlobalStyles';


export default function App() {

  return (
    <View style={GlobalStyles.container}>

      <Image
        source = {require('./src/assets/cronometro.png')}
      />

      <Text style={GlobalStyles.timer}>0.0</Text>

      <View style={GlobalStyles.btnArea}>

        <TouchableOpacity style={GlobalStyles.button}>

            <Text style={GlobalStyles.btnText}>Vai</Text>

        </TouchableOpacity>

        <TouchableOpacity style={GlobalStyles.button}>

            <Text style={GlobalStyles.btnText}>Parar</Text>

        </TouchableOpacity>

      </View>
      
    </View>
  );
}

