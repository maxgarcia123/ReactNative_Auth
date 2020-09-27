import React, { useContext }  from 'react';
import {Button, View, StyleSheet} from  'react-native';
import AuthContext from '../../contexts/auth';

const Deshboard: React.FC = () => {
    const  {signOut} = useContext(AuthContext)

    async function hadlesingOut(){
       signOut();
    }

    return(
        <View style={styles.container}>
            <Button title="sing out" onPress={hadlesingOut} />
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
  
export default Deshboard;