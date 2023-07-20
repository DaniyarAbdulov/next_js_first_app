import '@/styles/globals.css';
import Nav from '@/components/Nav';

export const metadata = {
    title: 'God help me...',
    description: 'Testing new Next App'
}

interface Props {
    children: any
}

const RootLayout = ({children}: Props) => {
  return (
    <html lang='en'>
        <body>
            <div className='main'>
                <div className='gradient'/>
            </div>
            <main className='app'>
                <Nav/>
                {children}
            </main>
        </body>

    </html>
  ) 
}

export default RootLayout;