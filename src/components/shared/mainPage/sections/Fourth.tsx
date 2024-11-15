import React from 'react';
import Image from "next/image";

function Fourth() {
    return (
        <section
            className="mx-auto w-full bg-background relative grid grid-cols-3 justify-items-start gap-2">
            <div className={"relative flex items-start justify-start col-span-2"}>
                <ul className={"text-black text-3xl font-light px-24 py-12 text-start"}>
                    <li>- Строительно-техническая экспертиза;</li>
                    <li>- Почерковедческая экспертиза;</li>
                    <li>- Техническая экспертиза документов;</li>
                    <li>- Пожарно-техническая экспертиза;</li>
                    <li>- Финансово-экономическая экспертиза;</li>
                    <li>- Бухгалтерская экспертиза;</li>
                    <li>- Товароведческая экспертиза;</li>
                    <li>- Лингвистическая экспертиза;</li>
                    <li>- Землеустроительная экспертиза;</li>
                    <li>- Рецензирование заключений экспертов.</li>
                </ul>

                <div className={"absolute w-[4px] h-[150px] bg-accent rounded-2xl right-0 top-12"}></div>

                <Image src={"/img/mainPage/rectangle.png"}
                       alt={'Pic'}
                       fill={true}/>
            </div>

            <div className={"relative w-full"}>
                <Image src={"/img/mainPage/img2.png"}
                       alt={'Pic'}
                       fill={true}
                       className={"py-11 px-10 mr-10"}/>
            </div>


        </section>
    );
}

export default Fourth;