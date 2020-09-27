import React, { useContext }  from 'react';
import {Button, View, StyleSheet} from  'react-native';
import AuthContext from '../../contexts/auth';

const SingIn: React.FC = () => {
    const  {signed,signIn} = useContext(AuthContext)
    
    console.log(signed)

    async function hadlesingIn(){
       signIn();
    }

    return(
        <View style={styles.container}>
            <Button title="Sing in" onPress={hadlesingIn} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
  
export default SingIn;