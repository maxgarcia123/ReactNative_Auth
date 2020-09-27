interface Response{
   token: string;
   user: {
      name: string;
      email: string; 
   }
}

export function signIn(): Promise<Response>{
     return new Promise(resolve => {
            setTimeout(() => {
                resolve({
                    token: 'f56asd4f56sa46df464f6sdf46sd4f56ds4f6',
                    user:{
                        name: 'Max',
                        email: 'max@gamil.com'
                    },
                })
            }, 2000);
     });
}