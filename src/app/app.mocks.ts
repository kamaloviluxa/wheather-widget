import {Observable, of} from 'rxjs';
import {debounceTime} from 'rxjs/operators';

export interface ICity {
    img: string;
    address: string;
    description: string;
    type: string;
    weather: IWeather;
    social_info: ISocial;
}

export interface IWeather {
    title: string;
    water: number;
    temperature: number;
    img: string;
}

export interface ISocial {
    followers: number;
    following: number;
}

const cities: ICity[] = [
    {
        img: 'https://inquestor.ru/media/cache/moment_thumb/uploads/image/74fc6f35e267b40dce02c19b5ce96d36/2f70e45c95d755e8461e9c34027bdbe4.jpg',
        address: 'Екатеринбург',
        description: 'Екатеринбург – город в России, расположенный к востоку от Уральских гор. Одна из главных достопримечательностей – златоглавый Храм на Крови, построенный в начале XXI века на месте, где в 1918 году была расстреляна семья Романовых.',
        type: 'Город',
        weather: {
            title: 'Тепло',
            water: 13,
            temperature: 19,
            img: 'https://inquestor.ru/media/cache/moment_thumb/uploads/image/74fc6f35e267b40dce02c19b5ce96d36/cf3974913150b58813880649f4c0e786.jpg'
        },
        social_info: {
            followers: 1239,
            following: 1273
        },
    },
    {
        img: 'https://inquestor.ru/media/cache/moment_thumb/uploads/image/74fc6f35e267b40dce02c19b5ce96d36/06e0afe6752f842bc934369edb7f627e.jpg',
        address: 'Пермь',
        type: 'Город',
        description: 'Пермь — город на востоке европейской части России, в Предуралье, на берегах реки Камы, ниже впадения в неё реки Чусовой, административный центр Пермского края и Пермского района',
        weather: {
            title: 'Дождливо',
            water: 11,
            temperature: 13,
            img: 'https://inquestor.ru/media/cache/moment_thumb/uploads/image/74fc6f35e267b40dce02c19b5ce96d36/cf7d1d13716e2b68817a9c1bca0457cd.jpg'
        },
        social_info: {
            followers: 1031,
            following: 1203
        },

    },
    {
        img: 'https://inquestor.ru/media/cache/moment_thumb/uploads/image/74fc6f35e267b40dce02c19b5ce96d36/8c97008ac0d1311e46e1b20c8a88852b.jpg',
        address: 'Челябинск',
        type: 'Город',
        description: 'Челя́бинск — седьмой по количеству жителей, шестнадцатый по занимаемой площади город Российской Федерации, административный центр Челябинской области, городской округ с внутригородским делением',
        weather: {
            title: 'Ясно',
            water: 20,
            temperature: 33,
            img: 'https://inquestor.ru/media/cache/moment_thumb/uploads/image/74fc6f35e267b40dce02c19b5ce96d36/16249b264f43072cf2f8668c01ddd215.jpg'
        },
        social_info: {
            followers: 1731,
            following: 1103
        },
    },
    {
        img: 'https://inquestor.ru/media/cache/moment_thumb/uploads/image/74fc6f35e267b40dce02c19b5ce96d36/7f6a68bcf3917eb43887fd15ba010ded.jpg',
        address: 'Тюмень',
        type: 'Город',
        description: 'город в России, административный центр Тюменской области и Тюменского района, в состав которого не входит. Расположен на реке Тура',
        weather: {
            title: 'Дождливо',
            water: 11,
            temperature: 13,
            img: 'https://inquestor.ru/media/cache/moment_thumb/uploads/image/74fc6f35e267b40dce02c19b5ce96d36/7ceda8254deb65be5686e525f1a7d2dd.jpg'
        },
        social_info: {
            followers: 1031,
            following: 1203
        },
    }
];

export const cities$: Observable<ICity[]> = of(cities).pipe(
    debounceTime(1000)
);
