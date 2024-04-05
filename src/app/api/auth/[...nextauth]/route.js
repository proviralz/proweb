import { publicRequest } from '@/requestMethods';
import NextAuth from 'next-auth/next';
import GoogleProvider from 'next-auth/providers/google'
import { useDispatch } from 'react-redux';


const authOptions = {
    providers: [
      GoogleProvider({
        clientId: process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      }),
    ],
    callbacks: {
      async signIn({ user, account }) {
        if (account.provider === "google") {
          const { name, email } = user;
          try {
  
            const res = await publicRequest.post('auth/register', {
                fullName:name, 
                email: email
            })

            if(res.ok) {
                return res.data
            }
          } catch (error) {
            console.log(error);
          }
        }
  
        return user;
      },
    },
  };
  
  const handler = NextAuth(authOptions);
  
  export { handler as GET, handler as POST };
