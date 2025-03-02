import { Button1, Button2 } from '../components/Buttons.jsx';
import React, { useEffect, useState } from "react";

function CheckPage({ 'selected': selected }) {
    const [nowTime, setNowTime] = useState(`몰루?`);

    useEffect(() => {
        const handleRequestGetData = async () => {
            let now = new Date();
            let year = now.getFullYear();
            let month = now.getMonth() + 1;
            let date = now.getDate();
            let day = now.getDay();
            let hour = now.getHours();
            let minute = now.getMinutes();
            let second = now.getSeconds();
            setNowTime(`${year}년 ${month}월 ${date}일 ${day}요일 ${hour}시 ${minute}분 ${second}초`);
        };

        handleRequestGetData();
    }, []); // 빈 배열을 넣으면 컴포넌트가 마운트될 때 실행됨

    return (
        <>
            <div>
                <h1>
                    당신은 메인 페이지에서 {selected} 버튼을 눌렀습니다. 현재 시간: {nowTime}
                </h1>
            </div>
        </>
    );
}

export default CheckPage;
