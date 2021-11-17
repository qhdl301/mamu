
export const dateDiff = (paramDate : string) => {
    const nowDate = new Date();
    const nowYear = nowDate.getFullYear();
    const nowMonth = nowDate.getMonth()+1;
    const nowDay = nowDate.getDate();
    const endDate = new Date(nowYear, nowMonth, nowDay);
    let btMs = 0;
    let btDay = 0;

    if(paramDate.toString().indexOf('-') > -1) {
        const splitDate = paramDate.split('-');
        const startDate = new Date(Number(splitDate[0]), Number(splitDate[1]), Number(splitDate[2]));

        btMs = endDate.getTime() - startDate.getTime();
    }else {
        btMs = endDate.getTime() - Number(paramDate);
    }

    btDay = btMs / (1000*60*60*24);
    
    return btDay;
}