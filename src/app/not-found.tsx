import Link from 'next/link'

export default async function NotFound() {

    return (
        <div className={'w-full h-full flex flex-col items-center justify-center gap-6'}>
            <h1 className={'text-2xl font-black text-red-500'}>404</h1>
            <h2 className={'text-xl font-black'}>Страница не найдена...</h2>
            <Link href="/" className={'text-xl text-blue-500 font-black underline'}> На главную </Link>
        </div>
    )
}