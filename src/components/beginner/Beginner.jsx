import { useNavigate } from 'react-router-dom'
import challenges from '../../challenges.json'
import Nav from '../Nav'

const Beginner = () => {
    const navigate = useNavigate()

    return (
        <>
            <div className='px-20 md:px-60 lg:px-80 py-0'>
                <Nav />
            </div>

            <section className="flex-col px-6 md:px-20 lg:px-40 flex min-h-screen items-center justify-center bg-black dark:bg-white">

                <div className="flex flex-col items-start py-6 px-4 rounded-2xl h-80 w-full max-w-sm bg-pink-400 dark:bg-amber-400 text-black overflow-y-auto">

                    <ul className="w-full">
                        {challenges?.beginner.map((challenge) => (
                            <li key={challenge.id}>
                                <button
                                    onClick={() => navigate(challenge.href)}
                                    className="text-left w-full text-2xl py-2 cursor-pointer hover:text-white focus:outline-none"
                                >
                                    {challenge.name}
                                </button>
                            </li>
                        ))}
                    </ul>
                </div>
            </section>
        </>

    )
}

export default Beginner
