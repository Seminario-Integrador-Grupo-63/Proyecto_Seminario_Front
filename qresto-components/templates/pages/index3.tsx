import Link from 'next/link'
import { useRouter } from 'next/router'

export default function Page() {
    const router = useRouter()
    
    const myFunction = () => {
        router.replace('/another-path')
    }

    return (<>
    </>)
}
