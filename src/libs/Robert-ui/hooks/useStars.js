import { ref } from 'vue';

export function useStars(num, callback) {
    const starNum = ref(num); // 默认值为传入的形参num
    const setStarNum = (num) => {
        starNum.value = num;
        callback();
    }

    return [
        starNum,
        setStarNum
    ]
};