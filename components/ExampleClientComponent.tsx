'use client'

import {useTranslation} from "react-i18next";

interface person {
    name:string
    age:number
}

const data = [
    {name:"leo",age:18},
    {name:"leo2",age:28},
    {name:"leo3",age:138},
    {name:"leo4",age:184},
] as const satisfies ReadonlyArray<person>

const ExampleClientComponent =  () => {
    const {t} = useTranslation()
    return (
        <div>
            <div>Client Component</div>
            <div>{data.map(item => item.name)}</div>
            {t('greeting')}
        </div>
    );
};

export default ExampleClientComponent;