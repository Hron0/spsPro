import {ExpertiseType} from "@/lib/types/expertises";

type Props = {
    expertise: ExpertiseType
};

export const ExpertiseDetailed = ({expertise}: Props) => {
    return (
        <div className={'flex flex-col items-center justify-start w-full gap-2 relative overflow-y-hidden h-[95%]'}>
            <h1 className={'text-center text-3xl font-extralight'}>Арбитражный суд</h1>
            <div className={'flex flex-col gap-1 w-full'}>
                <div className={'flex flex-row justify-between'}>
                    <span className={'text-base font-extralight'}>Михаил Иванов</span>
                    <span className={'text-base font-extralight'}>против</span>
                    <span className={'text-base font-extralight'}>АО ТБанк</span>
                </div>
                <h1 className={'text-xl font-black uppercase'}>АРБИТРАЖНЫЙ СУД МОСКОВСКОЙ ОБЛАСТИ</h1>
                <h3 className={'text-base font-extralight'}>Дело N{expertise.case}</h3>
            </div>
            <div className={'flex flex-col gap-4 w-full'}>
                        <span className={'flex flex-col gap-1'}>
                            <h1 className={'text-xl font-black uppercase'}>Город</h1>
                            <h3 className={'text-base font-extralight'}>{expertise.city}</h3>
                        </span>
                <span className={'flex flex-col gap-1'}>
                            <h1 className={'text-xl font-black uppercase'}>Адрес</h1>
                            <h3 className={'text-base font-extralight'}>{expertise.address}</h3>
                        </span>
            </div>
            <div className={'flex flex-col w-full'}>
                <h1 className={'text-xl font-black uppercase'}>Вопросы на экспертизу</h1>
                <ul className={'text-base font-extralight'}>
                    {expertise.questions.map((item, index) => (
                        <li key={index} className={'list-decimal list-inside'}>
                            {item}
                        </li>
                    ))}
                </ul>
            </div>
            <div className={'flex flex-col gap-4 w-full'}>
                <h1 className={'text-xl font-black uppercase'}>Вид экспертизы</h1>
                <h3 className={'text-base font-extralight'}>{expertise.types}</h3>
            </div>
        </div>
    );
};