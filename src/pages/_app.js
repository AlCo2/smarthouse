import './index.css';
import '../styles/addNote.css'
import '../styles/login.css'
import '../styles/settings.css'
import { SessionProvider } from "next-auth/react"

function App({ Component, pageProps }) {
  return (
   <SessionProvider session={pageProps.session}>
    <Component {...pageProps} />
   </SessionProvider>
  );
 }
 
 export default App;