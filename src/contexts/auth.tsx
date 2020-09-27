import React, { createContext, useState, useEffect } from 'react';
import AsycStorage from '@react-native-community/async-storage';
import * as auth from '../services/auth'
import { ActivityIndicator, View } from 'react-native';

interface AuthContextData {
    signed: boolean;
    user: object | null;
    signIn(): Promise<void>;
    signOut(): void;
    loading: boolean;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export const AuthProvider: React.FC = ({ children }) => {
    const [user, setUser] = useState<object | null >(null);
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        async function loadStoragedData() {
            const storagedUser = await AsycStorage.getItem('@RNAuth:user');
            const storagedToken = await AsycStorage.getItem('@RNAuth:token');

            if(storagedUser && storagedToken){
                setUser(JSON.parse(storagedUser));
                setLoading(false)
            }
        }
        loadStoragedData()
    }, [])

    async function signIn(){
        const response = await auth.signIn();

        setUser(response.user);

        await AsycStorage.setItem('@RNAuth:user', JSON.stringify(response.user));
        await AsycStorage.setItem('@RNAuth:token', response.token);
     }
    
     function signOut(){
        setUser(null)
     }



    return(
        <AuthContext.Provider value={{signed: !!user, user, signIn, signOut, loading}}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthContext;