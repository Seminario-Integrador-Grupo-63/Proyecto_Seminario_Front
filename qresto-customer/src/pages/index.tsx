import Head from 'next/head'
import {useState, useEffect} from 'react';
import { useRouter } from 'next/router'
import { NameInputMain } from '@/Customer/NameInput/NameInputMain'
import { postCustomer } from '@/requests'
import {MessageDialog} from '@/Common/MessageDialog'
// import {tableCode} from '@/Common/FakeData/Tables'
import { useSearchParams} from 'next/navigation'

export default function Home() {
    const router = useRouter()
    const [openRepeatedNameDialog, setOpenRepeatedNameDialog] = useState(false)
    const [openEmptyNameDialog, setOpenEmptyNameDialog] = useState(false)
    const searchParams = useSearchParams()
    const [tableCode, setTableCode] = useState('')
    
    const onEnterName = async (name) => {
        if(name === ''){
            setOpenEmptyNameDialog(true)
        } else {
            const result = await postCustomer(name, tableCode)
            setOpenRepeatedNameDialog(!result)
            if(result){
                router.replace({
                    pathname: "/menucategories",
                    query: {
                        customer: name,
                        tableCode: tableCode
                    }
                })
            }
        }
    }

    useEffect(() => {
        console.log(' ')
        console.log('Home useEffect searchParams')
        
        const tc = searchParams.get('table-code')
        console.log('tc: ', tc)
        setTableCode(tc)
    }, [searchParams])

    return (<>
        <Head>
            <title>Create Next App</title>
            <meta name="description" content="Generated by create next app" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link rel="icon" href="/favicon.ico" />
        </Head>
        <main>
            <NameInputMain onClick={onEnterName}/>
            <MessageDialog 
                open={openRepeatedNameDialog} 
                title='Nombre repetido'
                onSubmit={() => setOpenRepeatedNameDialog(false)}
                submitButtonText={"Aceptar"}
                cancelButtonVisible={false}
                description={'El nombre que ingresaste ya lo está usando alguien más en tu mesa. Por favor, cambialo agregando tu apellido, o colocando o agregando algún número o letra'}/>
        
            <MessageDialog 
                open={openEmptyNameDialog} 
                title='Ingrese un nombre'
                onSubmit={() => setOpenEmptyNameDialog(false)}
                cancelButtonVisible={false}
                submitButtonText={"Aceptar"}
                description={'Debe ingresar un nombre para poder realizar una orden'}/>
        </main>
    </>)
}
